'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from 'emailjs-com';
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs.send('service_76i93v2', 'template_9ess0l9', formData, 'ikNpNw12IbBhozKyR')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Request sent successfully! We will contact you soon.');
        setFormData({ name: "", email: "", phone: "", course: "" });
        setIsSubmitting(false);
      }, (err) => {
        console.log('FAILED...', err);
        setSuccessMessage('Failed to send request. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-16 py-16 mt-10 animate-fade-in">
        {/* Booking Form */}
        <div className="w-full max-w-lg bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-8 rounded-2xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Request a Callback</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
              required
            />
            <select
              name="course"
              title="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            >
              <option value="">Select a Course</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Data Science &amp; AI">Data Science &amp; AI</option>
              <option value="Cloud &amp; DevOps">Cloud &amp; DevOps</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Embedded Systems &amp; IOT">Embedded Systems &amp; IOT</option>
              <option value="Project Management">Project Management &amp; Soft Skill Development</option>
            </select>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="h-5 w-5 text-blue-500 accent-blue-500"
              />
              <label htmlFor="subscribe" className="text-gray-300 cursor-pointer text-sm md:text-base">
                I want to receive further updates and emails.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-4 rounded-lg text-white font-semibold transition-all duration-300 ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-gray-500 to-blue-500 hover:scale-105 hover:from-blue-500 hover:to-gray-500'}`}
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'}
            </button>
          </form>

          {successMessage && <p className="text-green-400 mt-4 text-center">{successMessage}</p>}
        </div>

        {/* Founder Section */}
        <div className="w-full max-w-md text-center space-y-4">
          <Image src="/founder3.png" alt="Founder" width={300} height={300} className="mx-auto rounded-full shadow-lg" />
          <h3 className="text-2xl font-bold">Our Founder</h3>
          <p className="text-gray-300 max-w-md mx-auto text-base">
            &quot;At Priyonix - Where Training meets Global Standards. Where Students Become Professionals.&quot;
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
