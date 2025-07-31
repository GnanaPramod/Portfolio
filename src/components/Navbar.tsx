import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Music } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useMusic } from '../context/MusicContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { isPlaying, toggleMusic } = useMusic();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
<NavLink 
  to="/" 
  className="flex items-center gap-2 font-serif text-xl font-bold"
>
  <Music className="h-8 w-8 text-black dark:text-white" />
  <span className="hidden sm:inline">PianistDev</span>
</NavLink>



        {/* Desktop and Mobile Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map(({ name, path }, index) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center justify-start px-6 py-3 transition-all font-semibold text-sm whitespace-nowrap
                ${
                  index % 2 === 0
                    ? 'bg-white text-black hover:bg-gray-300'
                    : 'bg-black text-white hover:bg-gray-800'
                }
                ${isActive ? 'ring-2 ring-amber-500' : ''}
                rounded-2xl
                `
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Theme + Menu Icons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with same piano buttons */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
          {navLinks.map(({ name, path }, index) => (
            <NavLink
              key={name}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-start w-full px-6 py-3 transition-all font-semibold text-sm whitespace-nowrap
                ${
                  index % 2 === 0
                    ? 'bg-white text-black hover:bg-gray-300'
                    : 'bg-black text-white hover:bg-gray-800'
                }
                ${isActive ? 'ring-2 ring-amber-500' : ''}
                rounded-2xl
                `
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
