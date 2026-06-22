import React, { useState, useEffect } from 'react';
import PortfolioCard from './components/PortfolioCard';
import ContactModal from './components/ContactModal';

const PROFILE_DATA = {
  name: 'TuteDude',
  title: 'Product Designer & Frontend Engineer',
  bio: 'I design and build calm, focused product experiences for fast-moving teams. Currently exploring AI-assisted interfaces, design systems, and high-performance UI engineering.',
  skills: [
    'Design Systems',
    'React',
    'TypeScript',
    'Figma',
    'Prototyping',
    'Accessibility'
  ],
  avatars: [
    '/avatars/avatar1.png',
    '/avatars/avatar2.png',
    '/avatars/avatar3.png',
    '/avatars/avatar4.png'
  ],
  contact: {
    email: 'tutedude@example.com',
    twitter: '@tutedude',
    linkedin: 'linkedin.com/in/tutedude'
  }
};

function App() {
  const [theme, setTheme] = useState('light');
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync theme changes with documentElement class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handlePrevAvatar = () => {
    setAvatarIndex(prev => (prev - 1 + PROFILE_DATA.avatars.length) % PROFILE_DATA.avatars.length);
  };

  const handleNextAvatar = () => {
    setAvatarIndex(prev => (prev + 1) % PROFILE_DATA.avatars.length);
  };

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
    }
  };

  return (
    <main className="app-wrapper">
      {/* Top Floating Theme Switcher */}
      <button 
        className="theme-toggle-top" 
        onClick={toggleTheme}
        aria-label={`Toggle theme: switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <span>Toggle theme</span>
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <span>Toggle theme</span>
          </>
        )}
      </button>

      {/* Main Card Component */}
      <PortfolioCard
        profileData={PROFILE_DATA}
        theme={theme}
        onToggleTheme={toggleTheme}
        avatarIndex={avatarIndex}
        onPrevAvatar={handlePrevAvatar}
        onNextAvatar={handleNextAvatar}
        likes={likes}
        isLiked={isLiked}
        onLike={handleLikeToggle}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Contact Overlay Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        contactInfo={PROFILE_DATA.contact}
      />
    </main>
  );
}

export default App;
