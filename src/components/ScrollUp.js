import React, { Component } from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
  .scrollUp{
    border-color: ${props => (props.primaryColor)};
    color: ${props => (props.primaryColor)};
    position: fixed;
    bottom: 10px;
    right: 10px;
    opacity: 0.4;
    animation: appear 1s ease;
    animation-iteration-count: 1;
    &:hover {
      opacity: 1;
      color: ${props => (props.secondaryColor)};
      background-color: ${props => (props.primaryColor)};
      border-color: ${props => (props.primaryColor)};
      animation: wiggle 1s ease;
      animation-iteration-count: 1;
    }
    @keyframes wiggle {
      20% { transform: translateY(6px); }
      40% { transform: translateY(-6px); }
      60% { transform: translateY(4px); }
      80% { transform: translateY(-2px); }
      100% { transform: translateY(0); }
    }
    @keyframes appear {
      0% { opacity: 0; }
      50% { opacity: 0.2; }
      100% { opacity: 0.4; }
    }
  }
`;

class ScrollUp extends Component {
  state = {
    hasScrolled: false
  };

  constructor(props) {
    super(props);
    this.state = { hasScrolled: false };
    this.updateScrolled = this.updateScrolled.bind(this);
  }

  componentDidMount() {
    this.updateScrolled();
    window.addEventListener('scroll', this.updateScrolled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrolled);
  }

  updateScrolled() {
    if (window.pageYOffset > 100 && !this.state.hasScrolled)
      this.setState({ hasScrolled: true })
    else if (window.pageYOffset < 100 && this.state.hasScrolled)
      this.setState({ hasScrolled: false })
  }

  render() {
    if (this.state.hasScrolled) {
      return(
        <Styles
          primaryColor={this.props.button.["Primary Color"].validated}
          secondaryColor={this.props.button.["Secondary Color"].validated}
        >
          <Button
            variant="outline-dark"
            className="scrollUp"
            onClick={() => {window.scrollTo({top: 0, behavior: 'smooth' })}}
          >
            <FontAwesomeIcon
              className="logo-style"
              icon={faChevronUp}
            />
          </Button>
        </Styles>
      );
    } else {
      return <React.Fragment />
    }

  }
}

export default ScrollUp;
