import React, { Component } from 'react'
import styled from 'styled-components';
import AboutMe from './AboutMe';
import ColorChanger from './ColorChanger';
import Seperator from './components/Seperator';
import FeaturedProjects from './components/FeaturedProjects';

const Styles = styled.div`
  .paragraph{
    padding:10px;
  }
`;

class Home extends Component {
  render() {
    return(
      <Styles>
        <AboutMe />
        <ColorChanger onValueChange={(variables, value) => {this.props.onValueChange(variables, value)}} onButtonClick={(variables) => {this.props.onButtonClick(variables)}} allComponents={this.props.allComponents} />
        <Seperator />
        <FeaturedProjects container={this.props.allComponents.["Container"]}/>
      </Styles>
    );
  }
}

export default Home;
