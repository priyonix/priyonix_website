import PriyonixExpertise from "@/components/ui/PriyonixExpertiseShowcase";
import BookingConsultation from "@/components/ui/BookingConsultation";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import HeroSection from "@/components/ui/HeroSection";
import IndustryNetwork from "@/components/ui/IndustryNetwork";
import Navbar from "@/components/ui/Navbar";
import PriyonixFAQ from "@/components/ui/PriyonixFAQ";
import PriyonixFooter from "@/components/ui/Footer";
// import PriyonixParallaxText from "@/components/ui/TextParallaxContent";
import ChatbotButton from "@/components/ui/ChatbotButton";
import { ThreeDMarqueeDemo } from "@/components/ui/ThreeDMarqueeDemo";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>Priyonix - Training & Software Development Company</title>
        <meta
          name="description"
          content="Priyonix delivers innovative software solutions, cutting-edge technology services, and creative digital products to help businesses thrive in a connected world."
        />
        <meta
          name="keywords"
          content="Priyonix, software development, technology solutions, IT services, web development, mobile app development, digital transformation, cloud solutions, AI development"
        />
        <meta name="author" content="Priyonix Team" />
      </Head>
      <main>
        <LoadingScreen/>
        <Navbar/>
        <HeroSection />
        <IndustryNetwork/>
        <BookingConsultation/>
        <PriyonixExpertise/>
        
        <HeroParallaxDemo />
        <ThreeDMarqueeDemo/>
        {/* <PriyonixParallaxText/> */}
        <PriyonixFAQ />
        <PriyonixFooter/>
        <ChatbotButton/>
      </main>
    </>

  );
}
