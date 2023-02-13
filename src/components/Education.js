import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";
import mobile from "../images/mobile.png";
import logo from "../images/cv logo.png";

class Education extends React.Component {
  handleSubmit = (event) => {
    const validateArray = this.props.validateEducation();
    this.props.finishResume(validateArray, event);
  };

  renderEducation = () => {
    return this.props.educationAmount.map((el, index) => {
      return (
        <div className="inputs" key={this.props.educationAmount[index]}>
          {/* input fields */}
          <div className="input-field-place">
            <label
              className={
                !this.props.educationError[index].instituteError
                  ? "education-place"
                  : "education-place error"
              }
            >
              სასწავლებელი
            </label>
            <input
              type="text"
              placeholder="სასწავლებელი"
              className={`education-input-place ${
                this.props.handleSubmit
                  ? !this.props.educationError[index].instituteError
                    ? "education-input-place input-success"
                    : "education-input-place input-error"
                  : ""
              }`}
              onChange={(e) =>
                this.props.saveEducation(
                  e.target.value,
                  e.target.className,
                  index
                )
              }
              value={this.props.education[index].institute}
            ></input>
            <div
              className={
                !this.props.educationError[index].instituteError
                  ? "place-hint"
                  : "place-hint error"
              }
            >
              მინიმუმ 2 სიმბოლო
            </div>
            {this.props.showValidationResults(
              this.props.educationError[index].instituteError
            )}
          </div>
          {/* input field degree */}
          <div className="input-field-degree-endDate">
            <div className="input-field-degree">
              <label
                className={
                  !this.props.educationError[index].degreeError
                    ? "education-degree"
                    : "education-degree error"
                }
              >
                ხარისხი
              </label>
              <select
                className={`education-input-degree ${
                  this.props.handleSubmit
                    ? !this.props.educationError[index].degreeError
                      ? "education-input-degree input-success"
                      : "education-input-degree input-error"
                    : ""
                }`}
                value={this.props.education[index].degree}
                onChange={(e) =>
                  this.props.saveEducation(
                    e.target.value,
                    e.target.className,
                    index
                  )
                }
              >
                {this.props.degrees.map((degree) => (
                  <option key={degree.id} value={degree.title}>
                    {degree.title}
                  </option>
                ))}
              </select>
            </div>
            {/* input field end date */}
            <div className="education-end-date">
              <label
                htmlFor="end"
                className={
                  !this.props.educationError[index].due_dateError
                    ? "education-end"
                    : "education-end error"
                }
              >
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                id="end"
                className={`education-input-end ${
                  this.props.handleSubmit
                    ? !this.props.educationError[index].due_dateError
                      ? "education-input-end input-success"
                      : "education-input-end input-error"
                    : ""
                }`}
                onChange={(e) =>
                  this.props.saveEducation(
                    e.target.value,
                    e.target.className,
                    index
                  )
                }
                value={this.props.education[index].due_date}
              ></input>
            </div>
          </div>
          {/* input field description */}
          <div className="input-field-description-education">
            <label
              className={
                !this.props.educationError[index].descriptionError
                  ? "education-description"
                  : "education-description error"
              }
            >
              აღწერა
            </label>
            <textarea
              type="text"
              placeholder="განათლების აღწერა"
              className={`education-input-description ${
                this.props.handleSubmit
                  ? !this.props.educationError[index].descriptionError
                    ? "education-input-description input-success"
                    : "education-input-description input-error"
                  : ""
              }`}
              onChange={(e) =>
                this.props.saveEducation(
                  e.target.value,
                  e.target.className,
                  index
                )
              }
              value={this.props.education[index].description}
            ></textarea>
          </div>
          <div className="education-line"></div>
        </div>
      );
    });
  };
  render() {
    if (this.props.degrees) {
      return (
        <div className="education">
          <div className="education-input">
            {/* header */}
            <div className="education-header">
              <Link to="/">
                <img
                  className="education-back-arrow"
                  src={arrow}
                  alt="arrow"
                  onClick={this.props.clearSessionStorage}
                ></img>
              </Link>
              <div className="education-header-text">განათლება</div>
              <div className="education-header-page">3/3</div>
            </div>
            <div className="education-header-line"></div>
            <div className="education-resume">
              <div className="info-resume">
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
                  console.log(experience);
                  return (
                    <div key={index} className="experience-experience">
                      <div className="resume-position-employer">
                        <div className="resume-position">
                          {experience.position}
                        </div>
                        <div className="resume-employer">
                          {experience.employer}
                        </div>
                      </div>
                      <div className="resume-calendar">
                        <div className="resume-startDate">
                          {experience.startDate}
                        </div>
                        <div className="calendar-seperator">-</div>
                        <div className="resume-endDate">
                          {experience.endDate}
                        </div>
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
                      <div className="resume-due_date">
                        {education.due_date}
                      </div>
                      <div className="resume-description-education">
                        <div>{education.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img
                src={logo}
                alt="resume logo"
                className="resume-logo-info"
              ></img>
            </div>

            {this.renderEducation()}
            {/* buttons(AddExperience, GoBack, GoToNextPage,) */}
            <div className="button-background">
              <div className="education-add">
                <button
                  className="education-add-button"
                  onClick={this.props.renderAnotherEducation}
                >
                  <div className="education-add-education">
                    სხვა სასწავლებლის დამატება
                  </div>
                </button>
              </div>
              <div className="education-buttons">
                <Link to="/experience">
                  <button className="education-back">
                    <div className="education-back-page">უკან</div>
                  </button>
                </Link>
                <Link to="/resume">
                  <button
                    className="education-next"
                    onClick={(event) => this.handleSubmit(event)}
                  >
                    <div className="education-next-page">დასრულება</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Education;
