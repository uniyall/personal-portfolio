import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#172554">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Somerville School, Delhi, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School Diploma
          </h4>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SRMIST, Chennai, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's in Technology Degree
          </h4>

          <p>Artificial Intelligence</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2020 - Sep 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Analyst Intern - Infinity Foundation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            <ul>
              <li>
                Spearheaded research and data analysis, translating Findings
                into impactful reports, articles, and social media strategies
              </li>
              <li>
                Orchestrated a remarkable 3X growth in Instagram followers
                within 6 months
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
