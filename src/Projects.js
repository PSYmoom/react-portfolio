import React from 'react'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import TimelineInfo from './components/TimelineInfo';
import projectData from './assets/projectData.json';

const Styles = styled.div`
  .vertical-timeline::before{
    background: ${props => (props.borderColor)};
  }
  .circle-border{
    box-shadow: inset 0 2px 0 rgba(0,0,0,0.08),0 3px 0 0 rgba(0,0,0,0.05);
    border: ${props => ("4px solid" + props.borderColor)}
  }
  .vertical-timeline-element--work .vertical-timeline-element-content {
    border-top: ${props => ("5px solid " + props.borderColor)};
  }
  .badge-pill {
    margin-right: .2em;
    background: ${props => (props.borderColor)};
  }
  .btn-outline-dark {
    margin-top: 5px;
    margin-right: .6em;
    border-color: ${props => (props.primaryColor)};
    color: ${props => (props.primaryColor)};
    &:hover {
      color: ${props => (props.secondaryColor)};
      background-color: ${props => (props.primaryColor)};
      border-color: ${props => (props.primaryColor)};
    }
  }
  .btnContainer{
    display: block;
    margin-top: 5px;
  }
`;

const Projects = (props) => (
  <Styles
    borderColor={props.others.["Border Color"].validated}
    primaryColor={props.button.["Primary Color"].validated}
    secondaryColor={props.button.["Secondary Color"].validated}
  >
    <h2>Projects</h2>
    <br/>
    <VerticalTimeline layout='1-column'>
      {projectData.map(data => (
        <TimelineInfo
          key={data.id}
          id={data.id}
          date={data.date}
          title={data.title}
          reason={data.reason}
          tools={Array.from(data.tools)}
          details={Array.from(data.details)}
          links={Array.from(data.links)}
          backgroundColor={props.others.["Background Color"].validated}
        />
      ))}
    </VerticalTimeline>
    <br/>
  </Styles>
)

export default Projects;
