import { useState } from "react";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "John Doe",
    image: "/path-to-image.jpg",
    shortDesc: "Expert in Cybersecurity"
  },
  {
    name: "Jane Smith",
    image: "/path-to-image2.jpg",
    shortDesc: "Web Development Guru"
  },
  {
    name: "Alice Johnson",
    image: "/path-to-image3.jpg",
    shortDesc: "Data Science Expert"
  },
  {
    name: "Bob Brown",
    image: "/path-to-image4.jpg",
    shortDesc: "Cloud Computing Specialist"
  },
  {
    name: "Emma White",
    image: "/path-to-image5.jpg",
    shortDesc: "Mobile App Developer"
  },
  {
    name: "Michael Green",
    image: "/path-to-image6.jpg",
    shortDesc: "DevOps Engineer"
  },
  {
    name: "Sophia Black",
    image: "/path-to-image7.jpg",
    shortDesc: "UI/UX Designer"
  },
  {
    name: "Daniel Lee",
    image: "/path-to-image8.jpg",
    shortDesc: "Blockchain Developer"
  },
  {
    name: "Olivia Gray",
    image: "/path-to-image9.jpg",
    shortDesc: "Cyber Risk Analyst"
  },
  {
    name: "William Scott",
    image: "/path-to-image10.jpg",
    shortDesc: "AI & Robotics Engineer"
  }
];

const TrainersPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-black p-10 flex flex-col items-center overflow-hidden">
      <BackgroundShapes />
      <h1 className="text-4xl font-bold text-center mb-10">Meet Our Trainers</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 bg-orange-300 opacity-30 rounded-full"
          animate={{
            x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            rotate: [0, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
};

const TrainerCard = ({ trainer }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * 30;
    setTilt({ x, y });
  };

  return (
    <motion.div
      className="relative w-80 h-96 perspective-1000"
      style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="relative w-full h-full bg-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center p-5 overflow-hidden transition-all duration-500 hover:shadow-2xl">
        <div className="absolute inset-0 bg-white/30 opacity-10 rounded-xl" />
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />
        <h3 className="text-xl font-semibold mt-3 text-black">{trainer.name}</h3>
        <p className="text-gray-700 text-sm text-center mt-2">{trainer.shortDesc}</p>
      </div>
    </motion.div>
  );
};

export default TrainersPage;
