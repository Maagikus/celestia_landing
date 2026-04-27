import { useTheme } from '../contexts/theme-context';

export function BenefitsSection() {
  const { getNeomorphicShadow } = useTheme();
  
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-widest uppercase transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0] px-2">
          Benefits of Using Celestia (Cely)
        </h2>

        <div 
          className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 bg-[#e0e5ec] dark:bg-[#1a1f2e]" 
          style={{ 
            boxShadow: getNeomorphicShadow('convex')
          }}
        >
          <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-center transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8]">
            Significantly enhance your performance AI assistant in the world of StarAtlas, providing real-time support and assistance, reliability and accuracy. As well as constant monitoring allows Cely to keep you up-to-date with the game's situation. With the opportunity to increase engagement and immersion, you achieve maximum results with minimal effort. The intuitive interface makes interaction with Cely as easy as possible. Interface makes interaction with Cely you execute maximum your efficiency and comfort in StarAtlas (SMO).
          </p>
        </div>
      </div>
    </section>
  );
}