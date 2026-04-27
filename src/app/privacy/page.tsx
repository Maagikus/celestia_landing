'use client';

import { PrivacyPolicyPage } from '@/app/components/privacy-policy-page';
import { GridBackground } from '@/app/components/grid-background';
import { SpaceShipsBackground } from '@/app/components/space-ships-background';
import { useRouter } from 'next/navigation';

export default function Privacy() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-[#e0e5ec] dark:bg-[#1a1f2e] relative overflow-hidden transition-colors duration-500">
      <GridBackground />
      <SpaceShipsBackground />
      
      <div className="relative z-10">
        <PrivacyPolicyPage onBack={() => router.push('/')} />
      </div>
    </div>
  );
}