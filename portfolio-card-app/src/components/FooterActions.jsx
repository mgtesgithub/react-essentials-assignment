import React from 'react';

const FooterActions = ({
  theme,
  onToggleTheme,
  avatarIndex,
  totalAvatars,
  onPrevAvatar,
  onNextAvatar,
  likes,
  isLiked,
  onLike,
  onContactClick
}) => {
  return (
    <div className="card-footer">
      <div className="footer-left">
        {/* Toggle Theme Option */}
        <button 
          className="footer-theme-toggle" 
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <span>Dark</span>
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
              <span>Light</span>
            </>
          )}
        </button>

        {/* Photo Cycler */}
        <div className="photo-cycler">
          <button 
            className="cycle-btn" 
            onClick={onPrevAvatar}
            aria-label="Previous profile photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <span className="cycle-indicator">
            {avatarIndex + 1} / {totalAvatars}
          </span>

          <button 
            className="cycle-btn" 
            onClick={onNextAvatar}
            aria-label="Next profile photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="footer-left">
        {/* Likes Button */}
        <button 
          className={`likes-btn ${isLiked ? 'liked' : ''}`} 
          onClick={onLike}
          aria-label={`${isLiked ? 'Unlike' : 'Like'} profile`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span>{likes}</span>
        </button>

        {/* Contact Button */}
        <button 
          className="contact-btn" 
          onClick={onContactClick}
          aria-label="Contact information"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default FooterActions;
