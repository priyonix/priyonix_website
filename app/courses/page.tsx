"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import PriyonixFooter from "@/components/ui/Footer";

// ================== FULL COURSE DATA ==================
const courses = {
  "IT Courses": [
    {
      name: "Full Stack Development",
      duration: "6 Months",
      instructor: "Mr. Arjun Kumar",
      description: [
        "Python, or Core Java, Advanced Java",
        "Spring & Spring Boot Framework",
        "React.js & Angular",
        "Databases: MySQL & MongoDB",
        "Full-stack Projects & Deployment",
      ],
    },
    {
      name: "Data Science and Machine Learning",
      duration: "5 Months",
      instructor: "Dr. Neha Sharma",
      description: [
        "Python for Data Science",
        "Exploratory Data Analysis",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Capstone Project",
      ],
    },
    {
      name: "Cyber Security and Ethical Hacking",
      duration: "4 Months",
      instructor: "Mr. Rajesh Singh",
      description: [
        "Cybersecurity Fundamentals",
        "Penetration Testing",
        "Network Security",
        "Web & Application Security",
        "Ethical Hacking Tools",
      ],
    },
    {
      name: "AI & Deep Learning",
      duration: "6 Months",
      instructor: "Dr. Priya Nair",
      description: [
        "Introduction to AI",
        "Neural Networks & CNNs",
        "Natural Language Processing",
        "Computer Vision",
        "Projects using TensorFlow & PyTorch",
      ],
    },
    {
      name: "Cloud Computing",
      duration: "3 Months",
      instructor: "Mr. Amit Verma",
      description: [
        "Cloud Basics",
        "AWS, Azure, Google Cloud",
        "Cloud Storage & Security",
        "DevOps Integration",
      ],
    },
    {
      name: "DevOps",
      duration: "3 Months",
      instructor: "Mr. Karan Patel",
      description: [
        "Linux Fundamentals",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Jenkins & GitHub Actions",
        "Monitoring & Cloud Deployment",
      ],
    },
    {
      name: "Embedded System / IoT",
      duration: "5 Months",
      instructor: "Ms. Radhika Menon",
      description: [
        "Microcontrollers & Arduino",
        "IoT Sensors & Communication",
        "Raspberry Pi Applications",
        "Cloud IoT Integration",
        "IoT Project Development",
      ],
    },
    {
      name: "Web Development",
      duration: "4 Months",
      instructor: "Mr. Rohit Sharma",
      description: [
        "HTML, CSS, JavaScript",
        "React.js & Node.js",
        "Express.js & MongoDB",
        "Full-stack Project Development",
      ],
    },
    {
      name: "Software Testing",
      duration: "2 Months",
      instructor: "Ms. Kavita Desai",
      description: [
        "Manual Testing",
        "Automation with Selenium",
        "Test Planning & Strategy",
        "API Testing",
      ],
    },
    {
      name: "Python Programming & Django",
      duration: "3 Months",
      instructor: "Mr. Vivek Iyer",
      description: [
        "Core Python",
        "Data Structures & OOP",
        "Django Web Framework",
        "REST API Development",
      ],
    },
    {
      name: "Mobile App Development",
      duration: "4 Months",
      instructor: "Mr. Faiz Ahmed",
      description: [
        "Flutter Framework",
        "React Native Basics",
        "Firebase Integration",
        "Android & iOS Deployment",
      ],
    },
    {
      name: "UI/UX Design",
      duration: "3 Months",
      instructor: "Ms. Sneha Kapoor",
      description: [
        "Design Thinking",
        "Figma & Adobe XD",
        "User Research",
        "Wireframes & Prototypes",
      ],
    },
    {
      name: "Database Management System",
      duration: "2 Months",
      instructor: "Mr. Pankaj Mehta",
      description: [
        "SQL & NoSQL Databases",
        "Normalization & Schema Design",
        "Database Security",
        "Query Optimization",
      ],
    },
    {
      name: "Cloud Basics",
      duration: "1 Month",
      instructor: "Ms. Nidhi Rao",
      description: [
        "Introduction to Cloud Computing",
        "AWS & Azure Overview",
        "Cloud Deployment Basics",
      ],
    },
    {
      name: "Digital Marketing Basics",
      duration: "1 Month",
      instructor: "Mr. Alok Gupta",
      description: [
        "SEO Basics",
        "Social Media Marketing",
        "Google Ads Introduction",
      ],
    },
    {
      name: "Data Analytics",
      duration: "3 Months",
      instructor: "Dr. Anusha Pillai",
      description: [
        "Excel for Analytics",
        "SQL for Data Handling",
        "Visualization with Power BI & Tableau",
      ],
    },
    {
      name: "Data Science & Python Programming",
      duration: "4 Months",
      instructor: "Mr. Aditya Menon",
      description: [
        "Python Programming",
        "Data Wrangling",
        "Data Visualization",
        "Intro to ML",
      ],
    },
    {
      name: "R Programming",
      duration: "2 Months",
      instructor: "Mr. Vishal Rao",
      description: [
        "R Basics",
        "Data Manipulation with dplyr",
        "Data Visualization with ggplot2",
        "Statistical Modeling",
      ],
    },
  ],

  "Financial Mastery": [
    {
      name: "Digital Marketing (SEO, SEM, SMM)",
      duration: "3 Months",
      instructor: "Ms. Ritu Malhotra",
      description: [
        "SEO Advanced Techniques",
        "Search Engine Marketing",
        "Social Media Strategies",
        "Campaign Management",
      ],
    },
    {
      name: "Business Analytics",
      duration: "4 Months",
      instructor: "Mr. Sandeep Nair",
      description: [
        "Excel & SQL for Analytics",
        "Predictive Analytics",
        "Visualization Tools",
        "Decision Making",
      ],
    },
    {
      name: "Financial Modeling",
      duration: "2 Months",
      instructor: "Ms. Shruti Jain",
      description: [
        "Excel for Finance",
        "Forecasting Models",
        "Valuation Techniques",
      ],
    },
    {
      name: "HR Analytics",
      duration: "2 Months",
      instructor: "Mr. Rahul Khanna",
      description: [
        "People Data Analysis",
        "Predictive HR Metrics",
        "Employee Retention Analytics",
      ],
    },
    {
      name: "Project Management (PMP/Agile)",
      duration: "3 Months",
      instructor: "Mr. Ashok Kumar",
      description: [
        "PMP Framework",
        "Agile Methodology",
        "Scrum & Kanban",
      ],
    },
    {
      name: "MS Excel (Advanced)",
      duration: "1 Month",
      instructor: "Ms. Pooja Sharma",
      description: [
        "Advanced Excel Functions",
        "Pivot Tables & Charts",
        "Macros & VBA",
      ],
    },
  ],

  "Financial & Investment": [
    {
      name: "CA",
      duration: "12 Months",
      instructor: "Mr. Suresh Iyer",
      description: [
        "Accounting & Taxation",
        "Auditing",
        "Corporate Laws",
      ],
    },
  ],

  "Soft Skills": [
    {
      name: "Problem Solving",
      duration: "1 Month",
      instructor: "Ms. Anjali Mehra",
      description: [
        "Critical Thinking",
        "Logical Reasoning",
        "Practical Case Studies",
      ],
    },
    {
      name: "Aptitude Mastery",
      duration: "2 Months",
      instructor: "Mr. Sameer Gupta",
      description: [
        "Quantitative Aptitude",
        "Logical Ability",
        "Verbal Reasoning",
      ],
    },
    {
      name: "Critical Thinking",
      duration: "1 Month",
      instructor: "Dr. Kavita Menon",
      description: [
        "Analytical Thinking",
        "Problem-based Learning",
        "Case Analysis",
      ],
    },
  ],

  "Exclusive Interview Cracking": [
    {
      name: "Placement Training",
      duration: "2 Months",
      instructor: "Mr. Anil Sharma",
      description: [
        "Mock Interviews",
        "Resume Building",
        "Aptitude & HR Rounds",
      ],
    },
  ],

  "11th / 12th Programs": [
    {
      name: "Introduction to Programming",
      duration: "1 Month",
      instructor: "Mr. Deepak Verma",
      description: ["Python Basics", "C Basics", "Logical Programs"],
    },
    {
      name: "Web Designing (HTML, CSS, Basic JavaScript)",
      duration: "2 Months",
      instructor: "Ms. Ria Kapoor",
      description: ["HTML5", "CSS3", "JavaScript Basics", "Mini Project"],
    },
    {
      name: "Graphic Designing",
      duration: "1 Month",
      instructor: "Ms. Sakshi Agarwal",
      description: ["Canva Basics", "Photoshop Essentials", "Poster Design"],
    },
    {
      name: "Digital Marketing Introduction",
      duration: "1 Month",
      instructor: "Mr. Kunal Mehta",
      description: ["SEO Basics", "Social Media Marketing", "Blogging"],
    },
    {
      name: "Spoken English & Communication Skills",
      duration: "1 Month",
      instructor: "Ms. Shweta Rao",
      description: ["Grammar Basics", "Public Speaking", "Confidence Building"],
    },
    {
      name: "Tally with GST Basics",
      duration: "2 Months",
      instructor: "Mr. Sanjay Patel",
      description: ["Accounting Basics", "GST Entry", "Ledger Management"],
    },
    {
      name: "Soft Skills & Interview Preparation",
      duration: "1 Month",
      instructor: "Mr. Nitin Khurana",
      description: ["Resume Writing", "Interview Confidence", "Communication"],
    },
  ],

  "Restart Your Career": [
    {
      name: "Computer Refresher Course",
      duration: "1 Month",
      instructor: "Mr. Arun Rao",
      description: ["MS Office", "Internet Basics", "Email Communication"],
    },
    {
      name: "Personality Development & Interview Confidence",
      duration: "1 Month",
      instructor: "Ms. Tanya Sharma",
      description: ["Body Language", "Confidence Boosting", "Mock Interviews"],
    },
    {
      name: "Web Designing Basics",
      duration: "2 Months",
      instructor: "Mr. Saurabh Jain",
      description: ["HTML, CSS", "Basic Web Pages", "Mini Project"],
    },
    {
      name: "Tally with GST & Accounting Software",
      duration: "2 Months",
      instructor: "Mr. Ravi Gupta",
      description: ["Tally Basics", "GST Billing", "Financial Reporting"],
    },
    {
      name: "Digital Marketing Refresher Program",
      duration: "1 Month",
      instructor: "Ms. Richa Singh",
      description: ["SEO", "SMM", "Google Ads Basics"],
    },
    {
      name: "Spoken English & Communication Skills",
      duration: "1 Month",
      instructor: "Ms. Neelam Kapoor",
      description: ["Speaking Fluently", "Presentation Skills"],
    },
    {
      name: "Remote Work Basics",
      duration: "1 Month",
      instructor: "Mr. Varun Mehta",
      description: ["Freelancing Platforms", "Remote Tools", "Work Ethics"],
    },
  ],

  "Career Switching": [
    {
      name: "Web Development (Full Stack Basics)",
      duration: "3 Months",
      instructor: "Mr. Rohan Gupta",
      description: ["HTML, CSS, JS", "Node.js Basics", "Mini Project"],
    },
    {
      name: "UI/UX Designing",
      duration: "2 Months",
      instructor: "Ms. Isha Kapoor",
      description: ["Figma", "Wireframing", "Design Systems"],
    },
    {
      name: "Digital Marketing Professional Program",
      duration: "3 Months",
      instructor: "Mr. Adarsh Verma",
      description: ["SEO", "SEM", "SMM", "Campaign Analysis"],
    },
    {
      name: "Python Programming & Data Analytics",
      duration: "3 Months",
      instructor: "Mr. Rahul Arora",
      description: ["Python Basics", "Data Analytics Libraries", "Visualization"],
    },
    {
      name: "Basic Cloud Computing Concepts",
      duration: "1 Month",
      instructor: "Ms. Tanvi Mehta",
      description: ["Cloud Basics", "AWS Intro", "Deployment Basics"],
    },
    {
      name: "Business Communication & Soft Skills",
      duration: "1 Month",
      instructor: "Ms. Jyoti Sharma",
      description: ["Professional Email Writing", "Team Communication"],
    },
    {
      name: "Introduction to Cybersecurity",
      duration: "2 Months",
      instructor: "Mr. Abhishek Patel",
      description: ["Cybersecurity Basics", "Network Security", "Threat Analysis"],
    },
    {
      name: "Job-Oriented Crash Courses (Fast-track)",
      duration: "1 Month",
      instructor: "Mr. Kunal Sharma",
      description: ["Quick Upskilling", "Placement Readiness"],
    },
  ],
};

