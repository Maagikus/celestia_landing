export function ServicesSection() {
  const services = {
    development: [
      'Web',
      'iOS',
      'Back-end',
      'Web and micro development',
      'Interaction software'
    ],
    design: [
      'App',
      'Website',
      'Motion design'
    ]
  };

  return (
    <section id="services" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16">Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {/* Development */}
          <div>
            <h3 className="text-white text-xl md:text-2xl mb-6">Development</h3>
            <ul className="space-y-3">
              {services.development.map((item, index) => (
                <li key={index} className="text-neutral-400 text-sm md:text-base hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Design */}
          <div>
            <h3 className="text-white text-xl md:text-2xl mb-6">Design</h3>
            <ul className="space-y-3">
              {services.design.map((item, index) => (
                <li key={index} className="text-neutral-400 text-sm md:text-base hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional info card */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="p-6 md:p-8 bg-neutral-800/50 rounded-2xl border border-neutral-800 backdrop-blur-sm">
              <h4 className="text-white mb-3">Custom Solutions</h4>
              <p className="text-neutral-400 text-sm">
                Need something specific? We create tailored solutions for your unique challenges.
              </p>
              <button className="mt-6 text-orange-500 text-sm hover:text-orange-400 transition-colors">
                Learn more →
              </button>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">
          <ServiceCard 
            title="Brand Identity"
            description="Creating memorable brand experiences that resonate with your audience"
          />
          <ServiceCard 
            title="UI/UX Design"
            description="Designing intuitive interfaces that users love to interact with"
          />
          <ServiceCard 
            title="Development"
            description="Building robust and scalable digital products with cutting-edge technology"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group p-6 md:p-8 bg-neutral-800/30 rounded-2xl border border-neutral-800 hover:border-orange-500/50 transition-all cursor-pointer">
      <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
        <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
      </div>
      <h4 className="text-white mb-3">{title}</h4>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  );
}
