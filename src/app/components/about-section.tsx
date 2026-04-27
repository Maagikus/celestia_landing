export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* About heading with gradient */}
        <div className="relative mb-20 md:mb-32">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-orange-500 rounded-full blur-[120px] md:blur-[180px] opacity-25"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl mb-8 md:mb-12">About</h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-neutral-400 text-sm md:text-base">
              <p>
                We are a creative studio specialized in design & development. 
                Creating unique digital experiences that connect with your audience 
                and drive real results.
              </p>
              <p>
                A team of designers who fully work over any effective 
                issues of visual strategies, and support components for 
                digital products to assure integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="relative mt-32 md:mt-48">
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-orange-600 rounded-full blur-[100px] md:blur-[150px] opacity-20"></div>
          
          <div className="relative">
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl mb-6 max-w-xl">
              Let's mix our skills with your ideas and create something beautiful
            </h3>
            <button className="mt-8 px-8 py-3 md:px-10 md:py-4 border-2 border-neutral-700 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
