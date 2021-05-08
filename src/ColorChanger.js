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
  button.rounded-right-side.btn.btn-outline-secondary {
    border-radius: 0 .25rem .25rem 0;
    border-color: ${props => (props.primaryColor)};
    color: ${props => (props.primaryColor)};
    &:hover {
      color: ${props => (props.secondaryColor)};
      background-color: ${props => (props.primaryColor)};
      border-color: ${props => (props.primaryColor)};
    }
  }
`;

class ColorChanger extends Component {
  render() {
   return(
     <Styles
      primaryColor={this.props.allComponents.["Button"].["Primary Color"].validated}
      secondaryColor={this.props.allComponents.["Button"].["Secondary Color"].validated}
     >
      <Container>
        <h2 className="heading-two">Color Changer</h2>
        {Object.keys(this.props.allComponents).map((component, i) => (
          <React.Fragment key={i}>
            <h4> {component} </h4>
            <Row>
              {Object.keys(this.props.allComponents.[component]).map((variable, i) => (
                <Col key={i} sm={true} md={this.props.allComponents.[component].length / 12}>
                 <ColorInput
                  name={variable}
                  names={[component, variable]}
                  currentColor={this.props.allComponents.[component].[variable].validated}
                  error={this.props.allComponents.[component].[variable].error}
                  onValueChange={(variables, value) => {this.props.onValueChange(variables, value)}}
                  onButtonClick={(variables) => {this.props.onButtonClick(variables)}}
                  button={this.props.allComponents.["Button"]}
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
