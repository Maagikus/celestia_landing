import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/theme-context';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

interface Nebula {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  animationDuration: number;
  color: string;
}

export function StarfieldBackground() {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  const [nebulas, setNebulas] = useState<Nebula[]>([]);

  useEffect(() => {
    // Generate stars on mount
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 200; // Number of stars

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // 0-100% of viewport width
          y: Math.random() * 100, // 0-100% of viewport height
          size: Math.random() * 2.5 + 0.5, // 0.5px to 3px
          opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
          animationDuration: Math.random() * 3 + 2, // 2s to 5s
          animationDelay: Math.random() * 3, // 0s to 3s delay
        });
      }

      return newStars;
    };

    // Generate nebula clouds
    const generateNebulas = () => {
      const newNebulas: Nebula[] = [];
      const nebulaCount = 5; // Number of nebula clouds
      
      const colors = theme === 'dark' 
        ? ['rgba(138, 43, 226, 0.15)', 'rgba(72, 61, 139, 0.15)', 'rgba(25, 25, 112, 0.15)', 'rgba(147, 112, 219, 0.12)']
        : ['rgba(139, 157, 195, 0.08)', 'rgba(176, 196, 222, 0.08)', 'rgba(119, 136, 153, 0.06)', 'rgba(152, 168, 200, 0.07)'];

      for (let i = 0; i < nebulaCount; i++) {
        newNebulas.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          width: Math.random() * 400 + 300, // 300-700px
          height: Math.random() * 400 + 300,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.4 + 0.3, // 0.3 to 0.7
          animationDuration: Math.random() * 20 + 30, // 30s to 50s
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      return newNebulas;
    };

    setStars(generateStars());
    setNebulas(generateNebulas());
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Nebula clouds */}
      {nebulas.map((nebula) => (
        <div
          key={`nebula-${nebula.id}`}
          className="absolute"
          style={{
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            width: `${nebula.width}px`,
            height: `${nebula.height}px`,
            background: `radial-gradient(ellipse at center, ${nebula.color}, transparent 70%)`,
            opacity: nebula.opacity,
            transform: `translate(-50%, -50%) rotate(${nebula.rotation}deg)`,
            animation: `nebulaDrift ${nebula.animationDuration}s ease-in-out infinite`,
            filter: 'blur(60px)',
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full transition-colors duration-500"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: theme === 'dark' ? '#ffffff' : '#8b9dc3',
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out ${star.animationDelay}s infinite`,
            boxShadow: theme === 'dark' 
              ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)` 
              : `0 0 ${star.size}px rgba(139, 157, 195, 0.5)`,
          }}
        />
      ))}

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes nebulaDrift {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) rotate(10deg) scale(1.1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}