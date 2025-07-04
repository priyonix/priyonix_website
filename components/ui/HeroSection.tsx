// "use client";
// import React from 'react';
// import { useEffect, useState } from "react";
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//     const words = ["Opportunity..", "Earning..", "Growth..", "Success.."];
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }, 2000); // Change every 2 seconds

//         return () => clearInterval(interval);
//     }, []);

//   return (
//     <div className="relative w-full h-150 overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-150 object-cover"
//         src="/video.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//       </video>

//       {/* Overlay */}
//       <div className="relative z-10 flex flex-col justify-center items-start h-full bg-black/80 bg-opacity-50 text-white text-left pl-12">
//         <h1 className="text-8xl font-bold mt-20 mb-4 animate-fadeIn leading-tight ml-2 sm:ml-8 md:ml-12 lg:ml-16">
//             Priyonix
//         </h1>
//         <p className="text-3xl max-w-2xl animate-fadeIn delay-200 leading-snug ml-2 sm:ml-8 md:ml-12 lg:ml-16 flex flex-wrap items-center">
//           <span>Where learning meets&nbsp;</span>
//           <span className="relative inline-block font-semibold text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text transition-opacity duration-500 ease-in-out overflow-hidden shine-effect">
//             {words[index]}
//           </span>
//         </p>

//         <motion.button
//             whileHover={{ scale: 1.1 }}
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="bg-gray-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 mt-8 ml-2 sm:ml-8 md:ml-12 lg:ml-16 rounded-full transition-colors duration-300"
//             onClick={() => window.location.href = '/booking'}
//         >
//             Book Now
//         </motion.button>

//       </div>
//     </div>
//   );
// }

//-2

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// export default function HeroSection() {
//     const words = ["Opportunity..", "Earning..", "Growth..", "Success.."];
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }, 2000); // Change every 2 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="relative w-full h-150 overflow-hidden">
//             {/* Background Video */}
//             <video
//                 className="absolute top-0 left-0 w-full h-150 object-cover"
//                 src="/video.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             ></video>

//             {/* Main Content Wrapper */}
//             <div className="relative z-10 flex flex-row items-start h-full bg-black/80 bg-opacity-50">
//                 {/* Overlay Section */}
//                 <div className="flex flex-col justify-center items-start h-full text-white text-left p-8 rounded-2xl max-w-3xl">
//                     <h1 className="text-8xl font-bold mt-20 mb-4 animate-fadeIn leading-tight ml-2 sm:ml-8 md:ml-12 lg:ml-16">
//                         Priyonix
//                     </h1>

//                     <p className="text-3xl max-w-2xl animate-fadeIn delay-200 leading-snug ml-2 sm:ml-8 md:ml-12 lg:ml-16 flex flex-wrap items-center">
//                         <span>Where learning meets&nbsp;</span>
//                         <span className="relative inline-block font-semibold text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text transition-opacity duration-500 ease-in-out overflow-hidden shine-effect">
//                             {words[index]}
//                         </span>
//                     </p>
//                 </div>
//             </div>

//             {/* Book Now Card Section Positioned at Bottom Right with Animation */}
//             <motion.div
//                 className="absolute bottom-8 right-8 z-20"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//                 <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur rounded-2xl p-2 shadow-lg max-w-sm w-32 h-auto sm:w-32 sm:p-2 md:w-80 md:p-4">
//                     {/* Video Section */}
//                     <div className="w-full md:w-1/2 rounded-xl overflow-hidden max-h-48 md:max-h-50">
//                         <video
//                             src="/video.mp4" // Replace with your video path
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-30 object-cover"
//                         />
//                     </div>

//                     {/* Text Section */}
//                     <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6 text-left">
//                         <p className="text-md md:text-lg font-medium text-white">
//                             Receive a complimentary consultation
//                         </p>

//                         {/* Book Now Button */}
//                         <motion.button
//                             whileHover="hover"
//                             className="group mt-4 flex items-center space-x-2 text-white font-semibold focus:outline-none"
//                             onClick={() => window.location.href = '/booking'}
//                         >
//                             <span>Book now</span>
//                             <motion.span
//                                 initial={{ x: -10, opacity: 0 }}
//                                 variants={{
//                                     hover: { x: 0, opacity: 1, transition: { duration: 0.3 } },
//                                 }}
//                                 className="flex items-center"
//                             >
//                                 <ArrowUpRight className="w-4 h-4 ml-1" />
//                             </motion.span>
//                         </motion.button>
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// }

//-3

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import WhatsAppButton from "./WhatsAppButton";

const sections = [
  { title: "Priyonix", subtitle: "Where learning meets", video: "/video.mp4" },
  { title: "Full Stack Development", video: "/video1.mp4", impact: "Build modern web & mobile applications with scalable architectures." },
  { title: "UI/UX", video: "/video2.mp4", impact: "Create seamless, engaging, and accessible user experiences." },
  { title: "Data Science & AI", video: "/video3.mp4", impact: "Leverage AI to deliver intelligent and predictive solutions." },
  { title: "Cybersecurity", video: "/video4.mp4", impact: "Secure your systems with advanced cybersecurity protocols." },
  { title: "Cloud & DevOps", video: "/video5.mp4", impact: "Accelerate deployment and scalability with cloud solutions." },
  { title: "Embedded System & IoT", video: "/video6.mp4", impact: "Innovate with smart, connected devices and embedded systems." },
  { title: "Product Management", video: "/video7.mp4", impact: "Strategize and deliver impactful products efficiently." }
];

const dynamicWords = ['Opportunity..', 'Growth..', 'Earning..', 'Success..'];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: () => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
      },
    }),
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center mt-[80px] bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur z-10"></div>

      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex items-center justify-center absolute"
          >
            <div className="w-[90%] h-[90%] rounded-2xl overflow-hidden relative text-white shadow-lg">
              <video
                key={sections[currentIndex].video + currentIndex}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={sections[currentIndex].video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              ></video>

              <div className="relative z-10 p-10 bg-black/50 h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">{sections[currentIndex].title}</h1>

                {currentIndex === 0 ? (
                  <h2 className="text-3xl font-semibold mb-4">
                    {sections[currentIndex].subtitle}{" "}
                    <span className="text-primary">
                      <Typewriter
                        words={dynamicWords}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </span>
                  </h2>
                ) : (
                  <h2 className="text-3xl font-semibold mb-4">{sections[currentIndex].subtitle}</h2>
                )}

                {sections[currentIndex].impact && (
                  <p className="text-xl max-w-xl">{sections[currentIndex].impact}</p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur rounded-full p-2 hover:bg-white/20"
          onClick={handlePrev}
          title="left"
        >
          <ArrowLeft className="text-white" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur rounded-full p-2 hover:bg-white/20"
          onClick={handleNext}
          title="right"
        >
          <ArrowRight className="text-white" />
        </button>
      </div>

      <motion.div
        className="absolute right-8 bottom-10 z-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex bg-white/10 backdrop-blur rounded-2xl p-2 shadow-lg max-w-xs">
          <div className="w-1/2 rounded-xl overflow-hidden">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-30 object-cover"
            />
          </div>

          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <p className="text-md font-medium text-white">Receive a complimentary consultation</p>

            <motion.button
              whileHover="hover"
              className="group mt-2 flex items-center space-x-1 text-white font-semibold focus:outline-none"
              onClick={() => window.location.href = '/booking'}
            >
              <span>Book now</span>
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                variants={{
                  hover: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                }}
                className="flex items-center"
              >
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <WhatsAppButton />
    </div>
  );
}







