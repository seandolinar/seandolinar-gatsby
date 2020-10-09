import React from 'react';

import '@styles/resume/card-skill.scss';

interface CardSkillProps {
  className: string;
  header: string;
  children: React.ReactNode;
}

const CardSkill = ({
  className,
  header,
  children,
}: CardSkillProps): React.ReactNode => {
  return (
    <div className={`card-skill ${className}`}>
      <h3>{header}</h3>
      {children}
    </div>
  );
};

export default CardSkill;
