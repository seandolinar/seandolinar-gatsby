import React from 'react';
import Header from '@components/Header';


import '@styles/business-card.scss';


const handleScrollResume = () => {
    const {innerHeight} = window;

    window.scroll(0, .95* innerHeight)
}

const BusinessCard = ({scrollPosition}) => <div className="business-card">
    <Header scrollPosition={scrollPosition} />
    <h3>Front End | Data Visualization | Mobile </h3>
    <div className="site-blog"><span>blog: </span><a href="//stats.seandolinar.com">stats.seandolinar.com</a></div>
    <div className="nav-to-resume" onClick={handleScrollResume}>
        <div>RESUME</div>
        <div className="arrow-down"></div>
    </div>
</div>


export default BusinessCard