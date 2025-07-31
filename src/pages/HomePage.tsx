import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Pianist = () => {
  return (
    <group position={[-0.5, -0.5, 0]}>
      {/* Piano Base */}
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[3.8, 0.7, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
      </mesh>

      {/* White Keys */}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh key={`white-${i}`} position={[-2.5 + i * 0.14, 0.35, 0.4]}>
          <boxGeometry args={[0.08, 0.05, 0.6]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Black Keys */}
      {Array.from({ length: 25 }).map((_, i) => {
        if ([2, 6, 9, 13, 16, 20, 23].includes(i)) return null;
        return (
          <mesh key={`black-${i}`} position={[-2.45 + i * 0.14, 0.38, 0.15]}>
            <boxGeometry args={[0.08, 0.05, 0.6]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        );
      })}

      {/* Boy Playing */}
      <group position={[0, 0.5, 0.8]} rotation={[0, Math.PI, 0]}>
        {/* Body */}
        <mesh position={[1, 0.3, 0]}>
          <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>

        {/* Head */}
        <mesh position={[1, 0.9, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="#e0c6b5" />
        </mesh>

        {/* Glasses */}
        <group position={[1, 0.92, 0.1]}>
          <mesh position={[-0.08, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.02, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          <mesh position={[0.08, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.02, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          <mesh>
            <boxGeometry args={[0.16, 0.02, 0.02]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        </group>

        {/* Arms */}
        <mesh position={[0.8, 0.4, 0.2]} rotation={[0.5, 0, -0.8]}>
          <capsuleGeometry args={[0.05, 0.4, 8, 16]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <mesh position={[1.4, 0.4, 0.2]} rotation={[0.5, 0, 0.8]}>
          <capsuleGeometry args={[0.05, 0.4, 8, 16]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
      </group>

      {/* Stage */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[4.5, 3.5, 0.5, 30]} />
        <meshStandardMaterial color="#1a2b2b" />
      </mesh>
    </group>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
      {/* Canvas in background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 50 }}>
          <PerspectiveCamera makeDefault position={[0, 3, 10]} />
          <color attach="background" args={['#0e0e0e']} />
          <fog attach="fog" args={['#0e0e0e', 10, 20]} />

          {/* Spotlight on pianist with increased intensity */}
          <SpotLight
            position={[0, 9, 0]}
            angle={85}
            penumbra={0.1}
            intensity={1} // Increased intensity for brighter spotlight
            castShadow
            color="#ffffff"
            distance={1555} // Adjust distance for broader focus
          />

          {/* Ambient lighting */}
          <ambientLight intensity={10} />

          {/* The Pianist Scene */}
          <Pianist />

          <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={3} />
        </Canvas>
      </div>

      {/* Overlay Content with transparent background */}
      <div className="relative z-10 text-center px-6 py-8 max-w-2xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          MERN Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
        Full-stack MERN developer with a passion for Machine Learning, Cloud technologies, and the art of piano.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105 text-lg"
          >
            View Projects
            <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 border border-white text-white hover:bg-white/10 rounded-md flex items-center justify-center transition-all duration-300 text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
