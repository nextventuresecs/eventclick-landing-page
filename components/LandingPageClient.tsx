'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import FeatureBento from '@/components/FeatureBento';
import ProductShowcase from '@/components/ProductShowcase';
import SecuritySection from '@/components/SecuritySection';
import TargetUsers from '@/components/TargetUsers';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function LandingPageClient() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F3FC] text-[#1D2939] selection:bg-[#8C6FCF]/20 selection:text-[#402291]">
      
      {/* 1. Header / Navigation */}
      <Navbar onOpenDemo={() => setDemoOpen(true)} />

      {/* 2. Hero Section */}
      <HeroSection 
        onOpenDemo={() => setDemoOpen(true)} 
        onSelectRoom={(id) => setSelectedRoomId(id)}
      />

      {/* 3. Problem -> Solution */}
      <ProblemSolution />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Feature Bento Grid */}
      <FeatureBento />

      {/* 6. Product Showcase */}
      <ProductShowcase />

      {/* 7. Security Section */}
      <SecuritySection />

      {/* 8. Target Users */}
      <TargetUsers />

      {/* 10. FAQ */}
      <FaqSection />

      {/* 11. Final CTA */}
      <FinalCta onOpenDemo={() => setDemoOpen(true)} />

      {/* 12. Footer */}
      <Footer onOpenDemo={() => setDemoOpen(true)} />

      <DemoModal 
        isOpen={demoOpen} 
        onClose={() => setDemoOpen(false)}
        onLaunchRoom={(id) => setSelectedRoomId(id)}
      />

    </div>
  );
}
