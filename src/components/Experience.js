import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

class Experience extends React.Component {
  handleSubmit = (event) => {
    const validateArray = this.props.validateExperience();
    this.props.nextPageEducation(validateArray, event);
  };

  renderExperience = () => {
    return this.props.experienceAmount.map((el, index) => {
      return (
        <div className="inputs" key={this.props.experienceAmount[index]}>
          {/* input fields */}
          <div className="input-field-position">
            <label
              className={
                !this.props.experiencesError[index].positionError
                  ? "experience-position"
                  : "experience-position error"
              }
            >
              თანამდებობა
            </label>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              className={`experience-input-position ${
                this.props.handleSubmit
                  ? !this.props.experiencesError[index].positionError
                    ? "experience-input-position input-success"
                    : "experience-input-position input-error"
                  : ""
              }`}
              onChange={(e) =>
                this.props.saveExperience(
                  e.target.value,
                  e.target.className,
                  index
                )
              }
              value={this.props.experiences[index].position}
            ></input>

            <div
              className={
                !this.props.experiencesError[index].positionError
                  ? "position-hint"
                  : "position-hint error"
              }
            >
              მინიმუმ 2 სიმბოლო
            </div>
            {this.props.showValidationResultExperience(
              this.props.experiencesError[index].positionError
            )}
          </div>

          {/* input field employer */}
          <div className="input-field-employer">
            <label
              className={
                !this.props.experiencesError[index].employerError
                  ? "experience-employer"
                  : "experience-employer error"
              }
            >
              დამსაქმებელი
            </label>
            <input
              type="text"
              placeholder="დამსაქმებელი"
              className="experience-input-employer"
              onChange={(e) =>
                this.props.saveExperience(
                  e.target.value,
                  e.target.className,
                  index
                )
              }
              value={this.props.experiences[index].employer}
            ></input>
            <div
              className={
                !this.props.experiencesError[index].employerError
                  ? "employer-hint"
                  : "employer-hint error"
              }
            >
              მინიმუმ 2 სიმბოლო
            </div>
            {this.props.showValidationResultExperience(
              this.props.experiencesError[index].employerError
            )}
          </div>

          {/* input field calendar */}
          <div className="experience-calendar">
            <div className="experience-start-date">
              <label
                htmlFor="start"
                className={
                  !this.props.experiencesError[index].startDateError
                    ? "experience-start"
                    : "experience-start error"
                }
              >
                დაწყების რიცხვი
              </label>
              <input
                type="date"
                id="start"
                className="experience-input-start"
                onChange={(e) =>
                  this.props.saveExperience(
                    e.target.value,
                    e.target.className,
                    index
                  )
                }
                value={this.props.experiences[index].startDate}
              ></input>
            </div>
            <div className="experience-end-date">
              <label
                htmlFor="end"
                className={
                  !this.props.experiencesError[index].endDateError
                    ? "experience-end"
                    : "experience-end error"
                }
              >
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                id="end"
                className="experience-input-end"
                onChange={(e) =>
                  this.props.saveExperience(
                    e.target.value,
                    e.target.className,
                    index
                  )
                }
                value={this.props.experiences[index].endDate}
              ></input>
            </div>
          </div>
          {/* Description */}
          <div className="input-field-description">
            <label
              className={
                !this.props.experiencesError[index].descriptionError
                  ? "experience-description"
                  : "experience-description error"
              }
            >
              აღწერა
            </label>
            <textarea
              type="text"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              className="experience-input-description"
              onChange={(e) =>
                this.props.saveExperience(
                  e.target.value,
                  e.target.className,
                  index
                )
              }
              value={this.props.experiences[index].description}
            ></textarea>
          </div>
          <div className="experience-line"></div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="experience">
        <div className="experience-input">
          {/* header */}
          <div className="experience-header">
            <Link to="/">
              <img
                className="experience-back-arrow"
                src={arrow}
                alt="arrow"
                onClick={this.props.clearSessionStorage}
              ></img>
            </Link>
            <div className="experience-header-text">გამოცდილება</div>
            <div className="experience-header-page">2/3</div>
          </div>
          <div className="experience-header-line"></div>
          {this.renderExperience()}
          {/* buttons(AddExperience, GoBack, GoToNextPage,) */}
          <div className="button-background">
            <div className="experience-add">
              <button
                className="experience-add-button"
                onClick={this.props.renderAnotherExperience}
              >
                <div className="experience-add-experience">
                  მეტი გამოცდილების დამატება
                </div>
              </button>
            </div>
            <div className="experience-buttons">
              <button className="experience-back">
                <div className="experience-back-page">უკან</div>
              </button>
              <Link to="/">
                <button
                  className="experience-next"
                  onClick={(event) => this.handleSubmit(event)}
                >
                  <div className="experience-next-page">შემდეგი</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="experience-resume"></div>
      </div>
    );
  }
}

export default Experience;
