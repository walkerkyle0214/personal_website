'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiPostgresql, SiMongodb, SiSap } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { PiFileSqlThin } from 'react-icons/pi';

const useTypewriter = (text, typingSpeed = 150, startTyping = false) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (!startTyping) return;

    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [typedText, text, typingSpeed, startTyping]);

  return typedText;
};

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const aboutText = " I'm Kyle Walker, a software engineer passionate about using my skills to create a better world. I graduated from Rensselaer Polytechnic Institute, where I studied Computer Science. My last job was at Neural Stem Cell Institute, where I collaborated with principal investigators to deliver several products to save time and money in the institute, including an application that automatically measures rat movement from images, aiding in spinal injury research. I also developed image recognition software to automate image processing within the institute in real-time and categorize cell growth colonies, reducing time spent by up to 4 months of a 6-month growth period. Most recently I have been working with a team of 4 developers to create a web and mobile application called ShopEasy.";
  const typedAboutText = useTypewriter(aboutText, 50, !isLoading);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="bg-black text-gray-200">
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar page='/about' />
      {/* About Section */}
      <div className="flex flex-col items-center justify-center py-20">
        <img src="/assets/fam.jpg" alt="Family Photo" width={300} height={300} className="rounded-lg border-4 border-gray-200" draggable={false} />
        <h2 className="text-4xl font-medium mt-4">About Me</h2>
        <p className="mt-4 mx-4 sm:mx-4 md:mx-0 lg:mx-0 xl:mx-0 max-w-2xl text-lg text-center">
          {typedAboutText}
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-12 pb-14">
        <h2 className="text-center pb-12 text-4xl font-medium">Skills</h2>
        <div className="bg-black even-shadow border-2 border-gray-200 p-10 rounded-lg max-w-6xl mx-10 lg:mx-auto px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-10">
          {/* Programming Languages */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1">
            <FaPython className="text-6xl text-black" />
            <p className="mt-2 text-black">Python</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaJsSquare className="text-6xl text-black" />
            <p className="mt-2 text-black">JavaScript</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiCplusplus className="text-6xl text-black" />
            <p className="mt-2 text-black">C++</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <DiJava className="text-6xl text-black" /> 
            <p className="mt-2 text-black">Java</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaHtml5 className="text-6xl text-black" />
            <p className="mt-2 text-black">HTML5</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaCss3Alt className="text-6xl text-black" />
            <p className="mt-2 text-black">CSS3</p>
          </div>

          {/* Databases */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiPostgresql className="text-6xl text-black" />
            <p className="mt-2 text-black">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiMongodb className="text-6xl text-black" />
            <p className="mt-2 text-black">MongoDB</p>
          </div>

          {/* Frameworks/Libraries */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaReact className="text-6xl text-black" />
            <p className="mt-2 text-black">React</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiNextdotjs className="text-6xl text-black" />
            <p className="mt-2 text-black">Next.js</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
