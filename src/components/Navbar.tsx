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
