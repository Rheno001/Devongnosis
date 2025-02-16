import Navbar from '../components/Navbar.jsx'
import { useInView } from 'react-intersection-observer'
import heroimage from '../prof.svg'
import { motion } from 'framer-motion'
import logo from '../devalone.png'
import { useEffect, useState } from 'react';
import gen from '../gen.jpg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import About from '../components/About.jsx'
import Courses from '../pages/Courses.jsx'
import Testimonials from '../components/Testimonials.jsx'


function Home() {

    const { ref1, inView1 } = useInView({
        threshold: 0.1,
    });
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const [students, setStudents] = useState(0);
    const [tutors, setTutors] = useState(0);
    const [courses, setCourses] = useState(0);

    // Effect to count up when in view
    useEffect(() => {
        if (inView) {
            const interval1 = setInterval(() => {
                setStudents((prev) => (prev < 10 ? prev + 1 : prev));
            }, 100);
            const interval2 = setInterval(() => {
                setTutors((prev) => (prev < 20 ? prev + 1 : prev));
            }, 100);
            const interval3 = setInterval(() => {
                setCourses((prev) => (prev < 10 ? prev + 1 : prev));
            }, 100);
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            };
        }
    }, [inView]);

    return (
      <div>
        <Navbar/>
        <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="hero-oops absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-700 opacity-50 backdrop-blur-lg"></div>
      </div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 flex justify-around items-center opacity-30">
        <motion.div 
          className="w-32 h-32 bg-orange-500 rounded-full absolute top-10 left-10"
          animate={{ y: [0, 30, 0], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div 
          className="w-40 h-40 bg-gray-500 rounded-full absolute bottom-10 right-10"
          animate={{ y: [0, -30, 0], rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div 
          className="w-28 h-28 bg-orange-300 rounded-full absolute top-1/3 left-1/4"
          animate={{ x: [0, 40, 0], rotate: [0, 180] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <motion.div 
          className="w-36 h-36 bg-gray-400 rounded-full absolute bottom-1/4 right-1/3"
          animate={{ x: [0, -40, 0], rotate: [0, -180] }}
          transition={{ repeat: Infinity, duration: 9 }}
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-24">
        <motion.h1 
          className="text-4xl mt-[60px] md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Devognosis Education Limited", 2000, "Building resourceful capacity", 2000]}
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Join our expert-led training programs and take the next step in your career.
        </motion.p>
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#courses" className="text-white border-none text-[18px] px-4 py-2 duration-300 rounded-3xl hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-300">
            Explore Courses
          </a>
        </motion.div>
        
        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4 text-xl">
          <a href="#" className="text-orange-500 hover:text-orange-400 transition duration-300"><FaFacebook /></a>
          <a href="#" className="text-orange-500 hover:text-orange-400 transition duration-300"><FaTwitter /></a>
          <a href="#" className="text-orange-500 hover:text-orange-400 transition duration-300"><FaLinkedin /></a>
          <a href="#" className="text-orange-500 hover:text-orange-400 transition duration-300"><FaInstagram /></a>
        </div>
      </div>
    </section>
           <About/>
           <section className='gu px-[60px] py-[50px] relative'>
            <div className='text-left'>
                <h1 className='text-3xl lg:text-4xl md:leading-[40px] font-bold text-gray-800 text-left'>Guaranteed and<br/>Professional Tutors</h1>
            </div>
            <div className='cards flex flex-col items-center md:flex-row md:items-stretch justify-evenly mt-[20px] gap-4'>
                <div className="card text-center md:text-left w-[100%] lg:w-[33.3%] relative bg-black/10 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg flex flex-col justify-center items-center h-[200px]">
                    <h2 className="text-xl font-bold text-orange-500">Our Mission</h2>
                    <p className="text-gray-600 text-[13px]">Our mission is to create a 
                                                            platform, build resourceful 
                                                            capacity, project and bring high 
                                                            impact development programs 
                                                            and a wide range of consultancy
                                                            services that yields exceptional
                                                            human performance in private 
                                                            and public sectors</p>
                </div>
                <div className="card text-center md:text-left w-[100%] lg:w-[33.3%] relative bg-black/10 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg flex flex-col justify-center items-center h-[200px]">
                    <h2 className="text-xl font-bold text-orange-500">Our Vision</h2>
                    <p className="text-gray-600 text-[13px]">Our vision is to transform the 
                                                               learning world in delivering 
                                                               sustainable human capital for 
                                                               the present and the future</p>
                </div>
                <div className="card text-center md:text-left w-[100%] lg:w-[33.3%] relative bg-black/10 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg flex flex-col justify-center items-center h-[200px]">
                    <h2 className="text-xl font-bold text-orange-500">Guiding Attitude</h2>
                    <p className="text-gray-600 text-[13px]">Our primary focus is designing, 
                                                               developing and delivering both 
                                                               off-site and on-site training 
                                                                programmes. Our goal is to help 
                                                               clients mitigate risks and 
                                                                maximise returns, while training a 
                                                               confident and competent 
                                                                workforce.</p>
                </div>
            </div>
           </section>
           <section className='gu px-[60px] py-[50px] relative'>
            <div className='text-left'>
                <h1 className='text-3xl lg:text-4xl md:leading-[40px] font-bold text-gray-800 text-left'>A message<br/>from the Chairman</h1>
            </div>
            <div className='flex flex-col items-center justify-between md:flex-row gap-4 mt-[20px]'>
                <img src={gen} alt="" className='w-[50%] h-[50%] md:w-[20vw] md:h-[40vh] rounded-lg' />
                <p className='text-gray-600 text-[13px] text-center md:text-left'>Globally, nations have come to realize that educated society seems to have relative advantage in developing faster than those 
               that are not. Therefore, education is considered one of the most valuable treasure any nation can give to its citizens. 
                Functional education should be geared towards the acquisition of knowledge and information as well as relevant 
                competencies (skills, attitude, aptitude, etc.) Eective education therefore should go beyond mere literacy- ability to read and 
                write. It should incorporate ability to “do” and “apply” that is, it should equip the 
               leaners with some form of technical know how. These includes the ability to use working tools according to standard, social 
                behaviors etc.Devongnosis Education Limited see learning, unlearning and relearning as a 
               continuous process and we have taken it as our foremost responsibility that we pass the 
                necessary information that would build capacity of people in all sectors.
               We are committed to add value to society, improve operational standards, and help 
              create a stable and well organized workforce in both public and private organizations.
               We believe in networking to improve standards that is why our team is made of a network of professionals across diverse field and occupation
               </p>
            </div>
           </section>
           <Courses/>
           
           <Testimonials/>
        
        </div>
    );
}


export default Home