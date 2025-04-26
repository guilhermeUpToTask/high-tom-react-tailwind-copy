#!/bin/bash

# Define the directory where components will be created
COMPONENT_DIR="src/components"

# Create the directory if it doesn't exist
mkdir -p "$COMPONENT_DIR"
echo "Created directory (if needed): $COMPONENT_DIR"

# --- Create Navbar.tsx ---
cat << 'EOF' > "${COMPONENT_DIR}/Navbar.tsx"
import React, { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean; // Optional prop to highlight active link
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <a href={href}>
    <span className={`text-white/90 hover:text-white transition-colors relative group cursor-pointer ${isActive ? 'text-white' : ''}`}>
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 group-hover:w-full transition-all ${isActive ? 'w-full' : 'w-0'}`}></span>
    </span>
  </a>
);

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Basic logic to hide/show navbar on scroll (optional, based on original JS behavior)
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide navbar when scrolling down, show when scrolling up
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        // Remember current scroll position for the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]); // Only re-run the effect if lastScrollY changes

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/20 transition-transform duration-300 ${isVisible ? 'transform-none' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a className="flex items-center" href="/"> {/* Adjust href as needed */}
              {/* Adjust image path based on your project structure */}
              <img alt="Hightom Logo" className="h-8" src="/path/to/your/logo.svg" />
              {/* Example: <img alt="Hightom Logo" className="h-8" src="./assets/images/logo.svg" /> */}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Example: Mark 'Início' as active. Adjust logic based on routing */}
              <NavLink href="/" isActive={true}>Início</NavLink>
              <NavLink href="/quem-somos">Quem somos</NavLink>
              {/* Adjust contact link as needed */}
              <NavLink href="#contact">Contato</NavLink>
              <button
                className="w-auto h-[48px] bg-[#5B2FB8] rounded-lg text-white text-base font-normal transition-all duration-300 hover:bg-[#8B5FE0] focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] border-none px-8"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px -2px 0px inset' }}
              >
                Saber mais
              </button>
            </div>
          </div>

          {/* Mobile Menu Button (Add state and click handler for functionality) */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white">
              {/* Menu Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
              <span className="sr-only">Toggle menu</span>
            </button>
            {/* Mobile Menu Panel would go here, controlled by state */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
EOF
echo "Created ${COMPONENT_DIR}/Navbar.tsx"

# --- Create HeroSection.tsx ---
cat << 'EOF' > "${COMPONENT_DIR}/HeroSection.tsx"
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
                src="/path/to/your/dashboard-image.jpg" // Example path
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

EOF
echo "Created ${COMPONENT_DIR}/HeroSection.tsx"

# --- Create FeaturesSection.tsx ---
cat << 'EOF' > "${COMPONENT_DIR}/FeaturesSection.tsx"
import React, { useState, useEffect, useRef } from 'react';
// Import animation library if needed, e.g., import { motion, useInView } from 'framer-motion';
// Import icon components or SVGs
// Example: import { TargetIcon, SmartphoneIcon, LibraryIcon } from './Icons';

// Placeholder Icon Components (replace with actual SVGs or library)
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"></path><path d="M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>;
const SmartphoneIcon = () => <svg className="w-8 h-8 text-black relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>;
const LibraryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-black relative z-10"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>;


interface FeatureBlockProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText?: string;
    children?: React.ReactNode; // For custom content like the theme switcher or canvas
    reverseLayout?: boolean; // To alternate layout
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
    icon,
    title,
    description,
    buttonText = "Saber mais",
    children,
    reverseLayout = false,
}) => {
    // Ref for scroll animations
    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, amount: 0.3 }); // Example with framer-motion

    // Animation variants (example)
    // const variants = {
    //   hidden: { opacity: 0, x: reverseLayout ? -20 : 20 },
    //   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    // };

    return (
        // Use motion.div for animations
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 items-center ${reverseLayout ? 'lg:grid-flow-row-dense' : ''}`}
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            // variants={variants}
        >
             <div className={`relative ${reverseLayout ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                    <div className="space-y-6">
                        <div className="w-16 h-16 rounded-full bg-[#C1F664] flex items-center justify-center relative group mb-8">
                            <div className="absolute inset-0 rounded-full bg-[#C1F664] blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative z-10">{icon}</div>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 whitespace-pre-line">{title}</h3>
                        <p className="text-lg text-[#9b9b9b] leading-relaxed mb-8">{description}</p>
                         <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 py-2 bg-black hover:bg-black/80 text-white border border-[#6938D3] transition-colors rounded-lg group px-6 mt-4">
                            {buttonText}
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </div>
             <div className={`relative ${reverseLayout ? 'lg:col-start-1' : ''}`}>
                {children}
            </div>
        </div>
    );
};


// Example Theme Switcher Component (Conceptual)
const ThemeSwitcher: React.FC = () => {
    const themes = [
        { name: 'Zinc', color: 'bg-zinc-400/20', activeColor: 'bg-zinc-500', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zinc-2OM8pFgMjEXYYffbAsopNhbokpBJ80.png' },
        { name: 'Red', color: 'bg-red-500/20', activeColor: 'bg-red-500', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red-FRjXX6wXTPaPzxKws3PWZ11csiNTvU.png' },
        { name: 'Blue', color: 'bg-blue-500/20', activeColor: 'bg-blue-500', image: '/path/to/blue-theme.png' }, // Add path
        { name: 'Green', color: 'bg-green-500/20', activeColor: 'bg-green-500', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-kIfF2LmlXvfuGPDhgtIUucg6hLD5O3.png' },
        { name: 'Purple', color: 'bg-purple-500/20', activeColor: 'bg-purple-500', image: '/path/to/purple-theme.png' }, // Add path
        { name: 'Cyan', color: 'bg-cyan-500/20', activeColor: 'bg-cyan-500', image: '/path/to/cyan-theme.png' }, // Add path
        { name: 'Orange', color: 'bg-orange-500/20', activeColor: 'bg-orange-500', image: 'https://www.hightomdev.com/images/orange-theme-dark.png' },
        { name: 'Yellow', color: 'bg-yellow-500/20', activeColor: 'bg-yellow-500', image: '/path/to/yellow-theme-dark.png', default: true }, // Adjust path
        { name: 'Violet', color: 'bg-violet-500/20', activeColor: 'bg-violet-500', image: '/path/to/violet-theme.png' }, // Add path
    ];
    const defaultTheme = themes.find(t => t.default) || themes[0];
    const [activeTheme, setActiveTheme] = useState<string>(defaultTheme.name);
    const [currentImage, setCurrentImage] = useState<string>(defaultTheme.image);

    const handleThemeChange = (themeName: string) => {
        const selectedTheme = themes.find(t => t.name === themeName);
        if (selectedTheme) {
            setActiveTheme(selectedTheme.name);
            setCurrentImage(selectedTheme.image);
        }
    };

    return (
        <div className="relative">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-purple-500/20 bg-black">
                <div className="relative w-full h-full">
                    {/* Use a key to force image remount on change for transition */}
                    <div key={activeTheme} className="absolute inset-0 animate-fade-in"> {/* Simple fade animation */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20"></div>
                         <img
                            alt={`Dashboard Interface - ${activeTheme} Theme Dark`}
                            decoding="async"
                            className="object-fill bg-black absolute h-full w-full inset-0 text-transparent"
                            src={currentImage}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/1600x900/000000/ffffff?text=Image+Error'; }} // Basic fallback
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {themes.map((theme) => (
                    <button
                        key={theme.name}
                        onClick={() => handleThemeChange(theme.name)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTheme === theme.name ? `${theme.activeColor} w-4` : theme.color}`}
                        aria-label={`Switch to ${theme.name} theme`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

// Placeholder for 3D Canvas Component
const Canvas3DPlaceholder: React.FC = () => {
    // Add useEffect hook here to initialize and manage your 3D scene (e.g., using three.js)
    useEffect(() => {
        // three.js initialization code would go here
        console.log("Initialize 3D Canvas");
        // Remember to handle cleanup
        return () => {
            console.log("Cleanup 3D Canvas");
            // Dispose of three.js resources
        };
    }, []);

    return (
        <div className="relative h-[600px]">
            <div className="w-full h-full overflow-hidden bg-black/30 rounded-2xl">
                <div className="w-full h-full relative">
                    {/* The actual canvas element for three.js */}
                    <canvas id="canvas3d" className="w-full h-full block"></canvas>
                    {/* Optional overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent z-20"></div>
                </div>
                 {/* Removed duplicate overlay */}
            </div>
        </div>
    );
};


const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="mb-6">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground h-10 py-2 bg-[#14141F] border-none text-white/80 hover:bg-[#1a1a2f] transition-colors rounded-full px-6">
              Desperte seu potencial
            </button>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium mb-6">
            Horizontes Infinitos
          </h2>
          <p className="text-lg text-[#9b9b9b] leading-relaxed mb-16 max-w-2xl mx-auto">
            Desbrave novos mercados com nossa solução white label! Conecte-se com os melhores produtores, aproveite taxas imbatíveis e transforme sua visão em um negócio de sucesso. O futuro do seu empreendimento começa aqui!
          </p>
        </div>

        {/* Feature Block 1: Identity */}
        <FeatureBlock
          icon={<TargetIcon />}
          title="Sua Identidade, Seu Poder, Seu Sucesso"
          description="Dê vida à sua identidade: molde cada detalhe, escolha suas cores e crie uma experiência que reflita sua essência única!"
        >
          <ThemeSwitcher />
        </FeatureBlock>


        {/* Feature Block 2: Mobile App */}
         <div className="mt-32">
            <FeatureBlock
                icon={<SmartphoneIcon />}
                title="Aplicativo mobile"
                description="Em nosso ecossistema, oferecemos também um app mobile disponível para Android e iOS, onde os seus produtores recebem notificações e podem acompanhar suas vendas."
                reverseLayout={true} // Alternate layout
                >
                 <Canvas3DPlaceholder />
            </FeatureBlock>
        </div>


        {/* Feature Block 3: Members Area */}
        <div className="mt-32">
            <FeatureBlock
                icon={<LibraryIcon />}
                title="Área de Membros Exclusiva"
                description="No nosso ecossistema, você conta com uma área de membros intuitiva e segura, perfeita para centralizar e gerenciar seu conteúdo. Seja para cursos, mentorias ou materiais exclusivos, oferecemos uma experiência fluida e profissional para você."
                 >
                 <div className="relative">
                    {/* Apply perspective and rotation for the 3D effect */}
                    <div className="relative w-full aspect-[16/10] transform perspective-[2000px] rotate-x-[10deg] rotate-y-[-10deg] rotate-z-[-5deg] translate-z-[-50px] shadow-2xl">
                         <img
                             alt="MacBook Dashboard Interface - Área de Membros"
                            decoding="async"
                            className="object-contain absolute h-full w-full inset-0 text-transparent bg-transparent"
                            // Adjust path
                            src="/path/to/your/macbook-members-area.png"
                            // src="./assets/images/macbook-members-area.png"
                        />
                    </div>
                </div>
            </FeatureBlock>
        </div>

      </div>
       {/* Add global background elements if needed */}
    </section>
  );
};

