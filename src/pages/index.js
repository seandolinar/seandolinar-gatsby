import React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/layout';
import SectionBox from '@components/resume/SectionBox';

import '@styles/index.scss';

const IndexPage = () => (
  <div className="wrapper-index">
    <header><div>Sean Dolinar</div></header>
    <h1 className="site-title">Sean Dolinar</h1>
    <h3>Front End | Data Visualization | Mobile </h3>
    <div></div>
    <div className="site-blog"><span>blog: </span><a href="//stats.seandolinar.com">stats.seandolinar.com</a></div>
    <div>DEV</div>
    <SectionBox>
      Overview: I want this to be the best resume site out there.
    </SectionBox>
    <SectionBox>
      Skills
      <table><td>JavaScript</td></table>
    </SectionBox>
    <SectionBox>
      Work Experience
    </SectionBox>
    <SectionBox>
      Work Experience
    </SectionBox>
  </div>
)

export default IndexPage
