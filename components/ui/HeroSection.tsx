"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import WhatsAppButton from "./WhatsAppButton";
import Link from "next/link";

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

const dynamicWords = ["Opportunity..", "Growth..", "Earning..", "Success.."];

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
    <div className="relative w-full h-[calc(100dvh-80px)] overflow-hidden flex items-center justify-center mt-[80px] bg-black">
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
                  <>
                    <h2 className="text-3xl font-semibold mb-6">
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

                    <Link
                      href="/about"
                      className="mt-4 inline-flex items-center justify-center px-6 py-2 border-2 border-white text-white rounded-full font-medium text-base transition duration-300 hover:bg-white hover:text-black w-auto max-w-fit"
                    >
                      Know More
                    </Link>
                  </>
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

        {/* Left & Right Buttons */}
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

      {/* Circular Info Card (inside carousel, hidden on mobile) */}
      <motion.div
        className="absolute right-20 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-80 h-80 relative flex flex-col items-center justify-center text-center p-8 overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 rounded-full">
            <img
              src="/logo.png"   // ✅ replace with your image path
              alt="Circle Background"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-white">
            <h3 className="text-3xl font-bold mb-2">Priyonix</h3>
            <p className="text-base leading-relaxed">
              Empowering students with <br /> industry-driven training <br /> & real-world skills.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-md"
              onClick={() => (window.location.href = "/about")}
            >
              Know More
            </motion.button>
          </div>
        </div>
      </motion.div>


      <WhatsAppButton />
    </div>
  );
}
