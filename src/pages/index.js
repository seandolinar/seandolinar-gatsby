import React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/layout';
import Header from '@components/header';
import BusinessCard from '@components/BusinessCard';
import SectionBox from '@components/resume/SectionBox';

import '@styles/index.scss';
import ItemSkill from '@components/resume/ItemSkill';
import CardSkill from '../components/resume/CardSkill';
import Job from '@components/resume/Job';

const IndexPage = () => (
  <div className="wrapper-index">
    <Header />
    {/* <BusinessCard /> */}
    {/* <div>DEV</div> */}
    {/* <div style={{gridRow: 'span 4/ auto'}}>side col</div> */}
    <SectionBox>
      Overview: I want this to be the best resume site out there.
    </SectionBox>
    <SectionBox className="section-skill">
      <CardSkill
        header="Front End"
      >
        <ItemSkill>JavaScript</ItemSkill>
        <ItemSkill>React</ItemSkill>
        <ItemSkill>React Native</ItemSkill>
      </CardSkill>
      <CardSkill
        header="Back End / Data"
      >
        <ItemSkill>Node</ItemSkill>
        <ItemSkill>.NET</ItemSkill>
        <ItemSkill>Python</ItemSkill>
        <ItemSkill>R</ItemSkill>
      </CardSkill>
      <CardSkill
        header="Data"
      >
        <ItemSkill>SQL</ItemSkill>
        <ItemSkill>REST</ItemSkill>
        <ItemSkill>GraphQL</ItemSkill>
        <ItemSkill>Postgres</ItemSkill>
        <ItemSkill>MongoDB</ItemSkill>
        <ItemSkill>R</ItemSkill>
      </CardSkill>
      <CardSkill
        header="Data Visualization"
      >
        <ItemSkill>D3</ItemSkill>
        <ItemSkill>three.js</ItemSkill>
        <ItemSkill>Tableau</ItemSkill>
        <ItemSkill>ggplot2</ItemSkill>
      </CardSkill>
      <CardSkill
        header="Media"
      >
        <ItemSkill>Photoshop</ItemSkill>
        <ItemSkill>Affinity Designer</ItemSkill>
        <ItemSkill>Proto.io</ItemSkill>
        <ItemSkill>Sketch</ItemSkill>
        <ItemSkill>Final Cut Pro</ItemSkill>
        
      </CardSkill>
    </SectionBox>
    <SectionBox>
      Coding
      <Job
        company={<h2>FanGraphs</h2>}
        startDate={'February 2015'}
        endDate={'Present'}
        title={'Front End Engineer'}
        content={<ul>
          <li>Accomplishments</li>
          <ul>
            <li>Introduced and built modern front-end stack with React</li>
            <li>Developed REST API for the new front-end features</li>
            <li>Overhaul data visualization guidelines</li>
            <li>Updated site to include responsive design</li>
            <li>Improved site load times using client side rendering and caching</li>
          </ul>
          <li>Responsibilities</li>
          <ul>
            <li>Create interactive data analysis tools for Major League Baseball statistics</li>
            <li>Advise on analytical and statistical methods</li>
            <li>Run ad-hoc data SQL query for research requests</li>
          </ul>
        </ul>}
      />
      <Job
        company={<h2>Consultant</h2>}
        startDate={'2015'}
        endDate={'Present'}
        title={'Front End Engineer'}
        content={<ul>
          <li>Accomplishments</li>
          <ul>
            <li>Used React Native to create React Native iOS app for enterprise use</li>
            <li>Created a custom GatsbyJS website</li>
          </ul>
        </ul>}
      />
    </SectionBox>
    <SectionBox>
      Media Production (Past Life)
      <Job
        company={<h2>Pittsburgh Pirates</h2>}
        startDate={'2009'}
        endDate={'Present'}
        title={'Broadcast Director'}
        content={<ul>
          <li>Accomplishments</li>
          <ul>
            <li>Programmed Sony video switcher for new control room</li>
            <li>Programmed Sony video switcher for new control room</li>
          </ul>
        </ul>}
      />
    </SectionBox>
  </div>
)

export default IndexPage
