import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const trainers = [
  { name: "John Doe", image: "/path-to-image.jpg", shortDesc: "Expert in Cybersecurity" },
  { name: "Jane Smith", image: "/path-to-image2.jpg", shortDesc: "Web Development Guru" },
  { name: "Alice Johnson", image: "/path-to-image3.jpg", shortDesc: "Data Science Expert" },
  { name: "Bob Brown", image: "/path-to-image4.jpg", shortDesc: "Cloud Computing Specialist" },
  { name: "Emma White", image: "/path-to-image5.jpg", shortDesc: "Mobile App Developer" },
  { name: "Michael Green", image: "/path-to-image6.jpg", shortDesc: "DevOps Engineer" },
  { name: "Sophia Black", image: "/path-to-image7.jpg", shortDesc: "UI/UX Designer" },
  { name: "Daniel Lee", image: "/path-to-image8.jpg", shortDesc: "Blockchain Developer" },
  { name: "Olivia Gray", image: "/path-to-image9.jpg", shortDesc: "Cyber Risk Analyst" },
  { name: "William Scott", image: "/path-to-image10.jpg", shortDesc: "AI & Robotics Engineer" }
];

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + cardsPerPage) % trainers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - cardsPerPage + trainers.length) % trainers.length);
  };

  return (
    <div className="relative min-h-screen bg-white py-[60px] text-black p-10 flex flex-col items-center overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-10">Meet Our Trainers</h1>
      <div className="relative w-full max-w-5xl">
        <div className="absolute top-0 right-0 flex space-x-2">
          <button
            className="p-3 bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="p-3 bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="overflow-hidden w-full mt-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 justify-center"
            >
              {trainers.slice(currentIndex, currentIndex + cardsPerPage).concat(trainers.slice(0, Math.max(0, (currentIndex + cardsPerPage) - trainers.length))).map((trainer, index) => (
                <TrainerCard key={index} trainer={trainer} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const TrainerCard = ({ trainer }) => {
  return (
    <motion.div 
      className="w-80 h-96 flex-shrink-0 bg-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center p-5 overflow-hidden transition-all duration-500 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 bg-white/30 opacity-10 rounded-xl" />
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
      />
      <h3 className="text-xl font-semibold mt-3 text-black">{trainer.name}</h3>
      <p className="text-gray-700 text-sm text-center mt-2">{trainer.shortDesc}</p>
    </motion.div>
  );
};

export default Trainers;