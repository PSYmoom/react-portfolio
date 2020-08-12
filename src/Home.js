import React from 'react'
import styled from 'styled-components';
import AboutMe from './AboutMe';
import Seperator from './components/Seperator';
import FeaturedProjects from './components/FeaturedProjects';

const Styles = styled.div`
  .paragraph{
    padding:10px;
  }
`;

const Home = () => (
  <Styles>
    <AboutMe />
    <Seperator />
    <FeaturedProjects />
  </Styles>
)

export default Home;
