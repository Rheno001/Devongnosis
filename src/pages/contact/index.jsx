// src/pages/contact/ContactPage.jsx
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../../assets/devalone-removebg-preview.png'; // Adjust the path to your logo

const ContactPage = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 50]);

    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 9.05785, lng: 7.49508 }, // Coordinates for Federal High Court, Abuja
                zoom: 15,
                mapTypeId: window.google.maps.MapTypeId.SATELLITE, // Set to satellite view
            });

            new window.google.maps.Marker({
                position: { lat: 9.05785, lng: 7.49508 },
                map,
                title: 'Federal High Court, Abuja',
            });
        };

        if (window.google) {
            initMap();
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg">We'd love to hear from you!</p>
                </div>
            </section>

            {/* Information Cards */}
            <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Phone</h2>
                    <p className="text-gray-700">+1 234 567 890</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Email</h2>
                    <p className="text-gray-700">info@organization.com</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Address</h2>
                    <p className="text-gray-700">123 Main Street, City, Country</p>
                </div>
            </section>

            {/* Google Map */}
            <section className="container mx-auto py-12">
                <div id="map" className="w-full h-96 bg-gray-200"></div>
            </section>

            {/* Contact Form */}
            <section className="container mx-auto py-12">
                <motion.div
                    className="relative bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.img
                        src={logo}
                        alt="Company Logo"
                        className="absolute top-0 right-0 w-16 h-16 transform -translate-y-1/2 translate-x-1/2"
                        style={{ y }}
                    />
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
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
            </section>
        </div>
    );
};

export default ContactPage;