#!/bin/bash

# --- Create Directories ---
echo "Creating directories..."
mkdir -p src/components
mkdir -p src/styles
echo "Directories created."
echo ""

# --- Create src/styles/globals.css ---
echo "Creating src/styles/globals.css..."
cat << EOF > src/styles/globals.css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Font definitions - Assuming font files are placed in public/fonts or similar */
/* You might need to adjust the path based on your project structure */
@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  /* Adjust path if needed, e.g., url('/fonts/inter-latin.woff2') */
  src: url(/_next/static/media/a34f9d1faa5f3315-s.p.woff2) format('woff2');
  /* Add other unicode-range font faces from b3cbcd051438d1d5.css if required */
  unicode-range: U+00??, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
  /* Apply base font */
  font-family: Inter, sans-serif; /* Example fallback */
  @apply bg-black text-white; /* Apply base background and text color */
}

/* Add other global styles if any */

/* Add the font class name from b3cbcd051438d1d5.css */
.__className_d65c78 {
    font-family: Inter, sans-serif; /* Ensure this matches your font setup */
    font-style: normal;
}

/* Custom gradient text utility (optional, but useful for the hero) */
@layer utilities {
  .text-gradient-white-purple {
    background: linear-gradient(180deg, #fff 0%, #fff 25%, rgba(167, 139, 250, 1) 90%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}


/* Add custom cursor styles if you implement them */
/*
.custom-cursor { cursor: default; }
.custom-cursor-pointer, .custom-cursor-pointer:hover, [role=button], [role=button]:hover, a, a:hover, button, button:hover { cursor: pointer; }
*/
EOF
echo "src/styles/globals.css created."
echo ""

# --- Create src/components/Navbar.tsx ---
echo "Creating src/components/Navbar.tsx..."
cat << EOF > src/components/Navbar.tsx
import React, { useState } from 'react'; // Added useState for mobile menu

// Replace with your actual Menu and Close icons (e.g., from lucide-react)
const MenuIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a className="flex items-center" href="/">
              {/* !!! IMPORTANT: Update this path to your actual logo file !!! */}
              <img
                alt="Hightom Logo"
                className="h-8"
                src="/images/logo.svg" // Example path, replace with your actual logo path
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x32/000000/FFFFFF?text=Logo')} // Basic fallback
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/">
                <span className="text-white/90 hover:text-white transition-colors relative group cursor-pointer">
                  Início
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a href="/quem-somos">
                <span className="text-white/90 hover:text-white transition-colors relative group cursor-pointer">
                  Quem somos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              {/* Add href for Contact if it's a page */}
              <a href="/contato" className="text-white/90 hover:text-white transition-colors relative group cursor-pointer">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              {/* Add href or onClick for the button */}
              <button className="bg-[#5B2FB8] rounded-lg text-white text-base font-normal transition-all duration-300 hover:bg-[#8B5FE0] focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] border-none px-8 !w-auto h-[48px]" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 0px inset' }}>
                Saber mais
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-black/80 backdrop-blur-md border-b border-purple-500/20 pb-3" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white/90 hover:bg-purple-700/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Início</a>
            <a href="/quem-somos" className="text-white/90 hover:bg-purple-700/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Quem somos</a>
            <a href="/contato" className="text-white/90 hover:bg-purple-700/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</a>
            <button className="mt-4 w-full bg-[#5B2FB8] rounded-lg text-white text-base font-normal transition-all duration-300 hover:bg-[#8B5FE0] focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] border-none py-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 0px inset' }}>
              Saber mais
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
EOF
echo "src/components/Navbar.tsx created."
echo ""

# --- Create src/components/ValueCard.tsx ---
echo "Creating src/components/ValueCard.tsx..."
cat << EOF > src/components/ValueCard.tsx
import React from 'react';

interface ValueCardProps {
  // If you have specific icons, you can pass them as props
  // icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    // Added basic animation on hover for subtle effect
    <div className="bg-purple-900/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transition-all duration-300 hover:bg-purple-900/20 hover:border-purple-500/40">
      {/* Example Icon Structure (if needed) */}
      {/*
      <div className="flex items-center gap-3 mb-4">
         <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400">
            {icon} // Render the icon prop here
         </div>
      </div>
      */}
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default ValueCard;
EOF
echo "src/components/ValueCard.tsx created."
echo ""

# --- Create src/components/AboutSection.tsx ---
echo "Creating src/components/AboutSection.tsx..."
cat << EOF > src/components/AboutSection.tsx
import React from 'react';
import ValueCard from './ValueCard';

// Placeholder Icons (replace with actual SVGs/components e.g. from lucide-react)
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-6 h-6 text-purple-400">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-purple-400">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const AboutSection: React.FC = () => {
  // Note: The animations (opacity, transform) from the original HTML's style attribute
  // would ideally be handled with a library like Framer Motion or Intersection Observer API
  // for triggering animations on scroll. This basic version omits those for simplicity.

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradients are now part of BackgroundEffects component */}

      <div className="container mx-auto px-4 relative z-10"> {/* Added z-10 to ensure content is above background elements */}
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Quem Somos</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Conheça mais sobre a Hightom e nossa missão de transformar o mercado de pagamentos
            </p>
          </div>

          {/* History & Mission */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Nossa História */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                  <RocketIcon />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa História</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-white/80 leading-relaxed">
                  Somos uma empresa dedicada a fornecer soluções de gateway de pagamento personalizadas, impulsionando o comércio eletrônico e simplificando transações financeiras online.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Na Hightom, acreditamos que os pagamentos online não precisam ser apenas transações rotineiras; podem ser experiências memoráveis que refletem a identidade e visão únicas de cada negócio.
                </p>
                 <p className="text-lg text-white/80 leading-relaxed">
                   Nossa equipe está comprometida em antecipar as tendências do mercado e incorporar as mais recentes inovações em nossas soluções. Ao escolher a Hightom, você está optando por uma parceria que cresce e evolui junto com as demandas dinâmicas do mundo digital.
                 </p>
              </div>
            </div>

            {/* Nossa Missão */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                  <TargetIcon />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa missão</h2>
              </div>
              <div className="space-y-4">
                 <p className="text-lg text-white/80 leading-relaxed">
                   É capacitar empresas a estabelecerem uma presença digital marcante, oferecendo soluções de pagamento que vão além da simplicidade funcional.
                 </p>
                 <p className="text-lg text-white/80 leading-relaxed">
                   Buscamos constantemente desenvolver gateways de pagamento que não apenas atendam às necessidades técnicas, mas também acrescentem valor à marca, proporcionando uma jornada de compra fluida e memorável.
                 </p>
                 <p className="text-lg text-white/80 leading-relaxed">
                    Nosso compromisso é com a inovação contínua, segurança de ponta e uma experiência de usuário excepcional que ajuda nossos clientes a crescerem e prosperarem no competitivo mercado digital.
                 </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ValueCard
                // icon={<InnovationIcon />} // Pass specific icons if created
                title="Inovação"
                description="Buscamos constantemente novas tecnologias e abordagens para oferecer soluções de pagamento de ponta."
              />
              <ValueCard
                // icon={<SecurityIcon />}
                title="Segurança"
                description="Protegemos cada transação com os mais altos padrões de segurança do mercado."
              />
              <ValueCard
                // icon={<TransparencyIcon />}
                title="Transparência"
                description="Mantemos uma comunicação clara e honesta com nossos clientes e parceiros."
              />
            </div>
          </div>
        </div>
      </div>

       {/* Decorative elements moved to BackgroundEffects or kept here if section-specific */}
       {/* <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}
       {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div> */}

    </section>
  );
};

export default AboutSection;
EOF
echo "src/components/AboutSection.tsx created."
echo ""

# --- Create src/components/HeroSection.tsx --- << NEW COMPONENT
echo "Creating src/components/HeroSection.tsx..."
cat << EOF > src/components/HeroSection.tsx
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
EOF
echo "src/components/HeroSection.tsx created."
echo ""


# --- Create src/components/Footer.tsx ---
echo "Creating src/components/Footer.tsx..."
cat << EOF > src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-purple-500/20 relative z-10"> {/* Added z-10 */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-white/60">
          © {currentYear} Hightom. Todos os direitos reservados.
        </p>
        {/* You could add social links or other footer content here */}
      </div>
    </footer>
  );
};

export default Footer;
EOF
echo "src/components/Footer.tsx created."
echo ""

# --- Create src/components/BackgroundEffects.tsx ---
echo "Creating src/components/BackgroundEffects.tsx..."
cat << EOF > src/components/BackgroundEffects.tsx
import React, { useState, useEffect } from 'react';

const BackgroundEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* Mouse move gradient effect */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300" // z-0 to be behind content
        style={{
          background: \`radial-gradient(600px at \${mousePosition.x}px \${mousePosition.y}px, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.1) 40%, rgba(88, 28, 135, 0.05) 60%, transparent 80%)\`,
          opacity: 1, // Opacity can be adjusted
        }}
      />

      {/* Static background elements from original main/body */}
      {/* These create the base dark theme with purple hints */}
      {/* Placed with negative z-index to be behind everything */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-transparent pointer-events-none"></div>

      {/* Specific section background elements (can be moved to sections if preferred) */}
       {/* Placed with negative z-index */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none -z-10"></div>
       {/* This gradient might need adjustment based on where it should appear relative to footer/sections */}
       <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none -z-10"></div>

    </>
  );
};

export default BackgroundEffects;
EOF
echo "src/components/BackgroundEffects.tsx created."
echo ""


# --- Create src/App.tsx ---
echo "Creating src/App.tsx..."
cat << EOF > src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Import HeroSection
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import './styles/globals.css'; // Import global styles

const App: React.FC = () => {
  return (
    // Apply the font class from globals.css to the root element
    // Add custom cursor class if implemented: className="__className_d65c78 custom-cursor"
    <div className="__className_d65c78">
        <BackgroundEffects />
        {/* Use relative positioning on main container to establish stacking context */}
        <div className="relative z-10"> {/* Ensure content is above background effects */}
            <Navbar />
            {/* min-h-screen ensures the main content area takes at least the full screen height */}
            <main className="min-h-screen bg-transparent text-white"> {/* Background is handled by BackgroundEffects */}
                {/* Page Sections */}
                <HeroSection /> {/* Add the Hero Section */}
                <AboutSection />
                {/* Add other page sections/components here */}
            </main>
            <Footer />
        </div>
    </div>
  );
};

export default App;
EOF
echo "src/App.tsx created."
echo ""

# --- Make script executable ---
# chmod +x setup_components.sh # Uncomment this line if saving the script to a file

echo "--- Script finished ---"
echo "Remember to:"
echo "1. Place your logo image (e.g., logo.svg) in the correct path (e.g., public/images/) and update the path in Navbar.tsx."
echo "2. Place the hero image (Foto.JPEG-...) in the correct path and update the URL in HeroSection.tsx."
echo "3. Place font files if needed and update paths in globals.css."
echo "4. Install any necessary icon libraries (like lucide-react) if you replace the placeholder SVGs."
echo "5. Run your React development server (e.g., npm run dev or yarn dev)."

