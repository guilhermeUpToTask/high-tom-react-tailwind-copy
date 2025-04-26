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
