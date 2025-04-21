import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'zone.js';
import App from './App.tsx';
import { cartStore } from '../src/store/cartStore.ts';

(window as any).cartStore = cartStore;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
