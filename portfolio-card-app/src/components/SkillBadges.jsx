import React from 'react';

const SkillBadges = ({ skills }) => {
  return (
    <div className="skills-container">
      <span className="skills-title">Skills</span>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillBadges;
