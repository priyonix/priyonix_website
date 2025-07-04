"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FiCheckCircle } from "react-icons/fi";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    emailjs
      .send(
        'service_76i93v2', // Service ID
        'template_5pmyudl', // Template ID
        formData,
        'ikNpNw12IbBhozKyR' // Public Key
      )
      .then(() => {
        setSuccessMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSuccessMessage("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center px-8 py-16 flex-grow">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h2 className="text-4xl font-bold mb-6">
            Get <span className="text-gray-400">in touch</span> today
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <FiCheckCircle className="text-gray-400 text-2xl mr-4 mt-1" />
              <span>We’ll personally connect with you to understand your learning goals and career aspirations.</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-gray-400 text-2xl mr-4 mt-1" />
              <span>We’ll provide you with expert course recommendations and a clear learning roadmap.</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-gray-400 text-2xl mr-4 mt-1" />
              <span>Even if you don’t enroll, you can always consider Priyonix your free learning guide and career mentor.</span>
            </li>
          </ul>

          <p className="mt-6 text-neutral-400">
            Alternatively, contact us via phone <span className="text-gray-400 font-semibold">+91 7845854585</span> or email <span className="text-gray-400 font-semibold">connect.priyonix@gmail.com</span>.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            We respond promptly, typically within <span className="text-gray-400 font-bold">30 minutes.</span>
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-neutral-700">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                placeholder="Enter Full Name"
              />
            </div>

            <div>
              <label className="block mb-1 text-neutral-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label className="block mb-1 text-neutral-700">Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                placeholder="Phone Number"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="h-5 w-5 text-gray-400" title="checkbox"/>
              <span className="text-neutral-700">Protect Under NDA</span>
            </div>

            <div>
              <label className="block mb-1 text-neutral-700">Description *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                placeholder="Enter Message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {successMessage && (
              <p className="mt-4 text-center text-green-500 font-semibold">{successMessage}</p>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
