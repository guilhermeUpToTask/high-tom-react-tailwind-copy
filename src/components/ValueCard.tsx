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
