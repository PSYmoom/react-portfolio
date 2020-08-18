import React from 'react'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import TimelineInfo from './components/TimelineInfo';
import projectData from './assets/projectData.json';

const Styles = styled.div`
  .vertical-timeline::before{
    background: #1976d2;
  }
  .circle-border{
    box-shadow: 0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .vertical-timeline-element--work .vertical-timeline-element-content {
    border-top: 3px solid #1976d2;
  }
  .badge-pill {
    margin-right: .2em;
    background: #1976d2;
  }
  .btn-outline-primary {
    margin-top: 5px;
    margin-right: .6em;
  }
  .bthContainer{
    display:block;
    margin-top: 5px;
  }
`;

const Projects = () => (
  <Styles>
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
        />
      ))}
    </VerticalTimeline>
    <br/>
  </Styles>
)

export default Projects;
