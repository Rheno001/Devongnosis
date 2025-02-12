import Navbar from '../components/Navbar.jsx'
import { useInView } from 'react-intersection-observer'
import heroimage from '../undraw_teaching_58yg.png'
import { motion } from 'framer-motion'
import logo from '../devalone.png'
import { useEffect, useState } from 'react'; // Ensure useEffect is imported

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
                setStudents((prev) => (prev < 50 ? prev + 1 : prev));
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
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[50px] py-[0px] h-[600px] px-[60px]">
            <div className="flex flex-col py-0">
                <h1 className="text-5xl leading-tight font-bold text-gray-800 text-left">DevonGnosis <br />Education Limited</h1>
                <p className="text-lg text-left text-gray-600">...building resourceful capacity</p>
                <button className="border text-[18px] rounded-xl border-none text-white py-2 px-4 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-300">
                    Get Started
                </button>
            </div>
            <div
                ref={ref}
                className={`transition-transform duration-700 transform ${inView ? 'translate-x-0' : 'translate-x-80'} h-1/2 md:h-full w-full md:w-1/2`}
            >
                <motion.img 
                    src={heroimage} 
                    alt="Hero" 
                    className="object-cover h-[400px] w-[400px] lg:w-full lg:h-full" 
                    animate={{ y: [40, -10, 40] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop" }}
                />
            </div>
        </div>
        <div ref={ref1} className="md:mt-[-20px] md:absolute right-70 bg-black/8 w-[60%] mx-auto rounded-2xl">
            <div className="flex justify-around mt-5">
                <div className="text-center">
                    <h3 className="text-3xl text-orange-500 font-bold">{students}</h3>
                    <p className='text-orange-500'>Students</p>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl text-orange-500 font-bold">{tutors}</h3>
                    <p className='text-orange-500'>Tutors</p>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl text-orange-500 font-bold">{courses}</h3>
                    <p className='text-orange-500'>Courses</p>
                </div>
            </div>
           </div> 
        
        </div>
    );
}


export default Home