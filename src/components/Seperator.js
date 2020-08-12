import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .seperator{
    margin-top:25px;
    border-width: 2px;
  }
`;

const Seperator = () => (
  <Styles>
    <hr className="seperator"/>
  </Styles>
);

export default Seperator;
