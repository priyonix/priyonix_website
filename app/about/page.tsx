// 'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Lottie from 'react-lottie-player';
// import dynamic from 'next/dynamic';
// import { motion } from 'framer-motion';

// // Import Lottie JSON files
// import lottieHeader from '@/public/lottie/system.json';
// import lottieSection from '@/public/lottie/learning.json';
// import lottieVision from '@/public/lottie/vision.json';
// import lottieMission from '@/public/lottie/mission.json';
// import lottieWhy from '@/public/lottie/why.json';
// import lottieLearning from '@/public/lottie/environment.json';
// import lottiePlacement from '@/public/lottie/placement.json';
// import PriyonixFooter from '@/components/ui/Footer';
// import Navbar from '@/components/ui/Navbar';

// // Dynamically load particles to avoid SSR issues
// const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });

// const AboutUs = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000, once: true });
//     }, []);

//     return (
//         <div className="bg-black text-white min-h-screen relative">
//             <Navbar/>
//             <ParticlesBg type="cobweb" bg={true} color="#C0C0C0" />

//             {/* Sticky Navigation */}
//             {/* <nav className="sticky top-0 bg-black bg-opacity-90 z-50 flex justify-center space-x-6 py-4 shadow-md">
//                 {['Why Priyonix', 'Vision', 'Mission', 'Learning', 'Experts', 'Placement', 'Benefits'].map(section => (
//                     <a key={section} href={`#${section.toLowerCase()}`} className="text-silver hover:text-white transition-colors duration-300">
//                         {section}
//                     </a>
//                 ))}
//             </nav> */}

//             {/* Header */}
//             <header className="text-center py-16 px-4">
//                 <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl font-bold mb-4 text-silver">
//                     About Priyonix
//                 </motion.h1>
//                 <Lottie loop animationData={lottieHeader} play className="w-64 mx-auto mb-4" />
//                 <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg">
//                     Where Training Meets Global Standards. Where Students Become Professionals
//                 </motion.p>
//             </header>

//             {/* Sections */}
//             <Section id="why priyonix" title="Why Priyonix?" text="Priyonix is not just a training institute — we are an active software development company shaping the next generation of professionals through cutting-edge training, international-level facilities, and real-time industry exposure. Our courses are built to prepare students from IT and non-IT domains for the demands of the global workforce." lottie={lottieWhy} />

//             <Section id="vision" title="Our Vision" text="To emerge as India’s most trusted and transformative platform that redefines the landscape of education and employability by equipping under-skilled youth with globally competitive competencies, empowering them to thrive in the modern workforce and beyond." lottie={lottieVision} reverse />

//             <Section id="mission" title="Our Mission" text="To deliver world-class, industry-relevant training through an innovative Priyonix Learning Management System (PLMS), seamlessly integrating expert mentorship, experiential learning, comprehensive assessments, and guaranteed placement support ensuring that no student is left behind due to skill gaps or systemic limitations." lottie={lottieMission} />

//             <Section id="learning" title="Learning Environment" text="International-Standard Classrooms • Digital Smart Boards & Interactive Learning Tools • LMS-Based 24/7 Access to Materials & Recordings • Air-Conditioned Labs & High-Speed Wi-Fi • Professional Ambience, Placement Zone & Interview Pods
//             • Mentorship Rooms for One-on-One Career Coaching" lottie={lottieLearning} reverse />

//             <Section id="experts" title="Our Experts" text="IIT/NIT Alumni & Corporate Trainers • Hands-On Mentorship with Real Software Projects • Live Coding Sessions & Industry Tech Stack • Interactive Labs and Hackathons" lottie={lottieSection} />

//             <Section id="placement" title="100% Placement Guarantee" text="Priyonix provides dedicated placement support with resume building, mock interviews, and direct industry connections. We guarantee placement assistance for all our eligible learners." lottie={lottiePlacement} reverse />

//             {/* Benefits */}
//             <section id="benefits" className="max-w-6xl mx-auto px-4 py-12 text-center" data-aos="fade-up">
//                 <h2 className="text-3xl font-bold mb-6 text-silver">Benefits & Offers</h2>
//                 <ul className="text-lg text-left inline-block space-y-3">
//                     <li>✅ Hands-on Live Projects</li>
//                     <li>✅ Industry-Recognized Certifications</li>
//                     <li>✅ Personal Mentorship</li>
//                     <li>✅ Flexible Learning Hours</li>
//                     <li>✅ Limited-Time Offer: Flat 20% Off on All Courses</li>
//                     <li>✅ Free Communication & Career Grooming Sessions</li>
//                     <li>✅ First 100 Students: Free Resume Portfolio Design</li>
//                 </ul>
//             </section>

//             {/* Footer */}
//             <PriyonixFooter/>
//         </div>
//     );
// };

// // Reusable Section Component with Lottie and Framer Motion
// const Section = ({ id, title, text, lottie, reverse }) => (
//     <section id={id} className={`max-w-6xl mx-auto px-4 py-12 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`} data-aos="fade-up">
//         <motion.div initial={{ opacity: 0, x: reverse ? 100 : -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="md:w-1/2 text-center md:text-left">
//             <h2 className="text-3xl font-bold mb-4 text-silver">{title}</h2>
//             <p className="text-lg leading-relaxed">{text}</p>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, x: reverse ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="md:w-1/2">
//             <Lottie loop animationData={lottie} play className="w-64 mx-auto" />
//         </motion.div>
//     </section>
// );

// export default AboutUs;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/ui/Navbar';
import dynamic from 'next/dynamic';
import WhyChoosePriyonix from '@/components/ui/WhyChoosePriyonix';
// import PopularPrograms from '@/components/ui/PopularPrograms';
import StartJourneySection from '@/components/ui/StartJourneySection';
import PriyonixFooter from '@/components/ui/Footer';
import {Users, BookOpen, CheckCircle} from 'lucide-react';
import VisionMission from '@/components/ui/VisionMission';

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });

const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen text-black relative">
            <Navbar />
            <ParticlesBg type="cobweb" bg={true} color="#ffffff" />

            <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <div className="inline-block bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                        🚀 Transforming Education Since Day One
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                        Build Your Future at Priyonix
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Where passion meets profession. Industry-driven training by IIT/NIT alumni with 100% placement guarantee and cutting-edge Learning Management System.
                    </p>

                    <div className="flex justify-center space-x-4 mb-12">
                        <Button className="bg-black border-2 hover:bg-gray-400 text-white px-6 py-3 rounded-full text-lg">
                            Start Your Journey
                        </Button>
                        <Button className="bg-black px-6 py-3 rounded-full text-lg">
                            ▶️ Watch Demo
                        </Button>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <Card className="bg-white/10 text-black backdrop-blur rounded-2xl shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                                <Users className="text-black w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
                                <p>Learn from IIT/NIT alumni and industry professionals</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                        <Card className="bg-white/10 text-black backdrop-blur rounded-2xl shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                                <CheckCircle className="text-black w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">100% Placement</h3>
                                <p>Guaranteed job placement with industry connections</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
                        <Card className="bg-white/10 text-black backdrop-blur rounded-2xl shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                                <BookOpen className="text-black w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">PLMS Platform</h3>
                                <p>State-of-the-art Learning Management System</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
            <VisionMission/>
            <WhyChoosePriyonix/>
            {/* <PopularPrograms/> */}
            <StartJourneySection/>
            <PriyonixFooter/>
        </div>
    );
};

export default AboutUs;
