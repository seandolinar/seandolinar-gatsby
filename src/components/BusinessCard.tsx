import React from 'react';
import Header from '@components/Header.tsx';

import '@styles/business-card.scss';

const handleScrollResume = (): void => {
  const { innerHeight } = window;

  window.scroll(0, 0.95 * innerHeight);
};

interface BusinessCardProps {
  scrollPosition: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ scrollPosition }) => (
  <div className="business-card">
    <Header scrollPosition={scrollPosition} />
    <h3>Front End | Data Visualization | Mobile </h3>
    <div className="site-blog">
      <span>blog: </span>
      <a href="//stats.seandolinar.com">stats.seandolinar.com</a>
    </div>
    <div className="nav-to-resume" onClick={handleScrollResume}>
      <div>RESUME</div>
      <div className="arrow-down"></div>
    </div>
  </div>
);

export default BusinessCard;
