import Navbar from '../components/Navbar.jsx'
import { useInView } from 'react-intersection-observer'
import heroimage from '../undraw_teaching_58yg.png'
import { motion } from 'framer-motion'

function Home() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
      <div>
        <Navbar/>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-[50px] py-[0px] h-[600px] px-[60px]">
            <div className="flex flex-col py-0">
                <h1 className="text-5xl leading-tight font-bold text-gray-800 text-left">DevonGnosis <br />Education Limited</h1>
                <p className="text-lg text-left text-gray-600">...building resourceful capacity</p>
                <button className="border text-[18px] rounded-xl border-none text-white py-2 px-4 rounded transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-300">
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
                    className="object-cover w-full h-full" 
                    animate={{ y: [40, -10, 40] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop" }}
                />
            </div>
        </div>
        </div>
    );
}


export default Home