import React from 'react';

import '@styles/resume/section-box.scss';


const SectionBox = ({className, children, header}) => {
    return <section className={`section-box ${className}`}>
        <h2>{header}</h2>
        {children || 'Section'}
    </section>
}

export default SectionBox