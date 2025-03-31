
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CompetitionsSection from '@/components/CompetitionsSection';
import LeaderboardSection from '@/components/LeaderboardSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CompetitionsSection />
        <LeaderboardSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
