import React from 'react';

const HeroSection: React.FC = () => {
  // Note: The animations (opacity, transform) from the original HTML's style attribute
  // would ideally be handled with a library like Framer Motion or Intersection Observer API
  // for triggering animations on scroll. This basic version omits those for simplicity.

  return (
    <section id="home" className="relative pt-32 pb-40 overflow-hidden"> {/* Added overflow-hidden */}
      {/* Container for content */}
      <div className="container mx-auto px-4 relative z-10"> {/* Added z-10 */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto"> {/* Removed mb-20, adjust spacing as needed */}

          {/* Subheading */}
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            Solução White Label Exclusiva
          </p>

          {/* Main Heading with Gradient Text */}
          {/* Using custom utility class 'text-gradient-white-purple' defined in globals.css */}
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6 text-gradient-white-purple leading-tight md:leading-tight"> {/* Adjusted leading */}
            Transforme sua visão em<br />
            <span className="inline-block py-1 md:py-2">realidade digital</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl">
            A Hightom oferece uma plataforma sob medida, equipada com tecnologia de última geração e autonomia total para gerenciar suas operações financeiras.
          </p>

          {/* Call to Action Button */}
          <div>
            <button
              className="w-[280px] h-[48px] bg-[#5B2FB8] rounded-lg text-white text-base font-normal transition-all duration-300 hover:bg-[#8B5FE0] focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] border-none"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 0px inset' }}
            >
              Falar com um especialista
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-16 w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-black/40 backdrop-blur-sm shadow-xl shadow-purple-500/10"> {/* Added shadow */}
              {/* Optional inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>

              {/* Image - IMPORTANT: Replace src with your actual image path */}
              <img
                alt="Dashboard Interface"
                width="1920" // Provide original width
                height="1080" // Provide original height
                decoding="async"
                loading="lazy" // Added lazy loading
                className="w-full h-auto block" // Ensure image behaves correctly
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto.JPEG-VaMPh3xEbootvvdtPF7SjXWkRkjTf6.jpeg" // Replace with your image URL/path
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/1920x1080/000000/555555?text=Dashboard+Preview')} // Placeholder
                style={{ color: 'transparent' }} // Keep style from original if needed
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background elements like gradients/blurs should be handled by BackgroundEffects or globally */}
    </section>
  );
};

export default HeroSection;