export default FeaturesSection;
EOF
echo "Created ${COMPONENT_DIR}/FeaturesSection.tsx"

# --- Create EcosystemFeatures.tsx ---
cat << 'EOF' > "${COMPONENT_DIR}/EcosystemFeatures.tsx"
import React from 'react';
// Import animation library if needed, e.g., import { motion, useInView } from 'framer-motion';
// Import icon components or SVGs

// Placeholder icons - replace with actual SVGs or icon components
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-4 h-4 text-purple-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-purple-400"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>;
const WebhookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-webhook w-4 h-4 text-purple-400"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>;
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard w-4 h-4 text-purple-400"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>;
const SmartphoneIconSmall = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-4 h-4 text-purple-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4 text-purple-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const UsersRoundIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round w-4 h-4 text-purple-400"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>;
const ShoppingCartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-4 h-4 text-purple-400"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 w-4 h-4 text-purple-400"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>;


interface FeatureItemProps {
    icon: React.ReactNode;
    text: React.ReactNode; // Allows JSX for highlighting
    index: number; // For staggered animation delay
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text, index }) => {
    // Animation setup (example with framer-motion)
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, amount: 0.5 });
    // const variants = {
    //   hidden: { opacity: 0, y: 20 },
    //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } } // Staggered delay
    // };

    return (
        // Use motion.div for animations
        <div
            // ref={ref}
            className="relative"
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            // variants={variants}
        >
            <div className="relative flex items-center gap-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-full px-4 py-3 border border-purple-500/20 h-full"> {/* Added h-full */}
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center overflow-hidden">
                    {icon}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white/90">{text}</p>
                </div>
            </div>
        </div>
    );
};

