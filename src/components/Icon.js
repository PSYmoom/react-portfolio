import React from 'react'
import styled from 'styled-components';
import ProjectIcon from '../assets/project.png';

const Styles = styled.div`
  .logo-style{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
`;

const Icon = () => (
  <Styles>
    <img className="logo-style" alt="Logo for timeline" src={ProjectIcon} height={28} width={28}/>
  </Styles>
);

export default Icon;
