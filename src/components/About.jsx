import React, { useEffect, useRef, useState } from "react";
import logo from "../devalone.png"; // Ensure correct path to the logo

function AboutSection({ students, tutors, courses }) {
  const ref1 = useRef(null);
  const parallaxTopRef = useRef(null);
  const parallaxBottomRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxTopRef.current || parallaxBottomRef.current) {
        setOffset(window.scrollY * 0.15); // Adjust scroll speed for smooth effect
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col-reverse items-center md:flex-col px-6 md:px-16 pt-10 pb-16 md:py-20 bg-gray-500/20 overflow-hidden">
      {/* Parallax Logos (Top Left & Bottom Right) */}
      <img
        ref={parallaxTopRef}
        src={logo}
        alt="Devognosis Logo"
        className="absolute top-10 left-5 w-40 md:w-50 z-20 opacity-30"
        style={{ transform: `translateY(${offset}px)`, opacity: 0.3 }} // Moves with scroll
      />
      <img
        ref={parallaxBottomRef}
        src={logo}
        alt="Devognosis Logo"
        className="absolute bottom-10 right-5 w-40 md:w-50 z-20 opacity-30"
        style={{ transform: `translateY(-${offset}px)`, opacity: 0.3 }} // Moves opposite to top logo
      />

      {/* Statistics Section */}
      <div
        ref={ref1}
        className="bg-white shadow-lg md:hidden w-[95%] md:w-[80%] py-4 rounded-3xl z-30"
      >
        <div className="flex justify-around">
          {[
            { label: "Students", value: students },
            { label: "Tutors", value: tutors },
            { label: "Courses", value: courses },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl md:text-3xl text-orange-500 font-bold">
                {item.value}+
              </h3>
              <p className="text-gray-600 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-30 mt-10 text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          About<br />Devognosis
        </h1>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Devognosis Education (DGE) is a global network of experienced
          professionals and consultants assembled with the core objective of
          providing world-class knowledge-based services to public and private
          sector institutions within and outside Africa. We leverage a network
          of excellent partnerships with world-renowned training establishments
          and business schools, as well as ICT organizations in the US, Asia,
          and Europe to provide a combined wealth of expertise, re-engineered
          systems, and cutting-edge training services across a broad spectrum
          of sectors.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
