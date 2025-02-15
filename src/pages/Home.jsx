import Navbar from '../components/Navbar.jsx'
import { useInView } from 'react-intersection-observer'
import heroimage from '../prof.svg'
import { motion } from 'framer-motion'
import logo from '../devalone.png'
import { useEffect, useState } from 'react';

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
        <div className="flex flex-col-reverse overflow-x-clip md:flex-row items-center justify-between mt-[50px] py-[0px] h-[550px] px-[60px] relative">
            <div className="flex flex-col py-[30px] mt-[-50px] md:mt-[0px]">
                <h1 className="text-4xl text-center md:text-left lg:text-5xl md:leading-[50px] font-bold text-gray-800">DevonGnosis <br />Education Limited</h1>
                <p className="text-lg text-left text-gray-600 mt-[10px]">...building resourceful capacity</p>
                <button className="border text-[18px] mt-[20px] rounded-xl border-none text-white py-2 px-4 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-300">
                    Get Started
                </button>
            </div>
            <div
                ref={ref}
                className={`transition-transform duration-700 transform h-1/2 md:h-full w-full md:w-1/2`}
            >
                <motion.img 
                    src={heroimage} 
                    alt="Hero" 
                    className="object-cover h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:w-[450px] lg:h-[400px] xl:w-[550px]" 
                    animate={{ y: [20, -10, 20] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop" }}
                />
                
            </div>
        </div>
           <section className='flex flex-col-reverse items-center md:flex-col px-[60px] pt-[10px] pb-[40px] md:py-[100px] bg-gray-500/20'>
           <div ref={ref1} className="bg-black/8 w-[95%] pt-[0px] pb-[8px] md:w-[80%] mb-[-70px] md:mt-[-110px] md:py-[10px] mx-auto rounded-3xl">
            <div className="flex justify-around mt-5 p-0">
                <div className="text-center">
                    <h3 className="text-xl md:text-3xl text-orange-500 font-bold">{students}+</h3>
                    <p className='text-gray-600 font-semibold'>Students</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl md:text-3xl text-orange-500 font-bold">{tutors}+</h3>
                    <p className='text-gray-600 font-semibold'>Tutors</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl md:text-3xl text-orange-500 font-bold">{courses}+</h3>
                    <p className='text-gray-600 font-semibold'>Courses</p>
                </div>
            </div>
           </div> 
            <div className='mt-[20px]'>
            <div className='text-left'>
                <h1 className='text-3xl lg:text-4xl md:leading-[40px] font-bold text-gray-800 text-left'>About<br/>Devongnosis</h1>
            </div>
            <div className='text pr-[20px]'>
                <p className='text-sm text-left text-gray-600 mt-[10px]'>Devongnosis Education (DGE) is a global network of experienced 
professionals and consultants assembled with the core objective of 
providing world-class knowledge-based services to public and private 
sector institutions within and outside Africa. We leverage on a network of 
excellent partnership with world renowned training establishments, and 
business schools as well as ICT organizations in the US, Asia and Europe to 
provide combined wealth of expertise, re-engineered systems and cutting 
edge training services across a broad spectrum of sectors.</p>

            </div>
            </div>
           </section>
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
           
           <section className='courses px-[60px] py-[50px]'>
            
           </section>
        
        </div>
    );
}


export default Home