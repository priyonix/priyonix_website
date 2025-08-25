'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/Navbar';
import PriyonixFooter from '@/components/ui/Footer';
import axios from 'axios';

interface AdditionalInfo {
  collegeName?: string;
  department?: string;
  degree?: string;
  experience?: string;
  gapDuration?: string;
  currentDomain?: string;
  highestQualification?: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name: string;
    email: string;
    contact: string;
  };
  theme?: {
    color: string;
  };
}

interface RazorpayInstance {
  open: () => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

const pricingData: Record<string, Record<string, number>> = {
  'Full Stack Web Development': { '3': 15000, '6': 25000, '12': 40000 },
  'Artificial Intelligence & Machine Learning': { '3': 18000, '6': 30000, '12': 45000 },
  'Data Science & Analytics': { '3': 17000, '6': 28000, '8': 35000 },
  'Cybersecurity & Ethical Hacking': { '3': 16000, '6': 27000 },
  'Mobile Application Development': { '3': 15000, '6': 26000 },
  'UI/UX': { '3': 12000, '6': 20000 },
  'Business Analytics': { '3': 14000, '6': 22000 },
  'Cloud & DevOps': { '3': 18000, '6': 30000 },
  'Embedded Systems & IoT': { '3': 16000, '6': 28000 },
  'Project Management & Soft Skills': { '3': 13000, '6': 20000 },
  'CAD': { '3': 10000, '6': 15000 },
  'Direct placement': { '3': 5000 },
  'Communication skill': { '3': 8000 },
};

const courses = Object.keys(pricingData);

export default function CourseBooking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo>({});
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [showPricingModal, setShowPricingModal] = useState(false);

  const handleNext = () => {
    if (!name || !email || !phone || !category || !selectedCourse) {
      alert('Please fill all fields');
      return;
    }
    setShowPricingModal(true);
  };

  const handlePayment = async (duration: string, price: number) => {
    try {
      const bookingRes = await axios.post('/api/save-booking', {
        name,
        email,
        phone,
        category,
        additionalInfo,
        course: selectedCourse,
        duration,
        amount: price,
      });

      const bookingId = bookingRes.data._id;

      const orderRes = await axios.post('/api/create-order', { amount: price });
      const { orderId } = orderRes.data;

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? '',
        amount: price * 100,
        currency: 'INR',
        name: 'Priyonix',
        description: `Payment for ${selectedCourse}`,
        order_id: orderId,
        handler: async (response: RazorpayResponse) => {
          await axios.post('/api/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            bookingId,
          });

          await axios.post('/api/send-email', {
            email,
            name,
            course: selectedCourse,
            amount: price,
          });

          window.location.href = '/thank-you';
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: '#000000',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20 flex">
        {/* Left Side Quote */}
        <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-black text-white p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">
            &quot;Education is the passport to the future.&quot;
          </h2>
          <p className="text-lg">
            Secure your career with Priyonix training and guaranteed placement.
          </p>
        </div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-4">Book Your Course</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-3 rounded-lg" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-3 rounded-lg" />
            <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-3 rounded-lg" />

            <select title='category' value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border p-3 rounded-lg">
              <option value="">Select Category</option>
              <option>College Student</option>
              <option>Completed College</option>
              <option>Career Break</option>
              <option>Switching Career</option>
              <option>House Wife</option>
            </select>

            {/* Category-specific fields */}
            {category === 'College Student' && (
              <>
                <input placeholder="College Name" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, collegeName: e.target.value })} />
                <input placeholder="Department" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, department: e.target.value })} />
              </>
            )}
            {category === 'Completed College' && (
              <input placeholder="Degree" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, degree: e.target.value })} />
            )}
            {category === 'Career Break' && (
              <>
                <input placeholder="Experience" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, experience: e.target.value })} />
                <input placeholder="Gap Duration" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, gapDuration: e.target.value })} />
              </>
            )}
            {category === 'Switching Career' && (
              <>
                <input placeholder="Experience" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, experience: e.target.value })} />
                <input placeholder="Current Domain" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, currentDomain: e.target.value })} />
              </>
            )}
            {category === 'House Wife' && (
              <input placeholder="Highest Qualification" className="w-full border p-3 rounded-lg" onChange={(e) => setAdditionalInfo({ ...additionalInfo, highestQualification: e.target.value })} />
            )}

            <select title='selectcourse' value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="w-full border p-3 rounded-lg">
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>
          </div>

          <Button className="mt-6 w-full bg-black text-white py-3 rounded-lg" onClick={handleNext}>
            Next
          </Button>
        </motion.div>
      </div>

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg relative">
            <button className="absolute top-2 left-2 text-gray-500 text-2xl" onClick={() => setShowPricingModal(false)}>←</button>
            <h2 className="text-2xl font-bold mb-4">Choose Your Plan for {selectedCourse}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(pricingData[selectedCourse] || {}).map(([duration, price]) => (
                <div key={duration} className="border p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{duration} Months</h3>
                  <p className="text-gray-700 mb-4">₹{price.toLocaleString()}</p>
                  <Button className="bg-black text-white w-full" onClick={() => handlePayment(duration, price)}>Buy Now</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <PriyonixFooter />
    </div>
  );
}
