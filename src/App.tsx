import React, { Suspense, useState } from 'react';
import { Loader } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import AchievementsPage from './pages/AchievementsPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import CursorTrail from './components/CursorTrail';
import ThemeProvider from './context/ThemeContext';
import MusicProvider from './context/MusicContext';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <MusicProvider>
        <Router>
          <CursorTrail />
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <main className="pt-20">
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/achievements" element={<AchievementsPage />} />
                  <Route path="/music" element={<MusicPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </MusicProvider>
    </ThemeProvider>
  );
}

export default App