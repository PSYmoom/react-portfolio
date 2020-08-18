import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Styles = styled.div`
  .projectLinks {
      font-style: italic;
      background: ${props => (props.backgroundColor)};
      box-shadow: ${props => ("0 0 0 4px " + props.borderColor + ",inset 0 0px 0 rgba(0,0,0,0.08),0 0px 0 0px rgba(0,0,0,0.05)")};
      padding: 10px;
      height: 50px;
      &:hover {
        padding: 5px;
      }
    }
  a {
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    &:hover {
      font-size:150%;
      color: white;
      font-weight: bold;
    }
  }
`;

const FeaturedProjects = (props) => (
  <Styles
    backgroundColor={props.container.["Background Color"].validated}
    borderColor={props.container.["Border Color"].validated}
  >
    <h2>Featured Projects</h2>
    <p className="paragraph">
      Here are some of the projects I had a blast working on.
    </p>
    <Container>
      <Row>
        <Col md="4" className="projectLinks" >
          <Link to="/projects#7" >MinecraftBot</Link>
        </Col>
        <Col md="4" className="projectLinks" >
          <Link to="/projects#6" >CarePost</Link>
        </Col>
        <Col md="4" className="projectLinks" >
          <Link to="/projects#5" >Offroad Vehicle</Link>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="projectLinks" >
          <Link to="/projects#3" >F1 in Schools</Link>
        </Col>
        <Col md="6" className="projectLinks" >
          <Link to="/projects#1" >Kirby Saves Christmas</Link>
        </Col>
      </Row>
    </Container>
  </Styles>
);

export default FeaturedProjects;
