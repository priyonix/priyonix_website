'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import WhyChoosePriyonix from '@/components/ui/WhyChoosePriyonix';
import PriyonixFooter from '@/components/ui/Footer';
import VisionMission from '@/components/ui/VisionMission';
import FounderMessage from '@/components/ui/FounderMessage';
import ServicesSection from '@/components/ui/ServicesSection';
import FrontHero from '@/components/ui/FrontHero';
// import Head from 'next/head';


const AboutUs = () => {

    return (
        <div className="min-h-screen bg-white">
        <Navbar/>
            {/* <Head>
                <title>About Us - Priyonix</title>
                <meta
                name="description"
                content="Priyonix is a global software development and training company driven by innovation, creativity, and purpose. We empower people, transform careers, and create solutions that matter."
                />
            </Head> */}
            

            {/* Additional Sections */}
            <FrontHero />
            <FounderMessage />
            <VisionMission />
            <ServicesSection />
            <WhyChoosePriyonix />
            <PriyonixFooter />
            
        </div>
    );
};

export default AboutUs;
