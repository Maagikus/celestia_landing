'use client';

import { DocumentPage } from '@/app/components/document-page';
import { GridBackground } from '@/app/components/grid-background';
import { SpaceShipsBackground } from '@/app/components/space-ships-background';
import { useRouter } from 'next/navigation';

export default function Document() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-[#e0e5ec] dark:bg-[#1a1f2e] relative overflow-hidden transition-colors duration-500">
      <GridBackground />
      <SpaceShipsBackground />
      
      <div className="relative z-10">
        <DocumentPage onBack={() => router.push('/')} />
      </div>
    </div>
  );
}