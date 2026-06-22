import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import SkillBadges from './SkillBadges';
import FooterActions from './FooterActions';

const PortfolioCard = ({
  profileData,
  theme,
  onToggleTheme,
  avatarIndex,
  onPrevAvatar,
  onNextAvatar,
  likes,
  isLiked,
  onLike,
  onContactClick
}) => {
  return (
    <article className="portfolio-card">
      <ProfileHeader 
        name={profileData.name} 
        title={profileData.title} 
        avatarUrl={profileData.avatars[avatarIndex]} 
      />
      <ProfileBio bio={profileData.bio} />
      <SkillBadges skills={profileData.skills} />
      <FooterActions 
        theme={theme}
        onToggleTheme={onToggleTheme}
        avatarIndex={avatarIndex}
        totalAvatars={profileData.avatars.length}
        onPrevAvatar={onPrevAvatar}
        onNextAvatar={onNextAvatar}
        likes={likes}
        isLiked={isLiked}
        onLike={onLike}
        onContactClick={onContactClick}
      />
    </article>
  );
};

export default PortfolioCard;
