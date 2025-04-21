import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'user_menu',
      filename: 'remoteEntry.js',
      exposes: {
        './UserMenu': './src/App.jsx',
      },
      shared: ['react', 'react-dom', '@mui/material', '@mui/icons-material']
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5175,
    strictPort: true,
  },
});
