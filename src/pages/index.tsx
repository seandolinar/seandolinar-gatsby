import React, { useState, useEffect } from 'react';

import BusinessCard from '@components/BusinessCard.tsx';
import SectionBox from '@components/resume/SectionBox.tsx';
import ItemSkill from '@components/resume/ItemSkill.tsx';
import CardSkill from '@components/resume/CardSkill.tsx';
import Job from '@components/resume/Job.tsx';

import '@styles/layout.scss';
import '@styles/index.scss';

const IndexPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  let className = 'is-business-card';

  if (typeof window !== `undefined`) {
    className =
      scrollPosition / window.innerHeight <= 0.5
        ? 'is-business-card'
        : 'is-resume';
  }

  return (
    <>
      <div className={`wrapper-index ${className}`}>
        <BusinessCard scrollPosition={scrollPosition} />
        <SectionBox
          header="What I Do"
          className="section-goals"
          scrollPosition={scrollPosition}
        >
          <div className="job">
            I enjoy buildings solutions that extract information from data and
            present it clearly and concisely to effectively communicate with
            people. I love learning new tech when I dive into problems.
          </div>
        </SectionBox>
        <SectionBox
          header="Skills"
          className="section-skill"
          scrollPosition={scrollPosition}
        >
          <CardSkill header="Front End">
            <ItemSkill>JavaScript</ItemSkill>
            <ItemSkill>React</ItemSkill>
            <ItemSkill>GatsbyJS</ItemSkill>
            <ItemSkill>React Native</ItemSkill>
            <ItemSkill>Ionic / Capacitor</ItemSkill>
            <ItemSkill>VueJS</ItemSkill>
            <ItemSkill>Webpack</ItemSkill>
          </CardSkill>
          <CardSkill header="Back End">
            <ItemSkill>Node.js</ItemSkill>
            <ItemSkill>.NET</ItemSkill>
            <ItemSkill>Python</ItemSkill>
            <ItemSkill>PHP</ItemSkill>
            <ItemSkill>WordPress</ItemSkill>
          </CardSkill>
          <CardSkill header="Database">
            <ItemSkill>SQL</ItemSkill>
            <ItemSkill>REST</ItemSkill>
            <ItemSkill>GraphQL</ItemSkill>
            <ItemSkill>Postgres</ItemSkill>
            <ItemSkill>MongoDB</ItemSkill>
          </CardSkill>
          <CardSkill header="Data Analysis">
            <ItemSkill>D3</ItemSkill>
            <ItemSkill>three.js</ItemSkill>
            <ItemSkill>Tableau</ItemSkill>
            <ItemSkill>ggplot2</ItemSkill>
            <ItemSkill>R</ItemSkill>
          </CardSkill>
          <CardSkill header="Misc">
            <ItemSkill>6502 Assembly / NES</ItemSkill>
            <ItemSkill>Final Cut Pro</ItemSkill>
            <ItemSkill>Photoshop</ItemSkill>
            <ItemSkill>Affinity Designer</ItemSkill>
            <ItemSkill>Proto.io</ItemSkill>
            <ItemSkill>Virtual Events</ItemSkill>
          </CardSkill>
        </SectionBox>
        <SectionBox
          header="Jobs – Coding"
          className="section-jobs-coding"
          scrollPosition={scrollPosition}
        >
          <Job
            company="FanGraphs"
            startDate={'2015'}
            endDate={'Present'}
            title={'Front End Engineer'}
            content={
              <ul>
                <li>Accomplishments</li>
                <ul>
                  <li>
                    Introduced and built modern front-end stack with React
                  </li>
                  <li>Developed REST API for the new front-end features</li>
                  <li>Overhaul data visualization guidelines</li>
                  <li>Updated site to include responsive design</li>
                  <li>
                    Improved site load times using client side rendering and
                    caching
                  </li>
                </ul>
                <li>Responsibilities</li>
                <ul>
                  <li>
                    Create interactive data analysis tools for Major League
                    Baseball statistics
                  </li>
                  <li>Advise on analytical and statistical methods</li>
                  <li>Run ad-hoc data SQL query for research requests</li>
                </ul>
              </ul>
            }
          />
          <div className="vr"></div>
          <Job
            company="Consultant"
            startDate={'2015'}
            endDate={'Present'}
            title={'Front End Engineer'}
            content={
              <ul>
                <li>Project Summary</li>
                <ul>
                  <li>
                    Used React Native to create React Native iOS app for
                    enterprise use
                  </li>
                  <li>
                    Created a custom GatsbyJS website for media strategy and
                    production company
                  </li>
                  <li>
                    Worked on a development team focusing on creating VueJS
                    front-end components for a political chat web app
                  </li>
                </ul>
              </ul>
            }
          />
        </SectionBox>
        <SectionBox
          header="Jobs – Media Production"
          className="section-jobs-media"
          scrollPosition={scrollPosition}
        >
          <Job
            company="Pittsburgh Pirates"
            startDate={'2009'}
            endDate={'Present'}
            title={'Broadcast Director'}
            content={
              <ul>
                {/* <li>Summary</li> */}
                <ul>
                  <li>Programmed Sony video switcher for new control room</li>
                  <li>
                    Performed in high-pressure setting to produce live, in-game
                    scoreboard presentation
                  </li>
                </ul>
              </ul>
            }
          />
          <Job
            company="Optimus"
            startDate={'2012'}
            // endDate={''}
            title={'Assistant Editor'}
            content={
              <ul>
                {/* <li>Summary</li> */}
                <ul>
                  <li>
                    Collaborated with editors & producers to prepare and manage
                    client-centric video editorial sessions for advertising
                    agency clients
                  </li>
                  <li>
                    Interfaced with various parts of the post-production process
                    to ensure seamless transition between departments
                  </li>
                </ul>
              </ul>
            }
          />
          <Job
            company="Mind Over Media"
            startDate={'2008'}
            endDate={'2012'}
            title={'Video Editor'}
            content={
              <ul>
                {/* <li>Summary</li> */}
                <ul>
                  <li>
                    Developed and implemented technical aspects of post
                    production: archiving strategy and asset management
                  </li>
                  <li>
                    Served as system administrator for facility-wide EditShare
                    Linux servers
                  </li>
                </ul>
              </ul>
            }
          />
        </SectionBox>
        <SectionBox
          header="Education"
          className="section-education"
          scrollPosition={scrollPosition}
        >
          <Job
            company="Northwestern University"
            startDate={'2013'}
            endDate={'2018'}
            title={'M.S. Predictive Analytics'}
            content={
              <ul>
                <li>Courses</li>
                <ul>
                  <li>Predictive Modeling</li>
                  <li>Time Series Analysis</li>
                  <li>Machine Learning</li>
                  <li>Database Design</li>
                  <li>Web Analytics</li>
                </ul>
              </ul>
            }
          />
          <div className="vr"></div>
          <Job
            company="University of Pittsburgh"
            startDate={'2004'}
            endDate={'2008'}
            title={'B.S. Chemistry'}
          />
        </SectionBox>
      </div>
      <footer></footer>
    </>
  );
};

export default IndexPage;
