import { StarParticles } from './StarParticles';

const BackgroundComponent = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Background Overlays and Gradients - these will be layered underneath the tsParticles canvas */}
      {/* Note: Your options set a background color of #000 (black) for the canvas. */}
      {/* If you want the divs below to show through, set particlesOptions.background.color.value to "" or undefined. */}
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>
      <div className="absolute inset-0 bg-purple-900/10"></div>

      {/* The tsParticles component handles its own canvas */}
    <StarParticles/>

      {/* Additional Gradient/Blur Overlay Divs */}
      {/* Adjust z-index based on whether you want them above or below particles */}
      <div
        className="absolute bottom-0 left-1/2 w-[200%] h-[45%]"
        style={{
          transform: 'translateX(-50%)',
          background: 'radial-gradient(rgba(168, 85, 247, 0.15) 0%, rgba(139, 92, 246, 0) 60%)',
          borderRadius: '100% 100% 0px 0px',
          zIndex: 1, // Example: above particles
        }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/20 to-transparent"
           style={{ zIndex: 1 }}>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 70%, rgba(147, 51, 234, 0.15) 0%, rgba(139, 92, 246, 0.1) 25%, transparent 50%)',
          filter: 'blur(60px)',
           zIndex: 1, // Example: above particles
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 65%, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 30%, transparent 50%)',
          filter: 'blur(40px)',
           zIndex: 1, // Example: above particles
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(192, 132, 252, 0.05) 0%, transparent 60%)',
           zIndex: 1, // Example: above particles
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"
           style={{ zIndex: 1 }}>
      </div>
    </div>
  );
};

export default BackgroundComponent;