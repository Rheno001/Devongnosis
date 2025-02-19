import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import about from "../../assets/about.jpg"
import Testimonials from "../../components/Testimonials.jsx"
import Carousel from "../../components/Carousel.jsx"

const images = [
  "../../assets/about.jpg",
  "../../assets/about.jpg",
  "../../assets/about.jpg",
  "../../assets/about.jpg"
];

const courses = [
  "Web Development", "Cybersecurity", "Data Science", "UI/UX Design", 
  "Digital Marketing", "Cloud Computing", "AI & Machine Learning", "Blockchain"
];

const Landing = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pb-[60px] bg-gray-100">
      {/* Hero Section with Image Slider */}
      <div className="relative h-screen w-full overflow-hidden">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Training Academy</h1>
          <p className="mt-4 text-lg md:text-xl">Enhance your skills with our world-class courses.</p>
          <Link to="/courses" className="mt-6 px-6 py-3 bg-white text-orange-500 font-semibold rounded-full shadow-md hover:scale-105 transition-transform">Explore Courses</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <img src={about} alt="About Us" className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800"><span className="text-orange-500">About </span>Us</h2>
          <p className="mt-4 text-gray-600">Devongnosis Education (DGE) is a global network of experienced
professionals and consultants assembled with the core objective of
providing world-class knowledge-based services to public and private
sector institutions within and outside Africa.</p>
          <Link to="/about" className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">Learn More</Link>
        </div>
      </div>

      {/* Courses Section with Carousel */}
      <div className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our <span className="text-orange-500">Courses</span></h2>
        <div className="overflow-hidden relative w-full">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: [0, -1200, 0] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          >
            {courses.map((course, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-xl p-6 w-60 text-center cursor-pointer"
                onClick={() => window.location.href = '/courses'}
              >
                <h3 className="text-xl font-bold text-gray-800">{course}</h3>
                <p className="text-gray-600 mt-2">Learn {course} from industry experts.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <Link to="/courses" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">See More</Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 md:px-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Frequently Asked <span className="text-orange-500">Questions</span></h2>
          <p className="mt-4 text-lg">Find answers to common questions about our training programs.</p>
        </div>
        <div className="md:w-1/2 space-y-4">
          {[
            "What courses do you offer?", "Are the courses online?", "Do you provide certifications?", "How do I enroll?", "What is the duration of each course?"
          ].map((faq, index) => (
            <details key={index} className="bg-gray-800 p-4 rounded-md cursor-pointer">
              <summary className="font-semibold">{faq}</summary>
              <p className="text-gray-300 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </details>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-[60px]"><Testimonials/></div>

      {/* CTA Section */}
      <div className="hidden md:block py-16 w-[90%] mx-auto rounded-4xl px-6 md:px-16 bg-gray-900 text-center text-white">
        <h2 className="text-3xl font-semibold">Ready to Take Your Skills <span className="text-orange-500">to the Next Level?</span> </h2>
        <p className="mt-4 text-lg">Join our training programs and start learning today. Take the first step towards your dream career!</p>
        <Link to="/contact" className="mt-6 inline-block px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">Get Started</Link>
      </div>
      <div className="mt-[10px]">
        <Carousel/>
      </div>
    </div>
  );
};

export default Landing;
