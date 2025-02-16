import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import corner from '../corner.jpg'

const InfiniteCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    };
    
    let interval = setInterval(scroll, 20);
    if (isPaused) clearInterval(interval);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative overflow-hidden w-full py-6 mt-[20px]" style={{ transform: "rotate(0deg)" }}>
      <div
        ref={carouselRef}
        className="flex gap-8 whitespace-nowrap overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 1" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 2" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 3" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 4" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 5" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 6" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 7" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        {/* Duplicate logos for smooth infinite effect */}
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 1" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 2" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="w-32 h-20 flex items-center justify-center shrink-0">
          <img src={corner} alt="Company 3" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
