"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Are the courses beginner-friendly?",
    answer: "Yes, all our courses are designed to be beginner-friendly with step-by-step explanations and real-world examples.",
  },
  {
    question: "How much do the courses cost?",
    answer: "We offer both free and paid courses. The pricing varies based on the course complexity and duration. Check individual course pages for details.",
  },
  {
    question: "Is there a live chat or support available?",
    answer: "Yes, Priyonix provides 24/7 live chat support to assist you with technical issues or course-related queries.",
  },
  {
    question: "Are Priyonix certificates recognized by companies?",
    answer: "Yes, our certificates are widely accepted and recognized by leading companies in the tech industry.",
  },
  {
    question: "How long will I have access to the courses I purchase?",
    answer: "You will have lifetime access to all the courses you purchase, so you can learn at your own pace anytime.",
  },
  {
    question: "Is placement support available after course completion?",
    answer: "Yes, we offer placement support including mock interviews, resume building, and job referrals for eligible students.",
  },
];

export default function PriyonixFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="scroll-mt-24 min-h-screen flex items-center justify-center bg-black p-6"
    >
      <div className="max-w-3xl w-full text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-black">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 border-t border-gray-700 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
