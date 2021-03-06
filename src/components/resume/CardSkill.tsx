import React from 'react';

import '@styles/resume/card-skill.scss';

interface CardSkillProps {
  className?: string;
  header: string;
  children: React.ReactNode;
}

const CardSkill: React.FC<CardSkillProps> = ({
  className,
  header,
  children,
}) => {
  return (
    <div className={`card-skill ${className}`}>
      <h3>{header}</h3>
      {children}
    </div>
  );
};

export default CardSkill;
