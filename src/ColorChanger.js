import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ColorInput from './components/ColorInput';

const Styles = styled.div`
  .container{
    background-color:#f8f7fc;
    padding-top:15px;
  }
  .heading-two{
    margin-top:8px;
    margin-bottom:10px;
  }
`;

class ColorChanger extends Component {
  render() {
   return(
     <Styles>
      <Container>
        <h2 className="heading-two">Color Changer</h2>
        {Object.keys(this.props.allComponents).map((component) => (
          <React.Fragment>
            <h4> {component} </h4>
            <Row>
              {Object.keys(this.props.allComponents.[component]).map((variable) => (
                <Col sm={true} md={this.props.allComponents.[component].length / 12}>
                 <ColorInput
                  name={variable}
                  names={[component, variable]}
                  error={this.props.allComponents.[component].[variable].error}
                  onValueChange={(variables, value) => {this.props.onValueChange(variables, value)}}
                  onButtonClick={(variables) => {this.props.onButtonClick(variables)}}
                  />
                 </Col>
              ))}
            </Row>
          </React.Fragment>
        ))}
      </Container>
      </Styles>
    );
  }
}
export default ColorChanger;
