import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';

class ColorInput extends Component {
  render() {
    return(
      <FormGroup>
        <FormLabel>{this.props.name}</FormLabel>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => {this.props.onValueChange(this.props.names, event.target.value)}}
            isInvalid={this.props.error}
          />
          <InputGroup.Prepend>
            <Button
              variant="outline-secondary"
              onClick={() => {this.props.onButtonClick(this.props.names)}}
            >
              Submit
            </Button>
          </InputGroup.Prepend>
          <FormControl.Feedback type="invalid">
            Please enter a valid hex number.
          </FormControl.Feedback>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default ColorInput;
