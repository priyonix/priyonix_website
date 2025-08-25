"use client";

import PriyonixFooter from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Briefcase, Users, GraduationCap } from "lucide-react";

const PlacementPage = () => {
  return (
    <div>
        <Navbar/>
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
            
            {/* Hero */}
            <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-black mb-4"
            >
                Placements at <span className="text-blue-600">Priyonix</span>
            </motion.h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We go beyond training – Priyonix ensures students are not only
                skilled but also confident, industry-ready, and placed in top companies.
            </p>
            </div>

            {/* Our Approach */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
                {
                title: "Industry-Driven Training",
                desc: "Curriculum built with direct input from industry experts.",
                icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
                },
                {
                title: "Real Projects",
                desc: "Hands-on experience with real-world industry projects.",
                icon: <Briefcase className="w-8 h-8 text-green-600" />,
                },
                {
                title: "Personalized Mentorship",
                desc: "1-on-1 guidance for interview prep, resumes, and confidence building.",
                icon: <Users className="w-8 h-8 text-purple-600" />,
                },
            ].map((item, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                </motion.div>
            ))}
            </div>

            {/* Comparison Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                How Priyonix is Different?
                </h3>
                <p className="text-gray-600 mb-6">
                Unlike traditional training companies that stop at theory,
                Priyonix bridges the gap between learning and employment.
                </p>
                <ul className="space-y-3">
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Mock interviews & resume workshops</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Dedicated placement cell connecting with companies</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Soft-skill & communication mastery</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Real-time industry projects to showcase in interviews</span>
                </li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-red-500 mb-3">Other Training Companies</h4>
                <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                    <XCircle className="text-red-500 w-5 h-5" /> Focus only on theory
                </li>
                <li className="flex items-center gap-2">
                    <XCircle className="text-red-500 w-5 h-5" /> Limited placement support
                </li>
                <li className="flex items-center gap-2">
                    <XCircle className="text-red-500 w-5 h-5" /> No personalized mentorship
                </li>
                <li className="flex items-center gap-2">
                    <XCircle className="text-red-500 w-5 h-5" /> Lack of real project exposure
                </li>
                </ul>
            </div>
            </div>

        </div>
        
        </section>
    <PriyonixFooter/>
    </div>
    
    
  );
};

export default PlacementPage;
