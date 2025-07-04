'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import BookingPage from '@/app/booking/page';

const StartJourneySection = () => {
    return (
        <div className="w-full py-16 bg-black text-white flex flex-col items-center justify-center space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Primary Button */}
                <button className="flex items-center bg-black border-2 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
                    Start Your Journey Today <ArrowRight className="ml-2 w-4 h-4" />
                </button>

                <button className="bg-white text-gray-400 font-semibold px-6 py-3 rounded-full" onClick={BookingPage}>
                    Schedule Free Consultation
                </button>
            </div>

            {/* Information Text */}
            <div className="text-sm flex flex-wrap justify-center gap-3 text-white">
                <span>💡 Free career counseling</span>
                <span>🎯 Personalized learning path</span>
                <span>🚀 Industry connections</span>
            </div>
        </div>
    );
};

export default StartJourneySection;
