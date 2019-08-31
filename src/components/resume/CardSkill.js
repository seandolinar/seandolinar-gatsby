import React from 'react';

import '@styles/resume/card-skill.scss';


const CardSkill = ({className, header, children}) => {
    return <div className={`card-skill ${className}`}>
        <h3>{header}</h3>
        {children}
    </div>
}

export default CardSkill