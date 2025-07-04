import PriyonixExpertise from "@/components/ui/PriyonixExpertiseShowcase";
import BookingConsultation from "@/components/ui/BookingConsultation";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import HeroSection from "@/components/ui/HeroSection";
import IndustryNetwork from "@/components/ui/IndustryNetwork";
import Navbar from "@/components/ui/Navbar";
import { TextRevealCardPreview } from "@/components/ui/TextRevealCardPreview";
import PriyonixFAQ from "@/components/ui/PriyonixFAQ";
import PriyonixFooter from "@/components/ui/Footer";
import { TypewriterEffectSmoothDemo } from "@/components/ui/TypewriterEffectSmoothDemo";
// import PriyonixParallaxText from "@/components/ui/TextParallaxContent";
import ChatbotButton from "@/components/ui/ChatbotButton";
import { ThreeDMarqueeDemo } from "@/components/ui/ThreeDMarqueeDemo";
import LoadingScreen from "@/components/ui/LoadingScreen";



export default function Home() {
  return (
    <div>
      <LoadingScreen/>
      <Navbar/>
      <HeroSection />
      <IndustryNetwork/>
      <BookingConsultation/>
      <PriyonixExpertise/>
      <TextRevealCardPreview/>
      <HeroParallaxDemo />
      <ThreeDMarqueeDemo/>
      {/* <PriyonixParallaxText/> */}
      <PriyonixFAQ />
      <TypewriterEffectSmoothDemo/>
      <PriyonixFooter/>
      <ChatbotButton/>
    </div>
  );
}
