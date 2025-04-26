
import MySplineScene from './MySplineScene';

const ContactSection = () => {

  return (
    <section id="contact" className="relative min-h-[600px] flex items-center overflow-hidden">

      {/* Main background layer containing the Spline canvas and some overlays */}
      <div className="absolute inset-0 z-0">
        {/* The Spline component replaces the manual canvas tag for the Spline scene */}
        {/* It will create and manage its own canvas element with the ID 'splineContact' if set, or a default */}
            <MySplineScene/>

        {/* Overlays layered above the Spline canvas within this background group */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-black z-10"></div> {/* This z-index is relative to its parent .absolute inset-0 div */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-5"></div> {/* This z-index is relative to its parent .absolute inset-0 div */}
      </div>

      {/* Second background layer with complex gradients, blurs, and dots */}
      {/* This layer is also z-0 relative to the section, so its stacking relative to the *first* background layer depends on their order and specific z-indices */}
      {/* Based on the HTML, this div appears *after* the first background div, so it might render on top of it unless z-indices are adjusted */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black/80 z-0 opacity-50">
        {/* Blurred gradient circles */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px]"
          style={{ transform: 'scale(1.17912)' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px]"
          style={{ transform: 'scale(1.0727)' }}
        ></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>


      {/* Foreground content layer */}
      {/* This z-index of z-20 ensures it sits on top of all background layers */}
      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ opacity: 1, transform: 'none' }}>
            Transforme sua visão em realidade,<br />enquanto cuidamos da tecnologia.
          </h2>
          <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto" style={{ opacity: 1, transform: 'none' }}>
            Foque no crescimento do seu negócio enquanto nossa equipe gerencia toda a complexidade tecnológica, garantindo uma operação eficiente e segura.
          </p>
          <div style={{ opacity: 1, transform: 'none' }}>
            <button
              className="w-[280px] h-[48px] bg-[#5B2FB8] rounded-lg text-white text-base font-normal transition-all duration-300 hover:bg-[#8B5FE0] focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] border-none px-8"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 0px inset' }}
              // Add onClick handler here if needed
            >
              Falar com um especialista
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;