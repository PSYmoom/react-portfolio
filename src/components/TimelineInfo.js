import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Icon from './Icon';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

//Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

function TimelineInfo(props){
  return(
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f8f7fc', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #f8f7fc' }}
        date={props.date}
        iconClassName="circle-border"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon />}
      >
        <h5 display="flex">
          {props.tools.map(tool => (
            <Badge pill variant="dark">{tool}</Badge>
          ))}
        </h5>
        <h3 className="vertical-timeline-element-title">{props.title}</h3>
        <h5 className="vertical-timeline-element-subtitle"><i>{props.reason}</i></h5>
        <p>
          {props.details.map(line => (
            <React.Fragment>
              {line} <br />
            </React.Fragment>
          ))}
          <div className="bthContainer">
            {props.links.map(element => (
              <Button variant="outline-primary" href={element.link} size="sm">{element.desc}</Button>
            ))}
          </div>
        </p>
      </VerticalTimelineElement>
  )
};

export default TimelineInfo;
//{props.details[0] + "\n"} <br />
//{props.details[1]} <br />
