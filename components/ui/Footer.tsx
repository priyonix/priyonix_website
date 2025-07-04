"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaPhone,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PriyonixFooter() {
  return (
    <footer className="bg-black bg-opacity-20 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Full Stack Development</li>
            <li>UI/UX Design</li>
            <li>Data Science & AI</li>
            <li>Cloud & DevOps</li>
            <li>Mobile App Development</li>
            <li>Cybersecurity</li>
            <li>Embedded Systems & IOT</li>
            <li>Project Management & Soft Skill Development</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Priyonix Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {/* <li>Blog</li> */}
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
            {/* <li>Student Testimonials</li> */}
            <li>Tech Resources</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <FaPhone className="mt-1 text-white" />
              <span>+91 7845854585</span>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1 text-white" />
              <span>
                PRIYONIX GLOBAL VENTURES PVT. LTD. <br/>
                SAKTHI MANSION, <br/>
                Door No:121, Plot No.74, <br/>
                Arulananda Ammal Nagar 5th Street, <br/>
                Don Bosco School Main Road, <br/>
                Thanjavur - 613007
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.linkedin.com" title="linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/priyonix/" title="instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" title="facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@Priyonix" title="youtube" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-transform transform hover:scale-110">
              <FaYoutube />
            </a>
            <a href="https://x.com/priyonix" title="x" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform transform hover:scale-110">
              <FaXTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center mt-8 text-gray-400 text-sm">
        © 2025 Priyonix. All rights reserved | <span className="underline cursor-pointer">Cookies Policy</span>
      </div>
    </footer>
  );
}
