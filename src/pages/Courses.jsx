import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const courses = [
  {
    title: "Leadership and Management",
    description: "Ideal for top leaders in public and private organizations",
    details: " This course will assist participants in leadership position or those who are aspiring to be in leadership positions develop the ability to create an inspiring vision of the future, motivate and inspire their team to engage with that vision, manage delivery of the vision.",
    subClasses: ["Leadership: The Attributes, Principles and Power, Developing Leaders for Sustainable Transformation Relationship management, Human resource management, Communication techniques, Performance Management, Change management, Essentials of eective management, Leading High performance Organisation, Strategic Business Leadership: Engagement, Performance, and Execution, Negotiation: Strategies and processes for impactful outcomes Negotiation and decision making Strate, Project Management Professionals Real estate Management Personal Development for Secretaries and Administrators", "Pension Management", "Disaster management", "No-nonsense Leadership", "Strategic Management for Public Sector"],
  },
  {
    title: "Data Science & Machine Learning",
    description: "Learn Python, AI, and Machine Learning models.",
    details: "Delve into data science with Python, machine learning techniques, and AI-driven applications. Master tools like Pandas, TensorFlow, and Scikit-learn.",
    subClasses: ["Python", "Pandas", "Machine Learning", "Deep Learning", "TensorFlow"],
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Protect systems & learn penetration testing techniques.",
    details: "Understand how to secure networks, identify vulnerabilities, and perform ethical hacking practices to safeguard systems.",
    subClasses: ["Network Security", "Penetration Testing", "Ethical Hacking", "SOC Analysis"],
  },
  {
    title: "UI/UX Design",
    description: "Design modern and user-friendly interfaces with Figma.",
    details: "Learn the fundamentals of user experience and interface design using industry-standard tools and best practices.",
    subClasses: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
  },
  {
    title: "Blockchain & Web3 Development",
    description: "Learn smart contracts, Solidity, and decentralized apps.",
    details: "Get hands-on experience building decentralized applications and understanding the principles of blockchain technology.",
    subClasses: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DeFi"],
  },
  {
    title: "Mobile App Development",
    description: "Build iOS & Android apps with React Native & Flutter.",
    details: "Develop mobile applications with modern frameworks and integrate backend services for a complete app experience.",
    subClasses: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    title: "Digital Marketing & SEO",
    description: "Boost businesses with SEO, Ads, and social media strategies.",
    details: "Understand digital marketing strategies, SEO optimization techniques, and social media engagement for business growth.",
    subClasses: ["SEO", "Google Ads", "Social Media Marketing", "Content Strategy"],
  },
  {
    title: "Cloud Computing & DevOps",
    description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines.",
    details: "Learn to deploy, manage, and scale applications using cloud computing and DevOps methodologies.",
    subClasses: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    title: "Game Development",
    description: "Learn Unity, Unreal Engine, and game design principles.",
    details: "Understand how to create engaging games using Unity and Unreal Engine, including physics and AI integration.",
    subClasses: ["Unity", "Unreal Engine", "Game Design", "AI in Games", "Physics"],
  },
  {
    title: "Artificial Intelligence & Robotics",
    description: "Build AI-powered applications and robotic systems.",
    details: "Dive deep into AI, neural networks, and robotics for automation and intelligent systems.",
    subClasses: ["AI", "Robotics", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    title: "Embedded Systems & IoT",
    description: "Develop smart IoT applications with Raspberry Pi & Arduino.",
    details: "Learn how to build and deploy embedded systems and IoT devices for real-world applications.",
    subClasses: ["IoT", "Raspberry Pi", "Arduino", "Embedded C", "Sensors"],
  },
  {
    title: "Big Data & Analytics",
    description: "Analyze and process large-scale datasets effectively.",
    details: "Understand data processing, analytics, and visualization techniques to gain insights from big data.",
    subClasses: ["Hadoop", "Spark", "Data Analytics", "Visualization", "Data Warehousing"],
  }
];

function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="relative py-[60px] px-[40px] md:px-[40px] bg-gray-100 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Gain industry-leading skills from our expert trainers. Choose from our wide range of courses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white flex items-center flex-col justify-center p-6 h-[280px] rounded-lg shadow-md transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button
                className="mt-4 text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 hover:scale-105 transition duration-300"
                onClick={() => setSelectedCourse(course)}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        className="fixed inset-0 z-50 px-[40px] flex items-center justify-center backdrop-blur-lg bg-white/30"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
          <h2 className="text-2xl font-bold text-gray-800">{selectedCourse?.title}</h2>
          <p className="text-gray-600 mt-2">{selectedCourse?.description}</p>
          <p className="text-gray-700 mt-4">{selectedCourse?.details}</p>

          <div className="mt-4 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            {selectedCourse?.subClasses.map((sub, idx) => (
              <p key={idx} className="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-md mb-1 inline-block">
                {sub}
              </p>
            ))}
          </div>

          <button
            onClick={() => setSelectedCourse(null)}
            className="mt-4 w-full text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 hover:scale-105 transition duration-300"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}

export default CoursesSection;
