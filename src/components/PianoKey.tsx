import React, { useState } from 'react';

interface PianoKeyProps {
  children: React.ReactNode;
  note: string;
  mobileView?: boolean;
}

const PianoKey: React.FC<PianoKeyProps> = ({ children, note, mobileView = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Map notes to sound files (would need to create/add these sound files)
  const noteSounds: Record<string, string> = {
    'C': '/sounds/C.mp3',
    'D': '/sounds/D.mp3',
    'E': '/sounds/E.mp3',
    'F': '/sounds/F.mp3',
    'G': '/sounds/G.mp3',
    'A': '/sounds/A.mp3',
    'B': '/sounds/B.mp3',
  };
  
  const playNote = () => {
    const audio = new Audio(noteSounds[note]);
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play error:', e));
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    playNote();
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = () => {
    playNote();
  };

  return (
    <div
      className={`relative ${mobileView ? 'w-full' : 'inline-block'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={`transition-transform duration-150 ${isHovered ? 'transform-gpu -translate-y-0.5' : ''}`}>
        {children}
      </div>
      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 animate-pulse" />
      )}
    </div>
  );
};

export default PianoKey;