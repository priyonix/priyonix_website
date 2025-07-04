"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const CoursesParallaxPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <CourseParallaxSection
          imgUrl="/abstract-tech.jpg"
          subheading="Development"
          heading="Empowering Smart Learning."
        >
          <DevelopmentContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2564&auto=format&fit=crop"
          subheading="UI/UX Design"
          heading="Design Beyond Limits."
        >
          <UIUXContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop"
          subheading="AI & Data Science"
          heading="Learn. Grow. Excel with Priyonix."
        >
          <AIContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?w=600&auto=format&fit=crop&q=60"
          subheading="Cybersecurity"
          heading="Your Learning. Our Priority."
        >
          <CybersecurityContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?w=600&auto=format&fit=crop&q=60"
          subheading="Cloud & DevOps"
          heading="Power the Future with Cloud."
        >
          <CloudDevOpsContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=600&auto=format&fit=crop&q=60"
          subheading="Mobile App Development"
          heading="Build Innovative Mobile Experiences."
        >
          <MobileAppContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=60"
          subheading="Embedded Systems & IOT"
          heading="Connecting the Physical World."
        >
          <EmbeddedContent />
        </CourseParallaxSection>

        <CourseParallaxSection
          imgUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60"
          subheading="Project Management & Soft Skills"
          heading="Lead with Confidence."
        >
          <ProjectManagementContent />
        </CourseParallaxSection>
      </div>
      <Footer />
    </div>
  );
};

const IMG_PADDING = 12;

interface CourseParallaxSectionProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const CourseParallaxSection: React.FC<CourseParallaxSectionProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

// Shared CourseContent Component
interface CourseContentProps {
  title: string;
  description: string;
  description2: string;
}

const CourseContent: React.FC<CourseContentProps> = ({
  title,
  description,
  description2,
}) => {
  const router = useRouter();

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{description}</p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">{description2}</p>
        <button
          onClick={() => router.push("/booking")}
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

// Content Sections using CourseContent
const DevelopmentContent = () => (
  <CourseContent
    title="Full Stack Development"
    description="Learn web and mobile app development with hands-on projects and real-world applications."
    description2="Master front-end, back-end, and modern frameworks to become a proficient developer."
  />
);

const UIUXContent = () => (
  <CourseContent
    title="UI/UX Design"
    description="Master the art of creating intuitive and engaging user experiences through practical design exercises."
    description2="Develop wireframes, prototypes, and user-centered design strategies for real-world projects."
  />
);

const AIContent = () => (
  <CourseContent
    title="AI & Data Science"
    description="Dive into the world of Machine Learning, Deep Learning, and Data Analytics with our expert-led courses."
    description2="Build practical AI projects and gain skills to solve complex data-driven problems."
  />
);

const CybersecurityContent = () => (
  <CourseContent
    title="Ethical Hacking & Security"
    description="Learn how to protect systems from cyber threats through ethical hacking and security analysis."
    description2="Develop in-demand cybersecurity skills to secure networks and applications."
  />
);

const CloudDevOpsContent = () => (
  <CourseContent
    title="Cloud & DevOps"
    description="Get hands-on with AWS, Azure, CI/CD pipelines, and cloud infrastructure management."
    description2="Learn to automate deployments and scale applications efficiently."
  />
);

const MobileAppContent = () => (
  <CourseContent
    title="Mobile App Development"
    description="Build native and cross-platform mobile applications with modern frameworks like Flutter and React Native."
    description2="Learn mobile architecture, UI design, and performance optimization."
  />
);

const EmbeddedContent = () => (
  <CourseContent
    title="Embedded Systems & IOT"
    description="Explore embedded system design, microcontrollers, and IoT applications with practical projects."
    description2="Develop smart devices and connect the physical world with the digital."
  />
);

const ProjectManagementContent = () => (
  <CourseContent
    title="Project Management & Soft Skills"
    description="Master leadership, project planning, agile methodology, and communication skills essential for career growth."
    description2="Enhance your ability to lead teams and deliver successful projects."
  />
);
