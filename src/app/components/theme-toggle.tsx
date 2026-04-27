import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/theme-context';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme, getNeomorphicShadow } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <button
      onClick={toggleTheme}
      className="group p-3 rounded-full transition-all duration-300 bg-[#e0e5ec] dark:bg-[#1a1f2e] border-2 border-[#2d3748] dark:border-[#64748b] hover:bg-[#1a1f2e] dark:hover:bg-white"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[#4a5568] fill-[#4a5568] group-hover:text-white group-hover:fill-white transition-colors" strokeWidth={1.5} />
      ) : (
        <Sun className="w-5 h-5 text-[#64748b] group-hover:text-[#1a1f2e] transition-colors" strokeWidth={1.5} />
      )}
    </button>
  );
}