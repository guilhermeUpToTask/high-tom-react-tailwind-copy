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
