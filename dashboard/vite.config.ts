import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        user_menu: 'http://localhost:5174/dist/assets/remoteEntry.js',
      },
      name: 'dashboard',
      exposes: {
        './Dashboard': './src/Dashboard.tsx',
      },
      shared: ['react', 'react-dom', '@mui/material', '@mui/icons-material']
    }),
  ],
  build: {
    target: 'esnext', // <-- ✅ this is what you need
  },
});
