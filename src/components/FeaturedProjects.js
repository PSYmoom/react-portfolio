import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Styles = styled.div`
  .slide-style {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    height: 300px;
    max-height: 100vh;
    background: linear-gradient(
      128deg,
      rgba(225, 225, 225, 1) 0%,
      ${props => (props.backgroundColor)} 100%
    );
  }
`;

function FeaturedProjects(props) {
  const [sliderRef] = useKeenSlider({ loop: true });

  return (
    <Styles
      backgroundColor={props.container.["Background Color"].validated}
    >
      <h2>Featured Projects</h2>
      <p className="paragraph">
        Here are some of the projects I had a blast working on.
      </p>
      <div ref={sliderRef} className="keen-slider">
        <Link to="/projects#7" className="keen-slider__slide slide-style">MinecraftBot</Link>
        <Link to="/projects#6" className="keen-slider__slide slide-style">CarePost</Link>
        <Link to="/projects#5" className="keen-slider__slide slide-style">Offroad Vehicle</Link>
        <Link to="/projects#3" className="keen-slider__slide slide-style">F1 in Schools</Link>
        <Link to="/projects#1" className="keen-slider__slide slide-style">Kirby Saves Christmas</Link>
      </div>
    </Styles>
  );
}

export default FeaturedProjects;
