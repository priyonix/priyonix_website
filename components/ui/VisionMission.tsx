'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const VisionMission = () => {
    return (
        <div className="text-black py-16 px-4 max-w-7xl mx-auto">
            {/* Vision & Mission Section Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Our <span className="text-gray-400 font-bold text-4xl">Vision</span>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        To emerge as India’s most trusted and transformative platform that redefines the landscape of education and employability by equipping under-skilled youth with globally competitive competencies, empowering them to thrive in the modern workforce and beyond.
                    </p>
                </motion.div>

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Our <span className="text-gray-400 font-bold text-4xl">Mission</span>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        To deliver world-class, industry-relevant training through an innovative Priyonix Learning Management System (PLMS), seamlessly integrating expert mentorship, experiential learning, comprehensive assessments, and guaranteed placement support ensuring that no student is left behind due to skill gaps or systemic limitations.
                    </p>
                </motion.div>
            </div>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        <Card className="bg-white shadow-lg rounded-2xl h-full">
                            <CardContent className="p-4 justify-between h-full">
                                <div className={`text-3xl mb-4 ${card.color}`}>{card.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-black">{card.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const cards = [
    {
        icon: '🎯',
        color: 'text-blue-500',
        title: 'Bridge the Gap',
        description: 'We connect passion with profession, providing industry-driven training that transforms curiosity into career success through personalized mentorship and real-world projects.',
    },
    {
        icon: '💜',
        color: 'text-purple-500',
        title: 'Empower Every Learner',
        description: 'Regardless of background, we create an environment where every student can thrive with state-of-the-art classrooms and interactive learning tools.',
    },
    {
        icon: '💡',
        color: 'text-green-500',
        title: 'Innovation First',
        description: 'Our world-class PLMS and cutting-edge technology ensure learning is flexible, engaging, and globally relevant for the digital age.',
    },
];

export default VisionMission;
