'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPython, FaJsSquare, FaDatabase, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiPostgresql, SiMongodb } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const About = () => {
  return (
    <div style={{ color: 'white' }}> {/* Set the text color to white */}
      <Navbar page='/about' />
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left Section - Text */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-medium mt-4 text-center">About Me</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto md:mx-0 text-center">
            I'm a software engineer passionate about using my skills to create a better world. I'm Kyle Walker, I graduated from Rensselaer Polytechnic Institute, where I studied Computer Science. My last job was at Neural Stem Cell Institute, where I collaborated with principal investigators to deliver several products to save time and money in the institute, including an application that automatically measures rat movement from images, aiding in spinal injury research. I also developed image recognition software to automate image processing within the institute in real-time and categorize cell growth colonies, reducing time spent by up to 4 months of a 6-month growth period. Most recently I have been working with a team of 4 developers to create a web and mobile application called ShopEasy.
          </p>
        </div>

        {/* Right Section - Photo */}
        <div className="md:w-1/2 md:pl-8 flex justify-center">
          <img src="/assets/your-photo.jpg" alt="Your Photo" className="rounded-lg border-4 border-gray-200" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-12 pb-14">
        <h2 className="text-center pb-12 text-4xl text-gray-200 font-medium">Skills</h2>
        <div className="primary-bg even-shadow border-2 border-gray-200 p-10 rounded-lg max-w-6xl mx-10 lg:mx-auto px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-10 ">
          {/* Programming Languages */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1">
            <FaPython className="text-6xl text-black" />
            <p className="mt-2">Python</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaJsSquare className="text-6xl text-black" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiCplusplus className="text-6xl text-black" />
            <p className="mt-2">C++</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <DiJava className="text-6xl text-black" /> 
            <p className="mt-2">Java</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaHtml5 className="text-6xl text-black" />
            <p className="mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaCss3Alt className="text-6xl text-black" />
            <p className="mt-2">CSS3</p>
          </div>

          {/* Databases */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiPostgresql className="text-6xl text-black" />
            <p className="mt-2">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiMongodb className="text-6xl text-black" />
            <p className="mt-2">MongoDB</p>
          </div>

          {/* Frameworks/Libraries */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaReact className="text-6xl text-black" />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiNextdotjs className="text-6xl text-black" />
            <p className="mt-2">Next.js</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
