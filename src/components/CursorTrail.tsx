import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let mouseX = 0;
    let mouseY = 0;

    const musicSymbols = ['🎵', '🎶', '♩', '♪'];

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      lifespan: number;
      opacity: number;
      type: 'note' | 'sparkle';
      rotation: number;
      rotationSpeed: number;
      symbol?: string;
    }[] = [];

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      createParticles();
    };

    window.addEventListener('mousemove', updateMousePosition);

    function createParticles() {
      const type = Math.random() > 0.5 ? 'note' : 'sparkle';
      const size = type === 'note' ? 
        Math.random() * 8 + 18 :   // 👈 bigger music symbol size
        Math.random() * 3 + 1;

      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.1;

      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2 - 1;

      const symbol = type === 'note' ? 
        musicSymbols[Math.floor(Math.random() * musicSymbols.length)] : 
        undefined;

      particles.push({
        x: mouseX,
        y: mouseY,
        size,
        speedX,
        speedY,
        lifespan: 100,
        opacity: 0.9,
        type,
        rotation,
        rotationSpeed,
        symbol,
      });

      if (particles.length > 100) {
        particles.shift();
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.01;
        p.lifespan--;

        if (p.lifespan <= 0 || p.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.type === 'note' && p.symbol) {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = '#ffffff'; // white color
          ctx.font = `${p.size}px Arial`;
          ctx.fillText(p.symbol, 0, 0);
        } else if (p.type === 'sparkle') {
          ctx.fillStyle = '#ffffff'; // white color
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default CursorTrail;
