import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import mtnImage from '../assets/bkimg.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${mtnImage});
    background-size: cover;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .textIn {
    color:#efefef
  }
`;

const Jumbo = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="textIn">Hey! I am Symoom</h1>
        <p className="textIn">This is a website to help me keep track of my projects.</p>
      </Container>
    </Jumbotron>
  </Styles>
)

export default Jumbo;
