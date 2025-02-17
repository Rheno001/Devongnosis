import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Leadership and Management",
    description: "Ideal for top leaders in public and private organizations",
    details: " This course will assist participants in leadership position or those who are aspiring to be in leadership positions develop the ability to create an inspiring vision of the future, motivate and inspire their team to engage with that vision, manage delivery of the vision.",
    subClasses: ["Leadership: The Attributes, Principles and Power", "Developing Leaders for Sustainable Transformation", "Relationship management", "Human resource management", "Communication techniques", "Performance Management", "Change management", "Essentials of effective management", "Leading High performance Organisation", "Strategic Business Leadership: Engagement, Performance, and Execution", "Negotiation: Strategies and processes for impactful outcomes Negotiation and decision making Strategies", "Project Management Professionals", "Real estate Management", "Personal Development for Secretaries and Administrators", "Pension Management", "Disaster management", "No-nonsense Leadership", "Strategic Management for Public Sector"],
  },
  {
    title: "SECURITY TRAINING FOR MILITARY, PARA MILITARY AND THE POLICE",
    description: " This course would be of great benefit to security agencies, para military bodies, the armed forces, public and private organisations.",
    details: "Protection of any vulnerable or valuable asset such as a person, dwelling, community, item, Organisation or nation is a vital necessity. No country can grow or develop without the right security system. ",
    subClasses: ["Oraganisational Security and Management", "Command and Control and Leadership", "Loss prevention", "Emotional intelligence Cultural and border Intelligence", "Close protection", "Security guarding", "CCTV training", "Door supervisor", "Personal licence", "Close Quarter Battle", "Combat Trauma Medicine", "Marksmanship Mobility Operations", "Amphibious Operations", "Surveillance and Intelligence gathering techniques including Cyber Operations", "Maritime Counter Terrorism including Special Forces diving", "Clearance Diving and Evasive Driving", "Explosive Method of Entry"],
  },
  {
    title: "INFORMATION AND COMMUNICATION TECHNOLOGY",
    description: "Information communication technology has become an accepted and integral part of everyday life for many people.",
    details: "ICT include the range of hardware and software devices and programs such as personal computers, assistive technology, scanners, digital cameras, multi-media programs, image editing software, data base and spreadsheet programs.it also includes the communication equipment through which people seek and access information including the internet, e-mail and video conferencing",
    subClasses: ["SOFWARE ENGINEERING", "MOBILE APP DEVELOPMENT", "DATABASE MANAGEMENT SYSTEM", "COMPUTER NETWORKS", "LAN Administration, Wireless Technology, Server technology, CCNA, CCNP, CCIE", "GRAPHICS AND ANIMATION"],
  },
  {
    title: "ETHICS AND COMPLIANCE",
    description: "This course will deliver a clear and integral compliance solutions and values in order to build trust.",
    details: "Understand how to secure networks, identify vulnerabilities, and perform ethical hacking practices to safeguard systems.",
    subClasses: ["Upholding workplace ethics compliance as a panacea for systemic corruption", "Global anti-bribery and corruption Ethics and code of conduct for supervisors", "Fair competition and anti-trust module", "Foreign corrupt practices act and export controls.", "Ethics and code of conduct for all employees(basic)", "Procurement integrity", "Ethical decision making simulation", "Conflict of interest simulation", "Work place diversity awareness","Government contracting essentials", "Oversight and assessment", "Anti-retaliation policy", "Preventing fraud and abuse"],
  },
  {
    title: "OIL AND GAS",
    description: "Participants may be drawn from upstream, midstream, downstream activities from petroleum production and even forecourt business.",
    details: "This course would provide participants with the tool and information that will help them understand the functions and nature of the oil and gas industry, define some basic industry terms and also introduce the concept of the oil and gas value chain.",
    subClasses: ["Financial modelling and petroleum project economics", "Supply Chain Management",  "Essential skills for oil and gas professionals", "Management of international petroleum projects", "HR management for oil and gas managers and supervisors", "International gas business management", "International petroleum law workshop", "Advanced petroleum management programme", "Project services", "Health Safety and Environment(HSE)"],
  },
  {
    title: "FINANCE",
    description: "Our training offers a range of short finance related training programmes aimed at HELPING THOSE who have financial responsibilities.",
    details: "finance module is delivered by our professional financial experts and facilitators.",
    subClasses: ["Financial Literacy"],
  },
  {
    title: "VOCATIONAL AND SKILL ACQUISITION",
    description: "Technical skill development is conceived as part of eorts to tackle the high level of youth unemployment.",
    details: "Develop mobile applications with modern frameworks and integrate backend services for a complete app experience.",
    subClasses: ["Fashion design", "Ankara craft", "Products and cream making", "Professional make over", "Microsoft office", "Fruit art training", "Organic skin care", "Pastries", "Solar installation", "Maintenance and management services", "Photography and video editing", "Research and statistical analysis", "Bead making", "Fish farming", "Wood work", "Metal work", "Computer repair and networking", "Driving"],
  },
  {
    title: "DIGITAL MARKETING AND SOCIAL SELLING",
    description: "This course would help participants understand the dynamics behind the digital marketing.",
    details: "Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, e-mail and mobile apps.it is also the promotion of brands via one or more forms of electronic media.",
    subClasses: ["Dynamic Search Advertising", "Display Advertising", "Social Selling", "Adword and Adsense", "Mobile Advertising(Admob)", "Social media Marketing", "Search Engine Optimisation", "E-commerce", "E-mail MarketinG"],
  }
];

function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="relative py-[60px] px-[60px] md:px-[60px] bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-purple-100 transform rotate-6 scale-150 opacity-30"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Gain industry-leading skills from our expert trainers. Choose from our wide range of courses.
        </p>

        <motion.div 
          className="grid grid-cols-1 mx-auto w-[85%] md:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer justify-center h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{course.description}</p>
              <button
                className="mt-4 w-[50%] mx-auto text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 hover:scale-105 transition duration-300"
                onClick={() => setSelectedCourse(course)}
              >
                See More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog
        open={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-white/30"
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
