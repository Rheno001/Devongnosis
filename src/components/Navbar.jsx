import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../devalone.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between py-0 px-[40px] lg:px-[60px] bg-white">
                <div className="text-gray-800 p-0 flex items-center justify-center text-[20px] font-bold">
                    <img src={logo} className='p-0 h-[60px] ml-[-20px] w-[60px] md:w-[90px]' alt="" />
                    <p className='ml-[-15px] md:ml-[-25px] text-gray-600 text-[8px] md:text-[15px] font-bold leading-[7px] md:leading-[13px]'>DEVONGNOSIS<br/>EDUCATION</p>
                </div>
                <button onClick={toggleNavbar} className="text-black lg:hidden text-[25px]">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={`fixed lg:ml-[200px] bg-gradient-to-r from-orange-500 to-orange-300 lg:bg-none top-0 left-0 h-full w-64 transform transition-transform duration-300 lg:static lg:flex lg:items-center lg:justify-center lg:w-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col items-center ml-[100px] justify-center mt-[100px] lg:mt-0 lg:flex-row lg:space-x-4 p-4 lg:justify-end">
                        <a href="#home" className="relative text-[18px] py-2 my-[10px] text-black group">
                            Home
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#courses" className="relative text-[18px] py-2 my-[10px] text-black group">
                            Courses
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#trainers" className="relative text-[18px] py-2 my-[10px] text-black group">
                            Trainers
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>

                    </div>
                </nav>
                <div className='hidden lg:flex'>
                    <button className='text-white border-none text-[18px] px-4 py-2 duration-300 rounded-3xl hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-300'>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar
