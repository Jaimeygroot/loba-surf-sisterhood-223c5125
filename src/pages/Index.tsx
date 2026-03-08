import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SisterhoodSection from "@/components/SisterhoodSection";
import MissionSection from "@/components/MissionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CoachingSection from "@/components/CoachingSection";
import ForecastSection from "@/components/ForecastSection";
import SessionsSection from "@/components/SessionsSection";

import ConsciousSection from "@/components/ConsciousSection";
import ProgressionSection from "@/components/ProgressionSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <SisterhoodSection />
      <MissionSection />
      <HowItWorksSection />
      <CoachingSection />
      <ForecastSection />
      <SessionsSection />
      <ConsciousSection />
      <ProgressionSection />
      
      <ResultsSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
