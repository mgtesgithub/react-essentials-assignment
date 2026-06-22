import React, { useState, useEffect } from 'react';

const ProfileHeader = ({ name, title, avatarUrl }) => {
  const [currentAvatar, setCurrentAvatar] = useState(avatarUrl);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    if (avatarUrl !== currentAvatar) {
      setFadeClass('fade-out');
      const timer = setTimeout(() => {
        setCurrentAvatar(avatarUrl);
        setFadeClass('fade-in');
      }, 250); // Matches transition timing
      return () => clearTimeout(timer);
    }
  }, [avatarUrl, currentAvatar]);

  return (
    <div className="profile-header">
      <div className="avatar-container">
        <img 
          src={currentAvatar} 
          alt={`${name}'s avatar`} 
          className={`avatar-image ${fadeClass}`} 
        />
      </div>
      <div className="profile-meta">
        <h2 className="profile-name">{name}</h2>
        <span className="profile-title">{title}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
