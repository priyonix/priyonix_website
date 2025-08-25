'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

type HighlightProps = {
  title: string;
  desc: string;
};

const FounderMessage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-blue-600 font-semibold mb-3">About our Founder</h4>
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Priyadharshini Arunachalam{' '}
            <span className="text-gray-800">Founder & Chief Executive Officer</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We didn&apos;t set out to build just a company we set out to shape a future.
            A future were bold ideas replace limitations, where Innovation drives real impact, 
            and where every step forward leaves the World better than we found it. <br /> 
            Our Mission is not only to solve problems, but to redefine what&apos;s possible. 
            <br />

            {/* Highlighted Quote */}
            <motion.span
              className="group relative block mt-6 text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {/* Together text */}
              <span className="block text-black font-bold text-3xl mb-2">
                Together
              </span>

              {/* Quotation line */}
              <span className="block text-blue-600 italic text-lg font-medium">
                We are not only Building a Business, We are Building a Legacy
              </span>

              {/* Popup Image */}
              <motion.img
                src="/together1.png"   // ✅ make sure this path is correct
                alt="Togetherness"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </p>




          <div className="space-y-6">
            <Highlight
              title="Innovation"
              desc="Building futuristic and scalable solutions"
            />
            <Highlight
              title="Integrity"
              desc="Creating trust-driven relationships"
            />
            <Highlight
              title="Impact"
              desc="Driving measurable change in industries and communities"
            />
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Founder Image */}
            <img
              src="/founder1.png"
              alt="Founder"
              className="rounded-2xl shadow-2xl w-[380px] h-[420px] object-cover bg-black"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6"
            >
              <Card className="shadow-lg rounded-2xl bg-blue-600 text-white">
                <CardContent className="flex items-center gap-3 p-4">
                  <div>
                    <h3 className="text-lg font-bold">5+ Years</h3>
                    <p className="text-sm">Industry Experience</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Highlight: React.FC<HighlightProps> = ({ title, desc }) => (
  <div className="flex items-start gap-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

export default FounderMessage;
