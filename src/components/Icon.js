import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
  .logo-style{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
`;

const Icon = () => (
  <Styles>
    <FontAwesomeIcon  className="logo-style" icon={faCog}/>
  </Styles>
);

export default Icon;
