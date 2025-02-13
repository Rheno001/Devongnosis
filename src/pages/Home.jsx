import Navbar from '../components/Navbar.jsx'
import { useInView } from 'react-intersection-observer'
import heroimage from '../prof.svg'
import { motion } from 'framer-motion'
import logo from '../devalone.png'
import { useEffect, useState, useRef } from 'react'; // Ensure useEffect is imported

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
    const coursesRef = useRef(null); // Create a ref for the courses section

const scrollLeft = () => {
    if (coursesRef.current) {
        coursesRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the scroll amount as needed
    }
};

const scrollRight = () => {
    if (coursesRef.current) {
        coursesRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the scroll amount as needed
    }
};

    return (
      <div>
        <Navbar/>
        <div className="flex flex-col-reverse overflow-x-clip md:flex-row items-center justify-between mt-[50px] py-[0px] h-[550px] px-[60px] relative">
            <div className="flex flex-col py-[30px] mt-[-50px] md:mt-[0px]">
            <div className="absolute inset-0 opacity-10">
                    <svg width="100" height="100" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '0%' }}>
                        <circle cx="50" cy="50" r="20" fill="orange" />
                    </svg>
                    <svg width="80" height="80" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '20%' }}>
                        <rect width="40" height="40" fill="blue" />
                    </svg>
                    <svg width="60" height="60" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '30%' }}>
                        <polygon points="30,0 60,60 0,60" fill="green" />
                    </svg>
                    <svg width="50" height="50" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '20%' }}>
                        <ellipse cx="25" cy="25" rx="25" ry="15" fill="purple" />
                    </svg>
                    <svg width="40" height="40" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '60%' }}>
                        <line x1="0" y1="0" x2="40" y2="40" stroke="red" strokeWidth="4" />
                    </svg>
                    <svg width="30" height="30" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '10%' }}>
                        <polygon points="15,0 30,30 0,30" fill="yellow" />
                    </svg>
                </div>
                <h1 className="text-4xl lg:text-5xl md:leading-[50px] font-bold text-gray-800 text-left">DevonGnosis <br />Education Limited</h1>
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
                    className="object-cover h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:w-[450px] lg:h-[400px]" 
                    animate={{ y: [20, -10, 20] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop" }}
                />
                
            </div>
        </div>
           <section className='px-[60px] py-[40px] md:py-[70px] bg-gray-500/20'>
           <div ref={ref1} className="bg-black/8 w-[95%] md:w-[80%] md:mt-[-110px] py-[5px] md:py-[10px] mx-auto rounded-3xl">
            <div className="flex justify-around mt-5 md:mt-0">
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
            <div className="absolute inset-0 opacity-10">
                <svg width="100" height="100" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '90%' }}>
                    <circle cx="50" cy="50" r="20" fill="orange" />
                </svg>
                <svg width="80" height="80" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '10%' }}>
                    <rect width="40" height="40" fill="blue" />
                </svg>
                <svg width="60" height="60" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '40%' }}>
                    <polygon points="30,0 60,60 0,60" fill="green" />
                </svg>
                <svg width="50" height="50" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '20%' }}>
                    <ellipse cx="25" cy="25" rx="25" ry="15" fill="purple" />
                </svg>
                <svg width="40" height="40" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '50%' }}>
                    <line x1="0" y1="0" x2="40" y2="40" stroke="red" strokeWidth="4" />
                </svg>
                <svg width="30" height="30" className="absolute" style={{ top: `${Math.random() * 100}%`, left: '40%' }}>
                    <polygon points="15,0 30,30 0,30" fill="yellow" />
                </svg>
            </div>
            <div className='text-left'>
                <h1 className='text-3xl lg:text-4xl md:leading-[40px] font-bold text-gray-800 text-left'>Guaranteed and<br/>Professional Tutors</h1>
            </div>
            <div className='cards flex flex-col items-center md:flex-row md:items-stretch justify-evenly mt-[20px] gap-4'>
                <div className="card w-[100%] lg:w-[33.3%] relative bg-black/10 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg flex flex-col justify-center items-center h-[200px]">
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
                <div className="card w-[100%] lg:w-[33.3%] relative bg-black/10 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg flex flex-col justify-center items-center h-[200px]">
                    <h2 className="text-xl font-bold text-orange-500">Our Vision</h2>
                    <p className="text-gray-600 text-[13px]">Our vision is to transform the 
                                                               learning world in delivering 
                                                               sustainable human capital for 
                                                               the present and the future</p>
                </div>
                <div className="card w-[100%] lg:w-[33.3%] relative bg-black/10 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-lg flex flex-col justify-center items-center h-[200px]">
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
           <div className="relative">
                <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded">Left</button>
                <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded">Right</button>
                <div ref={coursesRef} className="flex flex-col md:flex-row overflow-x-auto space-x-4 py-4 scrollbar-hidden">
                <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image1.jpg" alt="Course 1" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 1</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image2.jpg" alt="Course 2" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 2</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image3.jpg" alt="Course 3" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 3</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image4.jpg" alt="Course 4" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 4</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image5.jpg" alt="Course 5" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 5</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image6.jpg" alt="Course 6" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 6</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image7.jpg" alt="Course 7" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 7</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image8.jpg" alt="Course 8" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 8</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image9.jpg" alt="Course 9" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 9</p>
            </div>
            <div className="card border border-orange-500 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col items-center w-[33.3%] flex-shrink-0">
                <img src="path/to/image10.jpg" alt="Course 10" className="w-full h-[100px] object-cover mb-2" />
                <p className="text-gray-600">Course Description 10</p>
            </div>
                </div>
            </div>

           </section>
        
        </div>
    );
}


export default Home