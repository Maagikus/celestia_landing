import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useTheme } from '@/app/contexts/theme-context';
import { useState } from 'react';
import Link from 'next/link';

export function Footer() {
  const { getNeomorphicShadow } = useTheme();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  
  return (
    <footer className="relative py-6 sm:py-8 md:py-10 lg:py-12 px-4 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg mb-4 sm:mb-6 transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0] font-bold">
              Footer
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <Link 
                href="/document"
                className="block text-left transition-colors duration-300 text-sm sm:text-base text-[#2d3748] dark:text-[#e2e8f0] hover:text-[#4a5568] dark:hover:text-[#ff8c42] font-semibold"
              >
                Document
              </Link>
              <Link 
                href="/privacy"
                className="block text-left transition-colors duration-300 text-sm sm:text-base text-[#2d3748] dark:text-[#e2e8f0] hover:text-[#4a5568] dark:hover:text-[#ff8c42] font-semibold"
              >
                Privacy policy
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 sm:gap-6 w-full md:w-auto">
            <p className="transition-colors duration-500 text-sm sm:text-base text-[#2d3748] dark:text-[#e2e8f0] font-semibold">
              Contact us on:
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a 
                href="#" 
                onMouseEnter={() => setHoveredSocial('twitter')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#e0e5ec] dark:bg-[#1a1f2e] text-[#2d3748] dark:text-[#e2e8f0]"
                style={{ 
                  boxShadow: hoveredSocial === 'twitter' ? getNeomorphicShadow('pressed') : getNeomorphicShadow('convex')
                }}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                onMouseEnter={() => setHoveredSocial('linkedin')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#e0e5ec] dark:bg-[#1a1f2e] text-[#2d3748] dark:text-[#e2e8f0]"
                style={{ 
                  boxShadow: hoveredSocial === 'linkedin' ? getNeomorphicShadow('pressed') : getNeomorphicShadow('convex')
                }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                onMouseEnter={() => setHoveredSocial('youtube')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#e0e5ec] dark:bg-[#1a1f2e] text-[#2d3748] dark:text-[#e2e8f0]"
                style={{ 
                  boxShadow: hoveredSocial === 'youtube' ? getNeomorphicShadow('pressed') : getNeomorphicShadow('convex')
                }}
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                onMouseEnter={() => setHoveredSocial('instagram')}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#e0e5ec] dark:bg-[#1a1f2e] text-[#2d3748] dark:text-[#e2e8f0]"
                style={{ 
                  boxShadow: hoveredSocial === 'instagram' ? getNeomorphicShadow('pressed') : getNeomorphicShadow('convex')
                }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}