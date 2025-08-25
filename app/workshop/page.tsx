"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import PriyonixFooter from "@/components/ui/Footer";

// Simple Tailwind Components
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
    {children}
  </div>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 flex flex-col items-start gap-3">{children}</div>
);

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="w-full px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium disabled:bg-gray-400"
  >
    {children}
  </button>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
    {children}
  </span>
);

const workshops = [
  { name: "Full Stack Development", image: "/workshops/fullstack.jpg" },
  { name: "AI & Machine Learning", image: "/workshops/ai.jpg" },
  { name: "Cybersecurity Essentials", image: "/workshops/cyber.jpg" },
  { name: "Cloud Computing with AWS", image: "/workshops/cloud.jpg" },
  { name: "Data Science & Analytics", image: "/workshops/data.jpg" },
  { name: "DevOps & CI/CD", image: "/workshops/devops.jpg" },
  { name: "Mobile App Development", image: "/workshops/mobile.jpg" },
  { name: "UI/UX Design", image: "/workshops/uiux.jpg" },
  { name: "Blockchain Technology", image: "/workshops/blockchain.jpg" },
  { name: "AR/VR Development", image: "/workshops/arvr.jpg" },
  { name: "Game Development", image: "/workshops/game.jpg" },
  { name: "Python for Beginners", image: "/workshops/python.jpg" },
  { name: "DSA Masterclass", image: "/workshops/dsa.jpg" },
  { name: "IoT & Embedded Systems", image: "/workshops/iot.jpg" },
  { name: "Digital Marketing", image: "/workshops/marketing.jpg" },
];

export default function WorkshopsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
        <section className="pt-30 pb-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center">
        <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-4"
        >
            Unlock Your Potential with Our Expert Workshops
        </motion.h1>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg max-w-2xl mx-auto"
        >
            Practical, industry-ready sessions designed to give you real skills,
            hands-on experience, and career growth opportunities.
        </motion.p>
        </section>


      {/* Workshop Cards Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Upcoming Workshops
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <img
                  src={workshop.image}
                  alt={workshop.name}
                  className="w-full h-40 object-cover"
                />
                <CardContent>
                  <h3 className="text-lg font-semibold">{workshop.name}</h3>
                  <Badge>Coming Soon</Badge>
                  <p className="text-indigo-600 font-bold">₹999</p>
                  <Button disabled>Enroll</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <PriyonixFooter />
    </div>
  );
}
