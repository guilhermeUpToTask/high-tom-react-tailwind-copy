import React from 'react';
// Import animation library if needed, e.g., import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  // Example animation variants (requires framer-motion)
  // const fadeIn = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  // };

  return (
    <section id="home" className="relative pt-32 pb-40 overflow-hidden"> {/* Added overflow-hidden */}
      {/* Add Background Elements Component here if separated */}
      {/* <BackgroundElements /> */}

      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          {/* Apply animation using motion.p, motion.h1 etc. if using framer-motion */}
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            Solução White Label Exclusiva
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6 bg-[linear-gradient(180deg,_#fff_0%,_#fff_25%,_rgba(167,_139,_250,_1)_90%)] bg-clip-text text-transparent leading-relaxed">
            Transforme sua visão em<br />
            <span className="inline-block py-1 md:py-2">realidade digital</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl">
            A Hightom oferece uma plataforma sob medida, equipada com tecnologia de última geração e autonomia total para gerenciar suas operações financeiras.
          </p>
          <div>
            <button
              className="w-[280px] h-[48px] bg-[#5B2FB8] rounded-lg text-white text-base font-normal transition-all duration-300 hover:bg-[#8B5FE0] focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] border-none"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 0px inset' }}
            >
              Falar com um especialista
            </button>
          </div>

          {/* Dashboard Image */}
          <div className="mt-16 w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-black/40 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"></div>
              {/* Adjust image path */}
              <img
                alt="Dashboard Interface"
                width="1920"
                height="1080"
                decoding="async"
                className="w-full h-auto"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto.JPEG-VaMPh3xEbootvvdtPF7SjXWkRkjTf6.jpeg" // Example path
                // src="./assets/images/dashboard.jpeg"
                style={{ color: 'transparent' }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Optional: Define BackgroundElements component separately
// const BackgroundElements: React.FC = () => (
//   <div className="absolute inset-0 z-0">
//     {/* Add all the complex background divs/canvas elements here */}
//     <div className="pointer-events-none fixed inset-0 z-30 transition duration-300" style={{background: 'radial-gradient(600px at 758px 300px, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.1) 40%, rgba(88, 28, 135, 0.05) 60%, transparent 80%)', opacity: 1}}></div>
//     {/* ... other background elements ... */}
//   </div>
// );

