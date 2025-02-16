import React from "react";

const courses = [
  { title: "Full Stack Web Development", description: "Master HTML, CSS, JavaScript, React, Node.js & more." },
  { title: "Data Science & Machine Learning", description: "Learn Python, AI, and Machine Learning models." },
  { title: "Cybersecurity & Ethical Hacking", description: "Protect systems & learn penetration testing techniques." },
  { title: "UI/UX Design", description: "Design modern and user-friendly interfaces with Figma." },
  { title: "Blockchain & Web3 Development", description: "Learn smart contracts, Solidity, and decentralized apps." },
  { title: "Mobile App Development", description: "Build iOS & Android apps with React Native & Flutter." },
  { title: "Digital Marketing & SEO", description: "Boost businesses with SEO, Ads, and social media strategies." },
  { title: "Cloud Computing & DevOps", description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines." },
];

function CoursesSection() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gray-100 overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`absolute blur-lg opacity-50 rounded-full 
                        bg-gradient-to-r from-orange-300 to-orange-500 animate-float
                        w-${Math.floor(Math.random() * 8) + 8} h-${Math.floor(Math.random() * 8) + 8}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 5}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Gain industry-leading skills from our expert trainers. Choose from our wide range of courses.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 relative z-10"
            >
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button className="mt-4 text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 hover:scale-105 transition duration-300">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float infinite alternate ease-in-out;
          }
        `}
      </style>
    </section>
  );
}

export default CoursesSection;
