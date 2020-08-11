import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';
import CV from './assets/CV.pdf';

const Styles = styled.div`
  .pdf {
    display: flex;
    justify-content: center;
  }
`;

class Resume extends Component {
  state = {
    width: 0
  };

  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  calculateWidth() {
    let calculateWidth = this.state.width - 20;
    return calculateWidth < 1000 ? calculateWidth : 1000;
  }
  
  render() {
    return(
      <Styles>
        <h2>Resume</h2>
        <Document className="pdf" file={CV} options={{ workerSrc: "/pdf.worker.js" }}>
          <Page pageNumber={1} width={this.calculateWidth()}/>
        </Document>
      </Styles>
    );
  }
}

export default Resume;
