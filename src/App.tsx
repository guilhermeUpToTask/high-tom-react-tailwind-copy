import React, { Suspense, lazy } from "react";
import "./styles/globals.css"; // Import global styles

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const EcosystemFeatures = lazy(() => import("./components/EcosystemFeatures"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));
const BackgroundEffects = lazy(() => import("./components/BackgroundEffects"));
const BackgroundComponent = lazy(() => import("./components/BackgroundComponent"));

// A simple loader component for suspense fallbacks
const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-screen text-white">
    Loading...
  </div>
);

const App: React.FC = () => {
  return (
    <div className="__className_d65c78">
      {/* Wrap background in suspense */}
      <Suspense fallback={<Loader />}>
        <BackgroundComponent />
        <BackgroundEffects />
      </Suspense>

      {/* Main content stacked above background */}
      <div className="relative z-10">
        <Suspense fallback={<Loader />}>
          <Navbar />
        </Suspense>

        <main className="min-h-screen bg-transparent text-white">
          {/* Page Sections with individual suspense boundaries */}
          <Suspense fallback={<Loader />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <FeaturesSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <EcosystemFeatures />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <FAQSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <ContactSection />
          </Suspense>
        </main>

        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
