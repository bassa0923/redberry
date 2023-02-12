import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

class Education extends React.Component {
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
            ></input>
            <div className="place-hint">მინიმუმ 2 სიმბოლო</div>
          </div>
          {/* input field quality */}
          <div className="input-field-quanity-endDate">
            <div className="input-field-quaity">
              <label className="education-quality">ხარისხი</label>
              <input
                type="text"
                placeholder="აირჩიე ხარისხი"
                className="education-input-quality"
              ></input>
            </div>
            {/* input field end date */}
            <div className="education-end-date">
              <label htmlFor="end" className="education-end">
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                id="end"
                className="experience-input-end"
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
            ></textarea>
          </div>
          <div className="education-line"></div>
        </div>
      );
    });
  };
  render() {
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
              <button className="education-add-button">
                <div className="education-add-education">
                  სხვა სასწავლებლის დამატება
                </div>
              </button>
            </div>
            <div className="education-buttons">
              <button className="education-back">
                <div className="education-back-page">უკან</div>
              </button>
              {/* <Link to="/education"> */}
              <button className="education-next">
                <div className="education-next-page">დასრულება</div>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="experience-resume"></div>
      </div>
    );
  }
}

export default Education;
