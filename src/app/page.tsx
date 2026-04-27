'use client';

import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { CapabilitiesSection } from '@/app/components/capabilities-section';
import { BenefitsSection } from '@/app/components/benefits-section';
import { PaymentSection } from '@/app/components/payment-section';
import { Footer } from '@/app/components/footer';
import { SpaceShipsBackground } from '@/app/components/space-ships-background';
import { GridBackground } from '@/app/components/grid-background';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] dark:bg-[#1a1f2e] relative overflow-hidden transition-colors duration-500">
      <GridBackground />
      <SpaceShipsBackground />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <CapabilitiesSection />
        <BenefitsSection />
        <PaymentSection />
        <Footer />
      </div>
    </div>
  );
}