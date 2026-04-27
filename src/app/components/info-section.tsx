import { useTheme } from "../contexts/theme-context";
import { useState } from "react";

export function InfoSection() {
  const { getNeomorphicShadow } = useTheme();
  const [hoveredButton, setHoveredButton] = useState<
    string | null
  >(null);

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 md:px-12 lg:px-16 -z-1">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8] px-2">
          Harness the full power of AI in the StarAtlas universe
          with{" "}
          <span className="font-semibold transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">
            Celestia (Cely)
          </span>
          .
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 px-2">
          <button
            onMouseEnter={() => setHoveredButton("start")}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto tracking-wider uppercase text-sm sm:text-base text-[#4a5568] dark:text-[#94a3b8]"
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
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto tracking-wider uppercase text-sm sm:text-base text-[#4a5568] dark:text-[#94a3b8]"
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
    </section>
  );
}