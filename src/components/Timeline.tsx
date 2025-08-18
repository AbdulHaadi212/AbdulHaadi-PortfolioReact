import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container" id="timeline">
        <h1 style={{ textAlign: "center" }}>Experience</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2025 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Neksoft</h4>
            <p>
              Frontend Development, Backend Development, RESTful APIs, NESTJS, MERN-Stack
            </p>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Mar 2024 - Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IEEE Computational Intelligence Society-SSUET</h4>
            <p>
              Full-stack Web Development, High Achievers, WebSite Competition
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
