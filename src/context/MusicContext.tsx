import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

type MusicContextType = {
  isPlaying: boolean;
  toggleMusic: () => void;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

type MusicProviderProps = {
  children: React.ReactNode;
};

const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Beautiful, calming piano music from Pixabay (royalty-free)
    const audioUrls = [
      'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c9a4a1d827.mp3',
      'https://cdn.pixabay.com/download/audio/2022/02/22/audio_d02b4c1a42.mp3',
      'https://cdn.pixabay.com/download/audio/2021/10/25/audio_1b55a5f8aa.mp3'
    ];
    
    const randomUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];
    audioRef.current = new Audio(randomUrl);
    
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.preload = 'auto';
      
      // Start loading the audio
      audioRef.current.load();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        // Ensure the audio is reset to the beginning
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling music:', error);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;