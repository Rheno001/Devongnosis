import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../devalone.png'
import Chair from '../../gen.jpg'
import { FaBullseye } from 'react-icons/fa';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

function About() {
  const [offsetY, setOffsetY] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
    setShowCard(true);
  };

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
      <section className="hidden md:flex flex-col-reverse md:flex-row items-center gap-4 justify-between px-6 md:px-16 py-[40px] text-center">
        <div className='text-center md:text-left'>
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A word from our chairman
        </motion.h2>
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
write. It should incorporate ability to "do"
and "apply" that is, it should equip the

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
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 text-center bg-white relative">
        
          {/* First Div */}
          <div className="md:w-1/2 p-4">
            <motion.h2
              className="text-2xl md:text-3xl md:text-left font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Devongnosis Education
            </motion.h2>
            <motion.p
              className="text-[12px] md:text-[16px] text-gray-600 mb-4 md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Devongnosis Education (DGE) is a global network of experienced
professionals and consultants assembled with the core objective of
providing world-class knowledge-based services to public and private
sector institutions within and outside Africa. We leverage on a network of
excellent partnership with world renowned training establishments, and
business schools as well as ICT organizations in the US, Asia and Europe to
provide combined wealth of expertise, re-engineered systems and cutting
edge training services across a broad spectrum of sectors.
            </motion.p>
            <motion.button
              className="text-white md:flex text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:text-orange-500 shadow-md hover:bg-white"
              onClick={() => setShowCard(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </div>

        {/* Overlay and Card */}
        {showCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">More About Our Devongnosis Education</h3>
              <p className="text-[12px] md:text-[16px] text-gray-700 mb-4">
              In line with our strategy for realizing set
objectives, Devongnosis organizes
National and International Programmes
(Conferences, Workshops, Seminars and
Exhibitions) with themes carefully
selected to address critical and
contemporary challenges. Our
Programmes are organized both within
and outside Nigeria. We collaborate with
appropriate public and private sector
organizations and professional
institutions to deliver on our set goals and
objectives.
Our faculty is composed of highly skilled
professionals in public and executive
training/mentoring, skill acquisition &
capacity building. Our proposal is
unequalled as it is particularly tailored to
ameliorate the challenges faced by the
Nigeria Customs Service. Our experience
and feedback from previous trainings
conducted for the service gives us a clear
understanding of these challenges.
              </p>
              <button
                className="text-white text-lg px-6 py-2 rounded-3xl bg-orange-500 transition-transform duration-300 hover:scale-105 hover:text-orange-500 shadow-md hover:bg-white"
                onClick={() => setShowCard(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

<div className="flex flex-col gap-4 md:w-1/2">
          {/* First Div */}
          <motion.div
            className="flex p-4 rounded-xl cursor-pointer"
            onClick={() => handleCardClick(1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAngleDoubleRight className="text-4xl text-orange-500  h-[75px] w-[75px] md:h-[130px] md:w-[220px] md:mr-[20px]" />
            <div>
            <h2 className="text-xl md:text-2xl md:text-left font-bold text-gray-800 mb-[2px]">Our Mission</h2>
            <p className="text-[12px] md:text-[16px] text-gray-600 md:text-left">Our mission is to create a
platform, build resourceful
capacity, project and bring high
impact development programs
and a wide range of consultancy
services that yields exceptional
human performance in private
and public sectors</p>
            </div>
            
          </motion.div>

          {/* Second Div */}
          <motion.div
            className="flex p-4 rounded-xl cursor-pointer"
            onClick={() => handleCardClick(1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullseye className="text-4xl text-orange-500 md:h-[130px] md:w-[120px] md:mr-[20px]" />
            <div>
            <h2 className="text-xl md:text-2xl md:text-left font-bold text-gray-800 mb-[2px]">Our Vision</h2>
            <p className="text-[12px] md:text-[16px] text-gray-600 md:text-left">Our vision is to transform the
learning world in delivering
sustainable human capital for
the present and the future</p>
            </div>
            
          </motion.div>

          {/* Third Div */}
          <motion.div
            className="flex p-4 rounded-xl cursor-pointer"
            onClick={() => handleCardClick(1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAngleDoubleLeft className="text-4xl text-orange-500 md:h-[130px] md:w-[120px] md:mr-[20px]" />
            <div>
            <h2 className="text-xl md:text-2xl md:text-left font-bold text-gray-800 mb-[2px]">Our Guiding Attitude</h2>
            <p className="text-[12px] md:text-[16px] text-gray-600 md:text-left">Our primary focus is designing,
developing and delivering both
o -site and on-site training
programmes.</p>
            </div>
            
          </motion.div>
        </div>

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