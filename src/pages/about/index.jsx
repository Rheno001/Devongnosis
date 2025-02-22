import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../devalone.png'
import Chair from '../../gen.jpg'

function About() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-gray-300 overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: 'url(/path/to/hero-image.jpg)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50  justify-center items-center text-white text-center">
            <motion.img
              src={logo} // Replace with the actual path to your logo
              alt="Organization Logo"
              className="w-[200px] h-[200px] mb-4"
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
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
      </div>

      {/* Chairman Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-4 justify-between px-6 md:px-16 py-[40px] text-center">
        <div className='text-center md:text-left'>
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A word from our chairman
        </motion.h2>
        <motion.div
          className="w-[55%] md:w-[50%] mx-auto md:mx-0 bg-orange-500 font-bold h-[5px] mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        </motion.div>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Globally, nations have come to realize that
educated society seems to have relative
advantage in developing faster than those
that are not. Therefore, education is
considered one of the most valuable
treasure any nation can give to its citizens.
Functional education should be geared
towards the acquisition of knowledge and
information as well as relevant
competencies (skills, attitude, aptitude,
etc.) Eective education therefore should
go beyond mere literacy- ability to read and
write. It should incorporate ability to “do”
and “apply” that is, it should equip the

leaners with some form of technical know-
how. These includes the ability to use

working tools according to standard, social
behaviors etc.
Devongnosis Education Limited see
learning, unlearning and relearning as a
continuous process and we have taken it as
our foremost responsibility that we pass the
necessary information that would build
capacity of people in all sectors.
We are committed to add value to society,
improve operational standards, and help
create a stable and well organized
workforce in both public and private
organizations.
We believe in networking to improve
standards that is why our team is made of a
network of professionals across diverse field
and occupation.        </motion.p>

        </div>
          <img src={Chair} alt="Chairman's picture" className='w-[25vw] md:ml-[20px] flex items-center justify-center rounded-full' />
        
      </section>

      {/* Vision Section */}
      <section className="flex items-center py-16 px-6 md:px-16 text-center bg-gray-200">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Devongnosis Education
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