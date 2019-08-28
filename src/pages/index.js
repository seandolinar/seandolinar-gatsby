import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import '../styles/index.scss';

const IndexPage = () => (
  <div className="wrapper-index">
    <h1 className="site-title">Sean Dolinar</h1>
    <h3>Front End | Data Visualization | Mobile </h3>
    <div></div>
    <div className="site-blog"><span>blog: </span><a href="//stats.seandolinar.com">stats.seandolinar.com</a></div>
  </div>
)

export default IndexPage