const EcosystemFeatures: React.FC = () => {
    const features = [
        { icon: <GlobeIcon />, text: <>Checkout com <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">domínio dos usuários</span></> },
        { icon: <ZapIcon />, text: <>Recuperação de vendas com <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">IA</span></> },
        { icon: <WebhookIcon />, text: <>Webhooks</> }, // Removed empty span
        { icon: <DashboardIcon />, text: <>Dashboard <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">intuitiva</span></> },
        { icon: <SmartphoneIconSmall />, text: <>Aplicativo <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">mobile</span></> },
        { icon: <UsersIcon />, text: <>Area de <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">membros</span></> },
        { icon: <UsersRoundIcon />, text: <>Co-produção</> },
        { icon: <ShoppingCartIcon />, text: <>Marketplace</> },
        { icon: <ShareIcon />, text: <>Sistema de <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">indique e ganhe</span></> },
    ];

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-64 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-64 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 py-12 border border-purple-500/20 rounded-3xl bg-black/80 backdrop-blur-sm shadow-[0_0_50px_rgba(168,85,247,0.03)] relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-center mb-16 bg-gradient-to-b from-white via-white/70 to-white/50 bg-clip-text text-transparent">
                    Tudo que o Ecossistema Hightom Oferece
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} icon={feature.icon} text={feature.text} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EcosystemFeatures;
EOF
echo "Created ${COMPONENT_DIR}/EcosystemFeatures.tsx"

# --- Create FAQSection.tsx ---
cat << 'EOF' > "${COMPONENT_DIR}/FAQSection.tsx"
import React, { useState, useRef } from 'react';
// Import animation library if needed, e.g., import { motion, useInView } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  index: number; // For animation delay
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Animation setup
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });
  // const variants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.05 } }
  // };

  return (
    // Use motion.div for animations
    <div
      // ref={ref}
      data-state={isOpen ? 'open' : 'closed'}
      className="border-b border-purple-500/20 group bg-purple-900/10 backdrop-blur-sm rounded-lg px-6 transition-all duration-300 hover:bg-purple-900/20"
      // initial="hidden"
      // animate={isInView ? "visible" : "hidden"}
      // variants={variants}
    >
      <h3 className="flex">
        <button
          type="button"
          aria-expanded={isOpen}
          data-state={isOpen ? 'open' : 'closed'}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-1 items-center justify-between py-4 font-medium text-white group-hover:text-purple-400 transition-colors duration-300 data-[state=open]:text-purple-400 no-underline hover:no-underline w-full" // Added w-full
        >
          <span className="block py-4 text-left flex-1 pr-2">{title}</span> {/* Added flex-1 pr-2 */}
          {/* Chevron Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      {/* Content Area */}
      <div
        // Use a library like 'react-animate-height' for smooth height transition or CSS transitions
        className={`overflow-hidden text-sm text-white/70 transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`} // Example height transition
      >
         <div className="pt-0 pb-4">{children}</div> {/* Content wrapper with padding */}
      </div>
    </div>
  );
};


const FAQSection: React.FC = () => {
  const faqs = [
    { q: "Qual o prazo de implementação do gateway?", a: "O prazo de implementação pode variar, mas nosso objetivo é ter tudo pronto rapidamente. Entre em contato para uma estimativa precisa." },
    { q: "Quais formas de pagamento estão disponíveis?", a: "Oferecemos Pix, Boleto e Cartão de Crédito/Débito (nacional e internacional), integrados com os principais adquirentes do mercado." },
    { q: "Há custos mensais fixos?", a: "Nosso modelo principal é baseado em taxas por transação, sem mensalidades fixas obrigatórias. Planos personalizados podem ser discutidos." },
    { q: "Como funciona o white label?", a: "Permite que você personalize completamente a plataforma com sua marca, logotipo, cores e domínio, oferecendo uma experiência única aos seus clientes como se fosse sua própria tecnologia." },
    { q: "É necessário ter CNPJ?", a: "Sim, para operar um gateway de pagamentos e processar transações financeiras no Brasil, é legalmente necessário possuir um CNPJ ativo." },
    { q: "Preciso de conhecimento técnico?", a: "Não necessariamente. Oferecemos um painel intuitivo e integrações 'No Code'. Para desenvolvedores, fornecemos uma API robusta e bem documentada." },
    { q: "Posso personalizar o domínio?", a: "Sim, você pode configurar seu próprio domínio para o checkout e outras interfaces voltadas ao cliente, reforçando sua marca." },
    { q: "Como faço o monitoramento das transações?", a: "Através do nosso painel administrativo completo, você tem acesso a relatórios detalhados, dashboards e monitoramento em tempo real de todas as transações." },
    { q: "O gateway é compatível com outros checkouts?", a: "Sim, nossa API flexível permite a integração com diversas plataformas de e-commerce, sistemas de CRM e checkouts externos." },
  ];

  // Animation setup for the section title
  // const titleRef = useRef(null);
  // const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Use motion.div for animations */}
        <div
          // ref={titleRef}
          className="text-center mb-12"
          // initial={{ opacity: 0, y: 20 }}
          // animate={titleInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-white/70">
            Tire suas dúvidas sobre nossa plataforma
          </p>
        </div>
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.q} index={index}>
                {faq.a}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
EOF
echo "Created ${COMPONENT_DIR}/FAQSection.tsx"

# --- Add other components similarly ---
# Example: cat << 'EOF' > "${COMPONENT_DIR}/PaymentMethodsSection.tsx"
# ... Paste PaymentMethodsSection code here ...
# EOF
# echo "Created ${COMPONENT_DIR}/PaymentMethodsSection.tsx"

# --- Make script executable ---
chmod +x create_components.sh

echo "-------------------------------------"
echo "Script finished. Components created in $COMPONENT_DIR"
echo "You may need to adjust import paths for assets (images, fonts) and icons within the generated files."
echo "Run this script from your project's root directory using: ./create_components.sh"
echo "-------------------------------------"

