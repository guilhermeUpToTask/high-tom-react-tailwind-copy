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
        className="pointer-events-none fixed inset-0 z-30 transition duration-300" // z-0 to be behind content
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.1) 40%, rgba(88, 28, 135, 0.05) 60%, transparent 80%)`,
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
