import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover our mission, vision, and goals.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To empower individuals through education and skill development.
        </motion.p>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-16 text-center bg-gray-200">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To be a leader in innovative education solutions.
        </motion.p>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Goals
        </motion.h2>
        <motion.ul
          className="text-gray-600 list-disc list-inside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <li>Expand our reach globally.</li>
          <li>Enhance our curriculum with cutting-edge technology.</li>
          <li>Foster a community of lifelong learners.</li>
        </motion.ul>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-16 px-6 md:px-16 text-center bg-gray-200">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Our Organization
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our organization is dedicated to providing top-notch educational resources and training programs to help individuals achieve their personal and professional goals. We believe in the power of education to transform lives and communities.
        </motion.p>
      </section>

      {/* Message from the Patron Section */}
      <section className="py-16 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Message from Our Patron
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          "We are committed to making a difference in the world through education. Join us on this journey to empower and inspire."
        </motion.p>
      </section>
    </div>
  );
}

export default About;