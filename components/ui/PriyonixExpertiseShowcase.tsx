"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Development",
    image: "/web-1.jpeg",
  },
  {
    title: "AI & Machine Learning",
    image: "/AI-1.jpg",
  },
  {
    title: "Cybersecurity Essentials",
    image: "/cybersecurityimg.jpg",
  },
  {
    title: "UI/UX Design",
    image: "/UIUX.jpg",
  },
];

export default function PriyonixExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 grid md:grid-cols-3 gap-8 items-center relative">
      {/* Left Features */}
      <div className="space-y-10">
        <Feature icon={<FaUsers />} title="Top Industry Instructors" desc="Learn from experts who’ve worked at top tech companies." />
        <Feature icon={<FaChalkboardTeacher />} title="Live & Recorded Classes" desc="Flexible learning formats with hands-on guidance." />
        <Feature icon={<FaLaptopCode />} title="Real Projects" desc="Apply your skills in real-world scenarios with portfolio projects." />
      </div>

      {/* Center Mobile Showcase */}
      <div className="relative flex justify-center">
        <div className="bg-white rounded-3xl p-1 shadow-2xl">
          <div className="bg-black rounded-[1.5rem] overflow-hidden w-[280px] h-[560px] flex flex-col items-center">
            <motion.img
              key={courses[activeIndex].title}
              src={courses[activeIndex].image}
              alt={courses[activeIndex].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Features */}
      <div className="space-y-10">
        <Feature icon={<FaShieldAlt />} title="Cybersecurity Focus" desc="Built-in security awareness for developers and IT professionals." />
        <Feature icon={<FaStar />} title="Career Support" desc="Resume building, mock interviews & placement assistance." />
        <Feature icon={<FaLaptopCode />} title="Cross-Platform Learning" desc="Accessible on Web, iOS, Android & Smart TV." />
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-gray-400 text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}
