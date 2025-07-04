'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const courses = [
    {
        title: 'Full Stack Development',
        price: '₹99,999',
        oldPrice: '₹1,49,999',
        features: [
            'React, Node.js, MongoDB',
            'Live Project Development',
            '1-on-1 Mentorship',
            'Job Placement Guarantee',
            'Resume Building & Mock Interviews',
        ],
    },
    {
        title: 'Data Science & AI',
        price: '₹1,19,999',
        oldPrice: '₹1,79,999',
        features: [
            'Python, ML, Deep Learning',
            'Real Industry Projects',
            'Expert Mentorship',
            'Portfolio Development',
            'Career Guidance',
        ],
    },
    {
        title: 'DevOps Engineering',
        price: '₹79,999',
        oldPrice: '₹1,19,999',
        features: [
            'AWS, Docker, Kubernetes',
            'Hands-on Lab Sessions',
            'Industry Certification',
            'Job Assistance',
            '24/7 Support',
        ],
    },
    {
        title: 'UI/UX Design',
        price: '₹59,999',
        oldPrice: '₹89,999',
        features: [
            'Figma, Adobe XD',
            'Real Client Projects',
            'Creative Portfolio Building',
            'Mentorship & Feedback',
            'Placement Assistance',
        ],
    },
    {
        title: 'Cybersecurity',
        price: '₹89,999',
        oldPrice: '₹1,29,999',
        features: [
            'Network & Ethical Hacking',
            'Hands-on Lab Training',
            'Real-Time Security Projects',
            'Certification Support',
            'Career Guidance',
        ],
    },
    {
        title: 'Mobile App Development',
        price: '₹84,999',
        oldPrice: '₹1,24,999',
        features: [
            'React Native, Flutter',
            'Live App Deployment',
            '1-on-1 Mentorship',
            'Resume Building & Mock Interviews',
            '24/7 Career Support',
        ],
    },
];

const PopularProgramsSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, // Move one card at a time
        centerMode: false, // Cards stay aligned, not zoomed
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="w-full py-16 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center mb-4"
            >
                Our Popular <span className="text-gray-400">Programs</span>
            </motion.h2>

            <p className="text-center text-black mb-12 max-w-3xl mx-auto">
                Choose from our industry-designed programs with limited-time scholarships and guaranteed placements
            </p>

            <div className="max-w-[1300px] mx-auto"> {/* Restrict total carousel width */}
                <Slider {...settings}>
                    {courses.map((course, index) => (
                        <div key={index} className="p-2"> {/* 8px gap around cards */}
                            <div className="bg-white text-black border-2 p-6 rounded-2xl shadow-lg flex flex-col justify-between h-[500px]">
                                <div>
                                    <h3 className="text-2xl font-bold text-center mb-6">{course.title}</h3>
                                    <ul className="space-y-4 mb-8">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                                <CheckCircle2 className="text-black" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-1">{course.price}</div>
                                    <div className="text-gray-500 line-through mb-2">{course.oldPrice}</div>
                                    <div className="text-gray-700 font-semibold mb-4">Limited Time Offer!</div>
                                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-500 transition">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PopularProgramsSection;
