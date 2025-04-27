import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Raise the warning limit if needed
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 3D scene
            if (id.includes('@splinetool/react-spline')) {
              return 'vendor-spline';
            }
            // Particles engine
            if (
              id.includes('@tsparticles') ||
              id.includes('tsparticles-slim') ||
              id.includes('react-tsparticles')
            ) {
              return 'vendor-particles';
            }
            // Radix UI components
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            // Animations
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // Charts
            if (id.includes('recharts')) {
              return 'vendor-recharts';
            }
            // Data fetching
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-react-query';
            }
            // Forms
            if (
              id.includes('react-hook-form') ||
              id.includes('@hookform')
            ) {
              return 'vendor-forms';
            }
            // Payments
            if (id.includes('@stripe/stripe-js')) {
              return 'vendor-stripe';
            }
            // Real-time
            if (id.includes('pusher-js')) {
              return 'vendor-pusher';
            }
            // Date utilities
            if (id.includes('date-fns')) {
              return 'vendor-date-fns';
            }
            // CSS-in-JS / theming
            if (
              id.includes('clsx') ||
              id.includes('class-variance-authority') ||
              id.includes('next-themes')
            ) {
              return 'vendor-theming';
            }
            // Icons & utilities
            if (
              id.includes('lucide-react') ||
              id.includes('cmdk') ||
              id.includes('input-otp') ||
              id.includes('embla-carousel-react')
            ) {
              return 'vendor-ui-utils';
            }
            // Everything else
            return 'vendor';
          }
        }
      }
    }
  }
});
