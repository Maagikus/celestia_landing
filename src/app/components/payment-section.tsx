import { useTheme } from '../contexts/theme-context';
import { useState } from 'react';

export function PaymentSection() {
  const { getNeomorphicShadow } = useTheme();
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  const plans = [
    {
      type: "Select",
      price: "150",
      currency: "$",
      period: "/month",
      features: [
        "Limit usage (SMO)",
        "Cloud price/month"
      ],
      buttonText: "Select plan",
      popular: false
    },
    {
      type: "Pro",
      price: "1000",
      currency: "$",
      period: "/month",
      features: [
        "Unlimited usage (SMO)",
        "Priority support",
        "Advanced features"
      ],
      buttonText: "Select plan",
      popular: true
    },
    {
      type: "Custom",
      price: "2000",
      currency: "$",
      period: "/month",
      features: [
        "Enterprise solutions",
        "Dedicated support",
        "Custom integrations"
      ],
      buttonText: "Contact us",
      popular: false
    }
  ];

  return (
    <section id="price" className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 tracking-widest uppercase transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0] px-2">
          Get Started with <span className="transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0]">Celestia</span> Now
        </h2>
        <p className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-sm sm:text-base md:text-lg tracking-wider uppercase transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8] px-2">
          Payment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 flex flex-col bg-[#e0e5ec] dark:bg-[#1a1f2e] ${
                plan.popular ? 'md:scale-105' : ''
              }`}
              style={{ 
                boxShadow: getNeomorphicShadow('convex')
              }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 text-xs rounded-full transition-colors duration-500 bg-[#e0e5ec] dark:bg-[#1a1f2e] text-[#2d3748] dark:text-[#94a3b8]" 
                  style={{ 
                    boxShadow: getNeomorphicShadow('convex')
                  }}
                >
                  Popular
                </div>
              )}
              
              <div className="text-center mb-5 sm:mb-6">
                <h3 className="mb-3 sm:mb-4 text-sm sm:text-base tracking-wider uppercase transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8]">
                  {plan.type}
                </h3>
                <div className="flex items-start justify-center mb-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0]">
                    {plan.price}
                  </span>
                  <span className="text-xl sm:text-2xl ml-1 mt-0.5 sm:mt-1 transition-colors duration-500 text-[#2d3748] dark:text-[#e2e8f0]">
                    {plan.currency}
                  </span>
                </div>
                <p className="text-xs sm:text-sm tracking-wide transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8]">
                  {plan.period}
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-500 bg-[#4a5568] dark:bg-[#ff8c42] flex-shrink-0"></div>
                    <span className="transition-colors duration-500 text-[#4a5568] dark:text-[#94a3b8] text-xs sm:text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                className="w-full py-2.5 sm:py-3 rounded-full transition-all duration-300 tracking-wider uppercase text-xs sm:text-sm text-[#4a5568] dark:text-[#94a3b8] border-2 border-[#2d3748] dark:border-[#64748b] hover:bg-[#1a1f2e] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1f2e]"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}