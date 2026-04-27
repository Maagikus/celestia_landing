import { SpaceShipsBackground } from "./space-ships-background";
import { useTheme } from "../contexts/theme-context";
import { useState } from "react";

export function HeroSection() {
  const { getNeomorphicShadow } = useTheme();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-visible px-4 md:px-12 lg:px-16 pt-24 pb-24"
    >
      <SpaceShipsBackground />
      
      {/* Background Text - Moved to top */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden px-4 md:px-12 lg:px-16" style={{ paddingTop: '120px', zIndex: -2000 }}>
        <div className="max-w-7xl mx-auto w-full flex justify-center">
          <h2 
            className="uppercase transition-all duration-500 ease-in-out select-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(4rem, 20vw, 28rem)',
              fontWeight: 900,
              color: 'var(--bg-text-color)',
              letterSpacing: '0.2em',
              textShadow: `
                var(--text-shadow-light),
                var(--text-shadow-dark)
              `,
            }}
          >
            CELY AI
          </h2>
        </div>
      </div>

      {/* Content in bottom half */}
      <div className="max-w-7xl mx-auto text-center relative z-10 px-4 flex items-end min-h-screen" style={{ paddingBottom: 'clamp(90px, 20vh, 210px)' }}>
        <div className="w-full">
          <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8" style={{ marginTop: '205px' }}>
            <p className="leading-relaxed text-sm sm:text-base md:text-lg transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8] font-medium">
              Welcome to{" "}
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                Celestia (Cely)
              </span>
              , your perfect AI assistant, specially crafted for
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                {" "}
                StarAtlas
              </span>{" "}
              fans. Whether you're exploring
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                {" "}
                StarAtlas (SMO)
              </span>
              , executing
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                {" "}
                in-game
              </span>{" "}
              operations, or seeking information about
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                {" "}
                StarAtlas (SMO)
              </span>{" "}
              and its gameplay,
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                {" "}
                Cely
              </span>{" "}
              is here to assist you every step of the way. Harness
              the full power of AI in the StarAtlas universe with
              <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
                {" "}
                Celestia (Cely)
              </span>
              .
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 px-2 mt-8 sm:mt-10">
              <button
                onMouseEnter={() => setHoveredButton("start")}
                onMouseLeave={() => setHoveredButton(null)}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto tracking-wider uppercase text-sm sm:text-base text-[#4a5568] dark:text-[#94a3b8] bg-[#e0e5ec] dark:bg-[#1a1f2e]"
                style={{
                  boxShadow:
                    hoveredButton === "start"
                      ? getNeomorphicShadow("pressed")
                      : getNeomorphicShadow("convex"),
                }}
              >
                Get Started
              </button>
              <button
                onMouseEnter={() => setHoveredButton("explore")}
                onMouseLeave={() => setHoveredButton(null)}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto tracking-wider uppercase text-sm sm:text-base text-[#4a5568] dark:text-[#94a3b8] bg-[#e0e5ec] dark:bg-[#1a1f2e]"
                style={{
                  boxShadow:
                    hoveredButton === "explore"
                      ? getNeomorphicShadow("pressed")
                      : getNeomorphicShadow("convex"),
                }}
              >
                Explore Cely
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}