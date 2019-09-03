import React from 'react';

import '@styles/resume/item-skill.scss';


const ItemSkill = ({className, children}) => {
    return <div className={`item-skill ${className}`}>{children}</div>
}

export default ItemSkill //React.memo(ItemSkill)