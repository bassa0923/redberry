import React from "react";
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
import logo from "../images/cv logo.png";
import mobile from "../images/mobile.png";
class Resume extends React.Component {
  render() {
    return (
      <div className="resume-page">
        <Link to="/">
          <img
            className="resume-back-arrow"
            src={arrow}
            alt="arrow"
            onClick={this.props.clearSessionStorage}
          ></img>
        </Link>

        <div className="resume">
          <div className="resume-info">
            <div className="resume-name-lastName">
              <div className="resume-name">{this.props.name}</div>
              <div className="resume-lastName">{this.props.lastName}</div>
            </div>
            <div className="email">
              <div className="resume-email-at">@</div>
              <div className="resume-email">{this.props.email}</div>
            </div>
            <div className="mobile">
              <img
                className="resume-mobile-image"
                alt="mobile logo"
                src={mobile}
              ></img>
              <div className="resume-mobile">{this.props.mobile}</div>
            </div>

            <img
              alt="customer"
              src={this.props.image}
              className="resume-image"
            ></img>
            <div className="resume-myself">ჩემს შესახებ</div>
            <div className="resume-general-info">
              <div>{this.props.generalInfo}</div>
            </div>
          </div>
          <div className="resume-line"></div>
          <div className="resume-experience">
            <div className="resume-experiences"></div>
            <div className="experience-text">გამოცდილება</div>
            {this.props.experiences.map((experience, index) => {
              return (
                <div key={index} className="experience-experience">
                  <div className="resume-position-employer">
                    <div className="resume-position">{experience.position}</div>
                    <div className="resume-employer">{experience.employer}</div>
                  </div>
                  <div className="resume-calendar">
                    <div className="resume-startDate">
                      {experience.startDate}
                    </div>
                    <div className="calendar-seperator">-</div>
                    <div className="resume-endDate">{experience.endDate}</div>
                  </div>
                  <div className="resume-description">
                    <div>{experience.description}</div>
                  </div>
                </div>
              );
            })}
            <div className="resume-line-experience"></div>
            <div className="education-text">განათლება</div>
            {this.props.education.map((education, index) => {
              return (
                <div key={index} className="education-education">
                  <div className="resume-institute-dueDate">
                    <div className="resume-institute">
                      {education.institute}
                    </div>
                    <div className="resume-degree">{education.degree}</div>
                  </div>
                  <div className="resume-due_date">{education.due_date}</div>
                  <div className="resume-description-education">
                    <div>{education.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <img src={logo} alt="resume logo" className="resume-logo"></img>
        </div>
      </div>
    );
  }
}

export default Resume;
