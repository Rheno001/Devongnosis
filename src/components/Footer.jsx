import React from 'react';
import logo from '../devalone.png'; // Adjust the path as necessary
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-[60px]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="flex items-center mr-[30px] md:mr-[0] mb-4 md:mb-0">
                    <img src={logo} alt="Company Logo" className="h-20 mr-3" />
                    <span className="text-xl font-bold ml-[-35px]">DevonGnosis</span>
                </div>
                <nav className="flex flex-col items-center md:flex-row mb-4 md:mb-0">
                    <a href="#home" className="px-4 py-2 text-orange-500 hover:underline hover:text-orange-300 transition duration-300">Home</a>
                    <a href="#about" className="px-4 py-2 text-orange-500 hover:underline hover:text-orange-300 transition duration-300">About</a>
                    <a href="#services" className="px-4 py-2 text-orange-500 hover:underline hover:text-orange-300 transition duration-300">Services</a>
                    <a href="#contact" className="px-4 py-2 text-orange-500 hover:underline hover:text-orange-300 transition duration-300">Contact</a>
                </nav>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl hover:text-blue-600" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl hover:text-blue-400" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-blue-700" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-pink-500" />
                    </a>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} DevonGnosis. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;