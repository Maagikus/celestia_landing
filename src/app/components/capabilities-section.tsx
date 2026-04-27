import { useTheme } from '../contexts/theme-context';

export function CapabilitiesSection() {
  const { getNeomorphicShadow } = useTheme();
  
  const capabilities = [
    {
      number: 1,
      title: "Answering Questions",
      description: (
        <>
          <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">Celestia (Cely)</span> can answer any questions related to <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">StarAtlas</span>.
          From lore to game details, in <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">StarAtlas (SMO)</span>, it is your go-to source for information.
        </>
      )
    },
    {
      number: 2,
      title: "Executing In-Game Functions",
      description: (
        <>
          With integration into the game, <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">Celestia (Cely)</span> can perform various functions directly in <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">StarAtlas (SMO)</span>, such as managing resources, upgrading ships, and executing missions, all through simple text commands.
        </>
      )
    },
    {
      number: 3,
      title: "Strategy Development",
      description: (
        <>
          <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">Celestia (Cely)</span> can provide you with document effective strategies for navigating the complex and dynamic world of <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">StarAtlas</span>, from resource management to combat tactics and efficient starship resource accounts.
        </>
      )
    },
    {
      number: 4,
      title: "Monitoring and Analysis",
      description: (
        <>
          Your AI assistant can offer feedback based on your current situation and provide you with detailed analyses to help you make well-informed and well-calculated decisions.
        </>
      )
    },
    {
      number: 5,
      title: "Personalised Recommendations",
      description: (
        <>
          <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">Celestia (Cely)</span> tailors your responses and provides you with personal recommendations based on your play style and preferences, from ship selection to combat tactics, everything is tailored to you.
        </>
      )
    },
    {
      number: 6,
      title: "Automation of Routine Tasks",
      description: (
        <>
          Leave routine tasks to <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#94a3b8]">Celestia (Cely)</span> and focus on what matters. Automation allows you to optimise the gameplay and save your time.
        </>
      )
    },
    {
      number: 7,
      title: "24/7 Accessibility",
      description: (
        <>
          <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0]">Celestia (Cely)</span> is always available and ready to assist you in real-time. Whenever you require information, text assistant is always there in real-time for you and accessible whenever you need it.
        </>
      )
    }
  ];

  return (
    <section id="capabilities" className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 tracking-widest uppercase transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0] px-2">
          Capabilities of Celestia (Cely)
        </h2>

        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          {capabilities.map((capability) => (
            <div key={capability.number} className="relative group">
              <div 
                className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-500 bg-[#e0e5ec] dark:bg-[#1a1f2e]"
                style={{ 
                  boxShadow: getNeomorphicShadow('convex')
                }}
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8] bg-[#e0e5ec] dark:bg-[#1a1f2e] border border-black/40 dark:border-white/20" 
                  >
                    {capability.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 tracking-tight transition-colors duration-500 text-[#2d3748] dark:text-[#cbd5e1]">
                    {capability.title}
                  </h3>
                  <p className="leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8]">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}