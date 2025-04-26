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
