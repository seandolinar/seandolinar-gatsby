import React from 'react';
import Header from '@components/Header';


import '@styles/business-card.scss';


const BusinessCard = ({scrollPosition}) => <div className="business-card">
    <Header scrollPosition={scrollPosition} />
    <h3>Front End | Data Visualization | Mobile </h3>
    <div></div>
    <div className="site-blog"><span>blog: </span><a href="//stats.seandolinar.com">stats.seandolinar.com</a></div>
</div>


export default BusinessCard