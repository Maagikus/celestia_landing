export function CelestiaLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Орбитальные пути для спутников */}
      <circle
        cx="50"
        cy="50"
        r="30"
        className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
        strokeDasharray="2 3"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
        strokeDasharray="2 3"
      />
      
      {/* Центральная планета */}
      <circle
        cx="50"
        cy="50"
        r="18"
        className="stroke-[#2d3748] dark:stroke-[#ff8c42] transition-colors duration-500"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Детали планеты */}
      <circle
        cx="50"
        cy="50"
        r="14"
        className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <circle
        cx="50"
        cy="50"
        r="10"
        className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
      
      {/* Спутники на орбитах */}
      <g>
        {/* Спутник 1 - правый */}
        <circle cx="80" cy="50" r="4" className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500" strokeWidth="1" fill="none" />
        <circle cx="80" cy="50" r="2" className="fill-[#2d3748] dark:fill-[#ff8c42] transition-colors duration-500" opacity="0.3" />
        
        {/* Спутник 2 - верхний */}
        <circle cx="50" cy="20" r="3.5" className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500" strokeWidth="1" fill="none" />
        <circle cx="50" cy="20" r="1.5" className="fill-[#2d3748] dark:fill-[#ff8c42] transition-colors duration-500" opacity="0.3" />
        
        {/* Спутник 3 - левый */}
        <circle cx="20" cy="50" r="3" className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500" strokeWidth="1" fill="none" />
        <circle cx="20" cy="50" r="1.2" className="fill-[#2d3748] dark:fill-[#ff8c42] transition-colors duration-500" opacity="0.3" />
        
        {/* Спутник 4 - нижний правый */}
        <circle cx="71" cy="71" r="2.5" className="stroke-[#2d3748] dark:stroke-[#cbd5e1] transition-colors duration-500" strokeWidth="0.8" fill="none" />
        <circle cx="71" cy="71" r="1" className="fill-[#2d3748] dark:fill-[#ff8c42] transition-colors duration-500" opacity="0.3" />
      </g>
    </svg>
  );
}