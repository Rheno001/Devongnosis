// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import image1 from '../bg1.jpg'; // Replace with actual image paths
import image2 from '../bg2.jpg';
import image3 from '../bg3.jpg';
import image4 from '../bg4.jpg';

const backgroundImages = [image1, image2, image3, image4];

const HeroSection = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const texts = ['Devongnosis Education', 'Your Motto'];
    const textRef = useRef(null);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 3 } }, // Slow fade-in
    };

    const slideDown = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Slow slide-down
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    textRef.current.classList.add('slide-in');
                }
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section
            className="relative overflow-hidden bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${backgroundImages[bgIndex]})`,
                transition: 'background-image 1s ease-in-out',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className="container mx-auto text-center px-4 relative z-10 flex flex-col justify-center items-center h-full">
                <motion.h1
                    className="text-4xl md:text-7xl font-bold mb-4 text-orange-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                >
                    Devongnosis <span className='text-white'>Education</span>
                </motion.h1>
                <motion.p
                    className="text-lg max-w-2xl mx-auto text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={slideDown}
                >
                    Our trainers are industry leaders with years of experience and a passion for teaching. They are dedicated to helping you achieve your learning goals with personalized guidance and support.
                </motion.p>
                <Link
                        to="/contact"
                        className="mt-[20px] text-white text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-orange-500"
                    >
                        Contact Us
                    </Link>
            </div>
        </section>
    );
};

export default HeroSection;