import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
];

const Carousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInterval;
    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1.5;
        }
      }, 20);
    }
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div className="relative overflow-hidden w-full py-[60px]" style={{ transform: "rotate(-10deg)" }}>
      <div
        ref={scrollRef}
        className="flex gap-8 whitespace-nowrap overflow-hidden"
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="w-32 h-20 flex items-center justify-center shrink-0 transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={logo}
              alt={`Company ${index + 1}`}
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
