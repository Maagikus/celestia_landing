import { useEffect, useState } from 'react';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'price', label: 'Price' },
];

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(section => {
        if (!section) return false;
        return section.top <= window.innerHeight / 2 && section.bottom >= window.innerHeight / 2;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-6">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3 transition-all"
          >
            <div className="relative flex items-center">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeSection === item.id
                    ? 'scale-150 bg-[#2d3748] dark:bg-[#ff8c42]'
                    : 'bg-transparent border-2 border-[#4a5568] dark:border-[#94a3b8]'
                }`}
              />
            </div>

            <span
              className={`text-sm whitespace-nowrap transition-all duration-300 ${
                activeSection === item.id
                  ? 'opacity-100 translate-x-0 text-[#2d3748] dark:text-[#ff8c42]'
                  : 'opacity-0 -translate-x-2 text-[#4a5568] dark:text-[#94a3b8] group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
