import React from 'react';

import '@styles/resume/item-skill.scss';

interface ItemSkillProps {
  className?: string;
  children: React.ReactNode;
}

const ItemSkill: React.FC<ItemSkillProps> = ({ className, children }) => {
  return <div className={`item-skill ${className}`}>{children}</div>;
};

export default ItemSkill;
