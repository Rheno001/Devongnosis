import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../dev2.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between py-0 px-[40px] md:px-[60px] bg-white">
                <div className="text-white flex items-center justify-center mt-[-20px] text-[20px] font-bold">
                    <img src={logo} className='w-[130px] md:w-[200px]' alt="" />
                </div>
                <button onClick={toggleNavbar} className="text-black md:hidden text-[25px]">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={`fixed md:ml-[200px] bg-gradient-to-r from-orange-500 to-orange-300 md:bg-none top-0 left-0 h-full w-64 transform transition-transform duration-300 md:static md:flex md:items-center md:justify-center md:w-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col items-center ml-[100px] justify-center mt-[100px] md:mt-0 md:flex-row md:space-x-4 p-4 md:justify-end">
                        <a href="#home" className="relative text-[20px] py-2 my-[10px] text-black group">
                            Home
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#courses" className="relative text-[20px] py-2 my-[10px] text-black group">
                            Courses
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#trainers" className="relative text-[20px] py-2 my-[10px] text-black group">
                            Trainers
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>

                    </div>
                </nav>
                <div className='hidden md:flex'>
                    <button className='text-white border-none text-[18px] px-4 py-2 duration-300 rounded-3xl hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-300'>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar
