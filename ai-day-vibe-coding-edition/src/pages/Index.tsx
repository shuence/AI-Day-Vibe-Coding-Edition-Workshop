
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import ScheduleSection from '@/components/ScheduleSection';
import RewardsSection from '@/components/RewardsSection';
import WhoCanJoinSection from '@/components/WhoCanJoinSection';
import ToolsSection from '@/components/ToolsSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyJoinSection />
      <ScheduleSection />
      <RewardsSection />
      <WhoCanJoinSection />
      <ToolsSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
