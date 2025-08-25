"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, Users, LineChart, Database } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Business Planning",
    desc: "We help you design strategies for growth, \nfinancial stability, and success.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    image: "/AI-1.jpg", // 🔹 replace with your image
  },
  {
    id: 2,
    title: "Software Development",
    desc: "Custom apps, web solutions, and enterprise \nsystems tailored to your needs.",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    image: "/AI-1.jpg",
  },
  {
    id: 3,
    title: "Team Training",
    desc: "Upskill your workforce with industry-standard \ncourses and mentorship.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    image: "/AI-1.jpg",
  },
  {
    id: 4,
    title: "Data Analytics",
    desc: "Turn data into actionable insights to \nstay ahead of competition.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    image: "/AI-1.jpg",
  },
  {
    id: 5,
    title: "Market Research",
    desc: "In-depth market studies to identify \nopportunities and mitigate risks.",
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    image: "/AI-1.jpg",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-600 font-semibold mb-3"
        >
          Our Services
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Always we offer the best <br /> services for success!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We deliver solutions across industries — from technology to strategy,
          helping organizations unlock their full potential.
        </motion.p>

        {/* Desktop: curve with icons */}
        <div className="relative hidden md:flex justify-center items-center">
          {/* Central Service */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mt-20"
          >
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-3">{activeService.icon}</div>
              <h3 className="text-lg font-bold mb-2">{activeService.title}</h3>
              <p className="text-gray-600 text-sm mb-3 whitespace-pre-line">
                {activeService.desc}
              </p>
            </div>
          </motion.div>

          {/* Curve Path */}
          <svg
            className="absolute w-full max-w-[900px] h-auto top-1/2 -translate-y-1/2"
            viewBox="0 0 900 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 400 C300 50, 600 50, 820 400"
              stroke="#E5E7EB"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>

          {/* Icons with hover image */}
          <div className="absolute w-full max-w-[900px] h-[450px] top-1/2 -translate-y-1/2 pointer-events-none">
            {services.map((service, i) => {
              const positions = [
                { left: "8%", top: "76%" },
                { left: "25%", top: "40%" },
                { left: "48%", top: "23%" },
                { left: "72%", top: "40%" },
                { left: "87%", top: "76%" },
              ];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.8 }} // 🔥 zooms bigger
                  className="absolute cursor-pointer bg-white shadow-lg p-4 rounded-full transition-transform pointer-events-auto overflow-hidden"
                  style={positions[i]}
                  onMouseEnter={() => setActiveService(service)}
                >
                  <AnimatePresence mode="wait">
                    {activeService.id === service.id ? (
                      <motion.div
                        key="image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full overflow-hidden"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="icon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center"
                      >
                        {service.icon}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Simple List */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              onClick={() => setActiveService(service)}
            >
              <div className="flex justify-center mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
