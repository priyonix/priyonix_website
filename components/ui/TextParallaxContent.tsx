"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const slides = [
  { image: "/slide1.png", text: "Welcome to Priyonix - Shaping the Future" },
  { image: "/slide2.png", text: "Revolutionizing Learning Experiences" },
  { image: "/slide3.png", text: "Inspiring Growth Through Technology" },
  { image: "/slide4.png", text: "Your Success, Our Priority" },
  { image: "/slide5.png", text: "Optimized Courses for Smart Learning" },
  { image: "/slide6.png", text: "Nurturing Creative Minds" },
  { image: "/slide7.png", text: "Innovate, Implement, Impact" },
  { image: "/slide8.png", text: "Experience Excellence with Priyonix" },
];

export default function TextParallaxPriyonix() {
  const sections = [0, 1, 2, 3];

  return (
    <div className="overflow-hidden">
      {sections.map((sectionIndex) => (
        <Section
          key={sectionIndex}
          slides={slides.slice(sectionIndex * 2, sectionIndex * 2 + 2)}
          sectionIndex={sectionIndex}
        />
      ))}
    </div>
  );
}

interface Slide {
  image: string;
  text: string;
}

interface SectionProps {
  slides: Slide[];
  sectionIndex: number;
}

const Section: React.FC<SectionProps> = ({ slides, sectionIndex }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);

  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });

  const isDark = sectionIndex % 2 === 1;
  const bgColor = isDark ? "bg-black" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <motion.section
      ref={targetRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`min-h-[200vh] relative flex flex-col justify-center items-center ${bgColor} ${textColor} py-16 transition-colors duration-1000`}
    >
      {/* Background Word */}
      <motion.div
        style={{ opacity: smoothOpacity, scale: smoothScale }}
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center pointer-events-none z-30"
      >
        <h1
          className="text-[18vw] font-extrabold select-none drop-shadow-[0_0_5px_silver]"
          style={{ WebkitTextStroke: "3px silver", color: "transparent" }}
        >
          PRIYONIX
        </h1>
      </motion.div>

      {/* Foreground Slides */}
      <div className="relative z-20 max-w-6xl w-full px-4 space-y-[8vh]">
        {slides.map((slide, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`min-h-[50vh] flex flex-col md:flex-row items-center justify-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={slide.image}
                alt={slide.text}
                width={250}
                height={450}
                className="w-full md:w-1/2 h-auto max-w-[250px] max-h-[450px] object-contain mx-auto z-10"
              />
              <div className="md:w-1/2 mt-8 md:mt-0 md:px-8 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.text}</h2>
              </div>
            </motion.div>
          );
        })}

        {/* Divider */}
        <div className="w-full flex justify-center">
          <div className={`h-[2px] w-1/2 ${isDark ? "bg-white" : "bg-black"} opacity-50 my-8`}></div>
        </div>
      </div>
    </motion.section>
  );
};
