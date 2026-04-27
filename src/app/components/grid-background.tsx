import { useTheme } from '../contexts/theme-context';

export function GridBackground() {
  const { theme } = useTheme();

  // Technical annotations like on blueprint
  // Horizontal text (rotate: 0) starts from bottom-left corner of grid square
  // Vertical text (rotate: -90) starts from bottom-right corner of grid square
  // Distributed harmoniously across the viewport for balanced technical blueprint look
  // Positioned to avoid overlapping with main content (Hero section in center)
  // Not placed at extreme edges for better visibility
  const annotations = [
    // Top area - scattered above hero
    { text: 'STARATLAS', x: '15%', y: 'calc(6% + 80px)', rotate: -90 },
    { text: 'AI Assistant', x: '45%', y: 'calc(8% + 45px)', rotate: 0 },
    
    // Mid-left area
    { text: 'CELESTIA AI', x: '8%', y: 'calc(35% - 10px)', rotate: 0 },
    
    // Mid-right area
    { text: 'MRZ-5', x: '82%', y: '38%', rotate: -90 },
    { text: 'x: 23 | y: -5', x: '86%', y: '58%', rotate: 0 },
    
    // Bottom area - scattered below hero
    { text: 'MRZ-32', x: '18%', y: 'calc(75% - 35px)', rotate: -90 },
    { text: 'Treearrow', x: 'calc(50% + 150px)', y: 'calc(80% - 380px)', rotate: 0, multiline: true, subtitle: 'Fimbul ECOS Bomber' },
    { text: 'Guardian Calico', x: '12%', y: 'calc(90% - 35px)', rotate: 0, multiline: true, subtitle: 'Multi-role' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid pattern with dots */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Small grid pattern */}
          <pattern 
            id="smallGrid" 
            width="20" 
            height="20" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 20 0 L 0 0 0 20" 
              fill="none" 
              stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.2)' : 'rgba(74, 85, 104, 0.2)'} 
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Large grid pattern */}
          <pattern 
            id="largeGrid" 
            width="100" 
            height="100" 
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path 
              d="M 100 0 L 0 0 0 100" 
              fill="none" 
              stroke={theme === 'dark' ? 'rgba(148, 163, 184, 0.3)' : 'rgba(74, 85, 104, 0.3)'} 
              strokeWidth="1"
            />
          </pattern>
          
          {/* Dots pattern */}
          <pattern 
            id="dots" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <circle 
              cx="2" 
              cy="2" 
              r="1" 
              fill={theme === 'dark' ? 'rgba(148, 163, 184, 0.35)' : 'rgba(74, 85, 104, 0.35)'}
            />
            <circle 
              cx="2" 
              cy="22" 
              r="0.5" 
              fill={theme === 'dark' ? 'rgba(148, 163, 184, 0.25)' : 'rgba(74, 85, 104, 0.25)'}
            />
            <circle 
              cx="22" 
              cy="2" 
              r="0.5" 
              fill={theme === 'dark' ? 'rgba(148, 163, 184, 0.25)' : 'rgba(74, 85, 104, 0.25)'}
            />
            <circle 
              cx="22" 
              cy="22" 
              r="0.5" 
              fill={theme === 'dark' ? 'rgba(148, 163, 184, 0.25)' : 'rgba(74, 85, 104, 0.25)'}
            />
          </pattern>
        </defs>
        
        {/* Apply patterns */}
        <rect width="100%" height="100%" fill="url(#largeGrid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(ellipse at 50% 0%, rgba(255, 140, 66, 0.03), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(100, 116, 139, 0.03), transparent 50%)'
            : 'radial-gradient(ellipse at 50% 0%, rgba(74, 85, 104, 0.02), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(148, 163, 184, 0.02), transparent 50%)'
        }}
      />
      
      {/* Annotations */}
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className="absolute pointer-events-none"
          style={{
            left: annotation.x,
            top: annotation.y,
            transform: `rotate(${annotation.rotate}deg)`,
            color: theme === 'dark' ? 'rgba(148, 163, 184, 0.3)' : 'rgb(157, 160, 165)',
            fontWeight: 'bold',
          }}
        >
          {annotation.multiline ? (
            <div>
              <div style={{ fontSize: '0.88rem' }}>{annotation.text}</div>
              <div style={{ fontSize: '0.75rem' }}>{annotation.subtitle}</div>
            </div>
          ) : (
            <span style={{ fontSize: '0.88rem' }}>{annotation.text}</span>
          )}
        </div>
      ))}
    </div>
  );
}