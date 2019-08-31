import React from 'react';

import '@styles/resume/section-box.scss';


const SectionBox = ({className, children}) => {
    return <section className={`section-box ${className}`}>{children || 'Section'}</section>
}

export default SectionBox