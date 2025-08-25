"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import PriyonixFooter from "@/components/ui/Footer";

const courses = {
  "IT Courses": [
    "Full Stack Development",
    "Data Science and Machine Learning",
    "Cyber Security and Ethical Hacking",
    "AI & Deep Learning",
    "Cloud Computing",
    "DevOps",
    "Embedded System / IoT",
    "Web Development",
    "Software Testing",
    "Python Programming & Django",
    "Mobile App Development",
    "UI/UX Design",
    "Database Management System",
    "Cloud Basics",
    "Digital Marketing Basics",
    "Data Analytics",
    "Data Science & Python Programming",
    "R Programming",
  ],
  "Financial Mastery": [
    "Digital Marketing (SEO, SEM, SMM)",
    "Business Analytics",
    "Financial Modeling",
    "HR Analytics",
    "Project Management (PMP/Agile)",
    "MS Excel (Advanced)",
  ],
  "Financial & Investment": ["CA"],
  "Soft Skills": ["Problem Solving", "Aptitude Mastery", "Critical Thinking"],
  "Exclusive Interview Cracking": ["Placement Training"],
  "11th / 12th Programs": [
    "Introduction to Programming",
    "Web Designing (HTML, CSS, Basic JavaScript)",
    "Graphic Designing (Canva, Photoshop Basics)",
    "Digital Marketing Introduction",
    "Spoken English & Communication Skills",
    "Tally with GST Basics",
    "Soft Skills & Interview Preparation",
  ],
  "Restart Your Career": [
    "Computer Refresher Course",
    "Personality Development & Interview Confidence",
    "Web Designing Basics (HTML, CSS)",
    "Tally with GST & Accounting Software",
    "Digital Marketing Refresher Program",
    "Spoken English & Communication Skills",
    "Remote Work Basics (Freelancing Platforms)",
  ],
  "Career Switching": [
    "Web Development (Full Stack Basics)",
    "UI/UX Designing",
    "Digital Marketing Professional Program",
    "Python Programming & Data Analytics",
    "Basic Cloud Computing Concepts",
    "Business Communication & Soft Skills",
    "Introduction to Cybersecurity",
    "Job-Oriented Crash Courses (Fast-track)",
  ],
};

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>

          {Object.entries(courses).map(([category, courseList], index) => (
            <div key={index} className="mb-16">
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-700 mb-6 border-l-4 border-blue-600 pl-3"
              >
                {category}
              </motion.h3>

              {/* Courses Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courseList.map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {course}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Learn {course} with hands-on projects, mentorship, and placement
                        support.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {/* Details Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 border border-blue-600 text-blue-600 text-sm rounded-lg shadow-sm hover:bg-blue-50"
                      >
                        Details
                      </motion.button>
                      {/* Enroll Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow-md"
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <PriyonixFooter />
    </>
  );
};

export default CoursesPage;
