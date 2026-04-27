import { Menu, X, Wallet } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CelestiaLogo } from './celestia-logo';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from '../contexts/theme-context';

export function Header() {
  const { theme, getNeomorphicShadow } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'price', label: 'Price' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (error: any) {
        console.error('Error connecting wallet:', error);
        // Don't show error alerts - user might have simply cancelled the connection
        // The error is logged to console for debugging purposes
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet to connect');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <header 
      className="fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-all duration-500 border border-[#d1d9e6]/20 dark:border-[#2d3748]/40" 
      style={{ 
        boxShadow: getNeomorphicShadow('convex')
      }}
    >
      <nav className="px-4 py-3 sm:px-6 sm:py-4 md:px-12 lg:px-16 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between max-w-7xl mx-auto transition-all duration-300 ease-in-out">
          <div className="flex items-center gap-2 sm:gap-3 transition-all duration-300 ease-in-out">
            <CelestiaLogo className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 ease-in-out" />
            <span className="font-semibold tracking-wider uppercase text-sm sm:text-base text-[#1a1f2e] dark:text-[#f8fafc] transition-all duration-300 ease-in-out">
              Celestia
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3 transition-all duration-300 ease-in-out">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setHoveredButton('menu')}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out text-[#1a1f2e] dark:text-[#f8fafc]"
              style={{ 
                boxShadow: hoveredButton === 'menu' ? getNeomorphicShadow('pressed') : getNeomorphicShadow('convex')
              }}
            >
              {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ease-in-out" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ease-in-out" />}
            </button>
          </div>

          {/* Desktop navigation and buttons */}
          <div className="hidden lg:flex items-center gap-8 transition-all duration-300 ease-in-out">
            {/* Navigation links */}
            <nav className="flex items-center gap-6 transition-all duration-300 ease-in-out">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm uppercase transition-all duration-300 ease-in-out ${
                    activeSection === item.id
                      ? 'text-[#1a1f2e] dark:text-[#ff8c42]'
                      : 'text-[#1a1f2e] dark:text-[#94a3b8] hover:text-[#1a1f2e] dark:hover:text-[#ff8c42]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1a1f2e] dark:bg-[#ff8c42] rounded-full transition-all duration-300 ease-in-out" />
                  )}
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-px h-8 bg-[#cbd5e0] dark:bg-[#2d3748] transition-all duration-300 ease-in-out" />

            <ThemeToggle />
            {!walletAddress ? (
              <button 
                onClick={connectWallet}
                className="px-4 py-2 xl:px-6 xl:py-3 rounded-full transition-all duration-300 ease-in-out flex items-center gap-2 text-sm xl:text-base text-[#4a5568] dark:text-[#94a3b8] border-2 border-[#2d3748] dark:border-[#64748b] hover:bg-[#1a1f2e] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1f2e]" 
              >
                <Wallet className="w-4 h-4 xl:w-5 xl:h-5 transition-all duration-300 ease-in-out" />
                <span className="hidden xl:inline">Connect Wallet</span>
                <span className="xl:hidden">Connect</span>
              </button>
            ) : (
              <button 
                onClick={disconnectWallet}
                className="px-4 py-2 xl:px-6 xl:py-3 rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2 text-sm xl:text-base text-[#1a1f2e] dark:text-[#f8fafc] border-2 border-[#2d3748] dark:border-[#64748b] hover:bg-[#1a1f2e] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1f2e]" 
              >
                <Wallet className="w-4 h-4 xl:w-5 xl:h-5 transition-all duration-300 ease-in-out" />
                {formatAddress(walletAddress)}
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden mt-4 pb-4 backdrop-blur-sm rounded-xl p-4 bg-[#e0e5ec]/90 dark:bg-[#1a1f2e]/90 transition-all duration-300 ease-in-out" 
            style={{ 
              boxShadow: getNeomorphicShadow('pressed')
            }}
          >
            <div className="flex flex-col gap-4 mt-4 transition-all duration-300 ease-in-out">
              <a 
                href="#home" 
                className="transition-all duration-300 ease-in-out text-[#4a5568] dark:text-[#94a3b8] hover:text-[#2d3748] dark:hover:text-[#ff8c42]"
              >
                Home
              </a>
              <a 
                href="#capabilities" 
                className="transition-all duration-300 ease-in-out text-[#4a5568] dark:text-[#94a3b8] hover:text-[#2d3748] dark:hover:text-[#ff8c42]"
              >
                Capabilities
              </a>
              <a 
                href="#price" 
                className="transition-all duration-300 ease-in-out text-[#4a5568] dark:text-[#94a3b8] hover:text-[#2d3748] dark:hover:text-[#ff8c42]"
              >
                Price
              </a>
              <div className="flex flex-col gap-3 mt-4 transition-all duration-300 ease-in-out">
                {!walletAddress ? (
                  <button 
                    onClick={connectWallet}
                    className="px-6 py-3 rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center gap-2 text-[#1a1f2e] dark:text-[#f8fafc] border-2 border-[#2d3748] dark:border-[#64748b] hover:bg-[#1a1f2e] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1f2e]" 
                  >
                    <Wallet className="w-5 h-5 transition-all duration-300 ease-in-out" />
                    Connect Wallet
                  </button>
                ) : (
                  <button 
                    onClick={disconnectWallet}
                    className="px-6 py-3 rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center gap-2 text-[#1a1f2e] dark:text-[#f8fafc] border-2 border-[#2d3748] dark:border-[#64748b] hover:bg-[#1a1f2e] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1f2e]" 
                  >
                    <Wallet className="w-5 h-5 transition-all duration-300 ease-in-out" />
                    {formatAddress(walletAddress)}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}