// ================== COMPONENT ==================
const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [enrollCourse, setEnrollCourse] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnrollSubmit = (e: any) => {
    e.preventDefault();
    console.log("Enrollment Data:", { ...formData, course: enrollCourse?.name, price: 14999 });
    alert(`Enrolled Successfully in ${enrollCourse?.name}!`);
    setEnrollCourse(null);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Title */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>

          {/* Loop through categories */}
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

              {/* Course Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courseList.map((course: any, i: number) => (
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
                        {course.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Learn {course.name} with hands-on projects, mentorship,
                        and placement support.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {/* Details Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 border border-blue-600 text-blue-600 text-sm rounded-lg shadow-sm"
                        onClick={() =>
                          setSelectedCourse({ ...course, category })
                        }
                      >
                        Details
                      </motion.button>
                      {/* Enroll Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow-md"
                        onClick={() => setEnrollCourse({ ...course, category })}
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

      {/* Modal for Course Details */}
      {selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative"
          >
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            {/* Modal Title */}
            <h2 className="text-xl font-bold mb-4">
              <span className="text-blue-600">{selectedCourse.category}</span>
              {" – "}
              <span className="text-gray-800">{selectedCourse.name}</span>
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Duration:</strong> {selectedCourse.duration}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Instructor:</strong> {selectedCourse.instructor}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {selectedCourse.description.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}

      {/* Modal for Enrollment Form */}
      {enrollCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative"
          >
            <button
              onClick={() => setEnrollCourse(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            {/* Enroll Title */}
            <h2 className="text-xl font-bold mb-4 text-blue-600">
              Enroll in {enrollCourse.name}
            </h2>

            <form onSubmit={handleEnrollSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full border px-3 py-2 rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full border px-3 py-2 rounded-lg"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />

              {/* Show Course & Price */}
              <div className="bg-gray-100 p-3 rounded-lg">
                <p>
                  <strong>Course:</strong> {enrollCourse.name}
                </p>
                <p>
                  <strong>Price:</strong> ₹14,999
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Submit Enrollment
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <PriyonixFooter />
    </>
  );
};

export default CoursesPage;
