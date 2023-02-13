import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

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
            <label className="education-place">სასწავლებელი</label>
            <input
              type="text"
              placeholder="სასწავლებელი"
              className="education-input-place"
              onChange={(e) =>
                this.props.saveEducation(
                  e.target.value,
                  e.target.className,
                  index
                )
              }
              value={this.props.education[index].institute}
            ></input>
            <div className="place-hint">მინიმუმ 2 სიმბოლო</div>
          </div>
          {/* input field degree */}
          <div className="input-field-degree-endDate">
            <div className="input-field-degree">
              <label className="education-degree">ხარისხი</label>
              <select
                className="education-input-degree"
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
              <label htmlFor="end" className="education-end">
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                id="end"
                className="education-input-end"
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
            <label className="education-description">აღწერა</label>
            <textarea
              type="text"
              placeholder="განათლების აღწერა"
              className="education-input-description"
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
                <button className="education-back">
                  <div className="education-back-page">უკან</div>
                </button>
                <Link to="/">
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
          <div className="education-resume"></div>
        </div>
      );
    }
    return null;
  }
}

export default Education;
