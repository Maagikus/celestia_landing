'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  getNeomorphicShadow: (variant?: 'flat' | 'pressed' | 'convex') => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('celestia-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('celestia-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const getNeomorphicShadow = (variant: 'flat' | 'pressed' | 'convex' = 'convex') => {
    if (theme === 'light') {
      switch (variant) {
        case 'flat':
          return 'none';
        case 'pressed':
          return 'inset 4px 4px 10px rgba(163, 177, 198, 0.25), inset -4px -4px 10px rgba(255, 255, 255, 0.7)';
        case 'convex':
        default:
          return '8px 8px 16px rgba(163, 177, 198, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9)';
      }
    } else {
      switch (variant) {
        case 'flat':
          return 'none';
        case 'pressed':
          return 'inset 4px 4px 14px rgba(0, 0, 0, 0.35), inset -4px -4px 14px rgba(42, 52, 70, 0.42)';
        case 'convex':
        default:
          return '7px 7px 18px rgba(10, 14, 22, 0.45), -7px -7px 18px rgba(42, 52, 70, 0.35)';
      }
    }
  };

  const isDarkMode = theme === 'dark';
  
  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, getNeomorphicShadow }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
