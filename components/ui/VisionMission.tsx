'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type VisionPointProps = {
  color: string;
  title: string;
  desc: string;
  iconPath: string;
};

const VisionMission = () => {
  return (
    <div className="text-black py-16 px-4 max-w-7xl mx-auto space-y-20">
      
      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Title with Image on Left */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <Image
            src="/vision.png" // place vision image in public/
            alt="Vision Icon"
            width={160}
            height={160}
            className=" object-contain"
          />
          <h2 className="text-5xl font-bold">
            <span className="text-gray-400">Our</span> Vision
          </h2>
        </div>

        {/* Content */}
        <div>
          <p className="text-lg leading-relaxed mb-8">
            To emerge as India&apos;s most trusted and transformative platform that redefines
            the landscape of education and employability by equipping under-skilled youth
            with globally competitive competencies, empowering them to thrive in the modern
            workforce and beyond.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <VisionPoint
              color="bg-blue-500"
              title="Transform"
              desc="Redefining education landscape"
              iconPath="M12 3v18m9-9H3"
            />
            <VisionPoint
              color="bg-green-500"
              title="Empower"
              desc="Building competitive competencies"
              iconPath="M13 10V3L4 14h7v7l9-11h-7z"
            />
            <VisionPoint
              color="bg-purple-500"
              title="Enable"
              desc="Thriving in modern workforce"
              iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Content */}
        <div className="order-2 md:order-1">
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            {missionPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="font-semibold">{point.description}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Title with Image on Right */}
        <div className="flex items-center justify-center md:justify-end space-x-4 order-1 md:order-2">
          <h2 className="text-5xl font-bold">
            <span className="text-gray-400">Our</span> Mission
          </h2>
          <Image
            src="/mission1.png" // place mission image in public/
            alt="Mission Icon"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

// 🔹 Vision Points with hover animation
const VisionPoint: React.FC<VisionPointProps> = ({ color, title, desc, iconPath }) => (
  <div className="text-center cursor-pointer">
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`w-16 h-16 ${color} rounded-full mx-auto mb-3 flex items-center justify-center`}
    >
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
      </svg>
    </motion.div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-black text-sm">{desc}</p>
  </div>
);

// 🔹 Mission Points
const missionPoints = [
  { description: "Ensure inclusivity so no student is left behind." },
  { description: "Placement support for confident workforce entry." },
  { description: "Mentorship & experiential learning for deeper understanding." },
  { description: "Track progress, reinforce learning & identify growth opportunities." },
  { description: "Leverage Priyonix Learning Management System for adaptive learning." },
  { description: "Deliver industry-relevant training bridging academics & real-world skills." },
];

export default VisionMission;
