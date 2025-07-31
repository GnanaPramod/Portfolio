import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add some basic preloading animation
const root = document.getElementById('root')!;
root.innerHTML = `
  <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #111;">
    <div style="text-align: center;">
      <div style="display: flex; margin-bottom: 20px;">
        ${Array.from({ length: 7 }).map((_, i) => `
          <div style="
            width: 30px; 
            height: ${i % 2 === 0 ? '120px' : '80px'}; 
            background-color: ${i % 2 === 0 ? 'white' : 'black'}; 
            margin: 0 ${i % 2 === 0 ? '0' : '-10px'}; 
            z-index: ${i % 2 === 0 ? '0' : '1'};
            animation: press 1.5s ${i * 0.2}s infinite;
          "></div>
        `).join('')}
      </div>
      <h1 style="color: white; font-family: serif; font-size: 24px; margin-top: 20px;">Loading Pianist Developer...</h1>
    </div>
  </div>
  <style>
    @keyframes press {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(10px); }
    }
  </style>
`;

// Actually mount the app once loaded
setTimeout(() => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}, 1500);