import React from 'react'
import styled from 'styled-components';
import AboutMe from './AboutMe';
import Seperator from './components/Seperator';

const Styles = styled.div`
  .paragraph{
    padding:10px;
  }
`;

const Home = () => (
  <Styles>
    <AboutMe />
    <Seperator />
  </Styles>
)

export default Home;
