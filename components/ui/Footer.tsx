"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

// Define exact course keys for TypeScript safety
type CourseName =
  | "Full Stack Development"
  | "UI/UX Design"
  | "Data Science & AI"
  | "Cloud & DevOps"
  | "Mobile App Development"
  | "Cybersecurity"
  | "Embedded Systems & IOT"
  | "Project Management & Soft Skill Development";

// Course descriptions mapped to names
const courseDetails: Record<CourseName, string> = {
  "Full Stack Development":
    "Learn to build complete web apps using React, Node.js, MongoDB, and more.",
  "UI/UX Design":
    "Design beautiful and user-friendly interfaces using Figma, design systems, and usability principles.",
  "Data Science & AI":
    "Dive into machine learning, Python, and AI to create predictive models.",
  "Cloud & DevOps":
    "Master AWS, Docker, Kubernetes, and CI/CD for modern DevOps practices.",
  "Mobile App Development":
    "Build mobile apps using Flutter, React Native, and native SDKs.",
  "Cybersecurity":
    "Protect systems using ethical hacking, network security, and encryption.",
  "Embedded Systems & IOT":
    "Develop hardware-based projects with Arduino, sensors, and Raspberry Pi.",
  "Project Management & Soft Skill Development":
    "Improve communication, leadership, planning, and project execution skills.",
};

export default function PriyonixFooter() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseName | null>(null);

  const handleOpenModal = (course: CourseName) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <>
      {/* Modal */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-black text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">
              {selectedCourse}
            </h2>
            <p className="text-gray-700">{courseDetails[selectedCourse]}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black bg-opacity-20 text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {(Object.keys(courseDetails) as CourseName[]).map((service) => (
                <li
                  key={service}
                  className="hover:underline cursor-pointer"
                  onClick={() => handleOpenModal(service)}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaPhone className="mt-1 text-white" />
                <a href="tel:+917845854585" className="hover:underline">
                  +91 7845854585
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 text-white" />
                <a href="mailto:hr@priyonix.in" className="hover:underline">
                  hr@priyonix.in
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 text-white" />
                <span>
                  Priyonix Global Ventures PVT. LTD. <br />
                  Sakthi Mansion, <br />
                  Door No:121, Plot No.74, <br />
                  Arulananda Ammal Nagar 5th Street, <br />
                  Don Bosco School Main Road, <br />
                  Thanjavur - 613007
                </span>
              </li>
            </ul>
          </div>


          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.linkedin.com"
                title="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/priyonix/"
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                title="facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/@Priyonix"
                title="youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-transform transform hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="https://x.com/priyonix"
                title="x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          © 2025 Priyonix. All rights reserved |{" "}
          <span className="underline cursor-pointer">Cookies Policy</span>
        </div>
      </footer>
    </>
  );
}
