import React from 'react';

import '@styles/resume/item-skill.scss';

interface ItemSkillProps {
  className: string;
  children: React.ReactNode;
}

const ItemSkill = ({
  className,
  children,
}: ItemSkillProps): React.ReactNode => {
  return <div className={`item-skill ${className}`}>{children}</div>;
};

export default ItemSkill;
