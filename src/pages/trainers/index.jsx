// src/pages/trainers/TrainersPage.jsx
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import logo from '../../assets/devalone-removebg-preview.png'; // Adjust the path to your logo

const trainers = [
    {
        name: 'John Doe',
        subject: 'Mathematics',
        qualifications: 'PhD in Mathematics, 10 years of teaching experience',
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        name: 'Jane Smith',
        subject: 'Physics',
        qualifications: 'MSc in Physics, 5 years of teaching experience',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Emily Johnson',
        subject: 'Chemistry',
        qualifications: 'BSc in Chemistry, 3 years of teaching experience',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Michael Brown',
        subject: 'Biology',
        qualifications: 'PhD in Biology, 8 years of teaching experience',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Sarah Wilson',
        subject: 'English',
        qualifications: 'MA in English, 6 years of teaching experience',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'David Lee',
        subject: 'History',
        qualifications: 'BA in History, 4 years of teaching experience',
        image: 'https://via.placeholder.com/150',
    },
];

const TrainersPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handleSwipe = (direction) => {
        if (direction === 'LEFT') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
        } else if (direction === 'RIGHT') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + trainers.length) % trainers.length);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('LEFT'),
        onSwipedRight: () => handleSwipe('RIGHT'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -50]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-gray-300 flex items-center text-white py-20 relative overflow-hidden">
                <motion.img
                    src={logo}
                    alt="Organization Logo"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-60 md:h-60"
                    style={{ y }}
                />
                <div className="container mx-auto text-center mt-[100px] px-4 relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Meet Our Expert Trainers</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Our trainers are industry leaders with years of experience and a passion for teaching. They are dedicated to helping you achieve your learning goals with personalized guidance and support.
                    </p>
                </div>
            </section>

            {/* Trainers Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Trainers</h2>
                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                                    <p className="text-gray-700 mb-1"><strong>Subject:</strong> {trainer.subject}</p>
                                    <p className="text-gray-700"><strong>Qualifications:</strong> {trainer.qualifications}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="sm:hidden relative" {...handlers}>
                        <div className="flex overflow-hidden">
                            {trainers.map((trainer, index) => (
                                <motion.div
                                    key={index}
                                    className={`inline-block bg-white shadow-lg rounded-lg overflow-hidden mr-4 transition-transform duration-500 ease-in-out transform ${
                                        index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                                >
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-64 h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                                        <p className="text-gray-700 mb-1"><strong>Subject:</strong> {trainer.subject}</p>
                                        <p className="text-gray-700"><strong>Qualifications:</strong> {trainer.qualifications}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            {trainers.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                                        index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                    onClick={() => handleDotClick(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <motion.div
                        className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Message</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Message"
                                    rows="4"
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TrainersPage;