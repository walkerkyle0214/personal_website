'use client'
import React, { useState } from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const EmailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true"></div>

        <div className="inline-block px-4 pt-5 pb-4 primary-bg even-shadow rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="primary-bg sm:p-6 sm:pb-4 rounded-lg">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg font-medium leading-6 text-white" id="modal-title">
                  Contact Information
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-white">
                    Email: <a href="mailto:walkerkyle0214@gmail.com" className="underline">walkerkyle0214@gmail.com</a>
                  </p>
                  <p className="text-sm text-white mt-2">
                    Name: Kyle Walker
                  </p>
                </div>
                <div className="pt-5 sm:flex sm:flex-row-reverse">
                  <button type="button" onClick={onClose} className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-primary-color border border-white rounded-md even-shadow hover:bg-black sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Navbar page='/' />
      
      <div className="home-container" style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="content grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-5 lg:gap-8 p-5 mt-10">
          <div className="profile flex justify-center lg:order-1 lg:ml-5 mb-4">
            <div className="w-48 h-48 border-8 border-[#5C8374] rounded-full transform transition-transform duration-300 hover:scale-110">
              <img src="assets/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <div className="text-section lg:order-0">
            <div className="centered text-center">
              <h1 className="text-white text-4xl font-bold whitespace-nowrap font-inter"
                style={{
                  color: 'white',
                  fontSize: '36px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif"
                }}>
                Hello, I'm Kyle Walker
              </h1>
            </div>
            <div className="centered text-center">
              <h2 className="text-white text-lg mt-2 font-ibm-plex-mono"
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'IBM Plex Mono, monospace'
                }}>
                Software Engineer
              </h2>
            </div>
            <div className="links-container centered flex justify-center mt-4 space-x-4">
              <a href="https://www.linkedin.com/in/walkerbkyle/" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300">
                <FaLinkedin size="1.5em" />
              </a>
              <a href="https://github.com/walkerkyle0214" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 ml-4">
                <FaGithub size="1.5em" />
              </a>
              <button onClick={openModal} className="text-white hover:text-gray-300 ml-4 bg-none border-none">
                <FaEnvelope size="1.5em" />
              </button>
              <EmailModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="text-white text-center py-20">
          <h2 id="featured-projects" className="text-white text-4xl font-bold whitespace-nowrap font-inter"
            style={{
              color: 'white',
              fontSize: '36px',
              marginBottom: '20px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              fontWeight: 600,
              fontFamily: "Inter, sans-serif"
            }}>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-20">
            {/* Project 1 */}
            <div className="border-2 rounded-lg even-shadow primary-bg text-gray-200 border-gray-200 p-8">
              <div className="flex flex-row items-center justify-between mb-8">
                <h1 className="text-2xl font-medium">ShopEasy</h1>
                <a href="https://github.com/Yotham/ShopEasy" target="_blank" rel="noopener noreferrer"
                  className="hover:text-gray-300">
                  <FaGithub className="icon-standard" />
                </a>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="relative">
                  <img src="assets/shopeasyThumbnail.png" alt="Project Image"
                    className="w-80 lg:w-full lg:max-w-xl rounded-lg object-cover border-2 border-gray-200 even-shadow"
                    draggable={false} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <a href="https://drive.google.com/file/d/1Cm81gOap1M6pPzonqatPWMLItm_4fx_K/view?usp=drive_link"
                      target="_blank" rel="noopener noreferrer"
                      className="absolute bg-gray-200 text-black rounded shadow p-2 hover:bg-gray-300">View Demo</a>
                  </div>
                </div>
                <p className="max-w-xs lg:max-w-xl">A web and mobile application that generates grocery lists based on user input.</p>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-start text-center text-md md:text-xl font-medium items-center">
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Python</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">React.js</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Next.js</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">MongoDB</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">HTML</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Tailwind</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-2 rounded-lg even-shadow primary-bg text-gray-200 border-gray-200 p-8">
              <div className="flex flex-row items-center justify-between mb-8">
                <h1 className="text-2xl font-medium">Music Player Monopoly</h1>
                <a href="https://github.com/rkwitz/Music-Player-Monopoly" target="_blank" rel="noopener noreferrer"
                  className="hover:text-gray-300">
                  <FaGithub className="icon-standard" />
                </a>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="relative">
                  <img src="assets/MPMthumbnail.png" alt="Project Image"
                    className="w-80 lg:w-full lg:max-w-xl rounded-lg object-cover border-2 border-gray-200 even-shadow"
                    draggable={false} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <a href="https://drive.google.com/file/d/1lRqurkjVUBthOSnWx4QrOJgANDOpOf-v/view?usp=drive_link"
                      target="_blank" rel="noopener noreferrer"
                      className="absolute bg-gray-200 text-black rounded shadow p-2 hover:bg-gray-300">View Demo</a>
                  </div>
                </div>
                <p className="max-w-xs lg:max-w-xl">A web application that allows the user to login with Spotify in order to view statistics based onlistening history.</p>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-start text-center text-md md:text-xl font-medium items-center">
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">CSS</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Node.js</div>
                  <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">HTML</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-2 rounded-lg even-shadow primary-bg text-gray-200 border-gray-200 p-8">
              <div className="flex flex-row items-center justify-between mb-8">
                <h1 className="text-2xl font-medium">MLBkirk</h1>
                <a href="https://github.com/walkerkyle0214/MLBkirk" target="_blank" rel="noopener noreferrer"
                  className="hover:text-gray-300">
                  <FaGithub className="icon-standard" />
                </a>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="relative">
                  <img src="assets/WIP.png" alt="Project Image"
                    className="w-80 lg:w-25 rounded-lg object-cover border-2 border-gray-200 even-shadow"
                    draggable={false} />
                </div>
                <p className="max-w-xs lg:max-w-xl">A web application that allows the user to login with Spotify in order to view statistics based onlistening history.</p>
              </div>
              <div className="mt-8">
          
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
