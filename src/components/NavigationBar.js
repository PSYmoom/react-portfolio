import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a {
    color : #bbb;

    &:hover {
      text-decoration: none;
      color: white;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand>
        <Link to="/">PSYmoom</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/resume">Resume</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;
