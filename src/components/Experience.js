import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

class Experience extends React.Component {
  renderExperience = () => {
    return this.props.experience.map((el, ind) => {
      return (
        <div className="inputs" key={this.props.experience[ind]}>
          {/* input fields */}
          <div className="input-field-position">
            <label className="experience-position">თანამდებობა</label>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              className="experience-input-position"
            ></input>
            <div className="position-hint">მინიმუმ 2 სიმბოლო</div>
          </div>

          {/* input field employer */}
          <div className="input-field-employer">
            <label className="experience-employer">დამსაქმებელი</label>
            <input
              type="text"
              placeholder="დამსაქმებელი"
              className="experience-input-employer"
            ></input>
            <div className="employer-hint">მინიმუმ 2 სიმბოლო</div>
          </div>

          {/* input field calendar */}
          <div className="experience-calendar">
            <div className="experience-start-date">
              <label htmlFor="start" className="experience-start">
                დაწყების რიცხვი
              </label>
              <input
                type="date"
                id="start"
                className="experience-input-start"
              ></input>
            </div>
            <div className="experience-end-date">
              <label htmlFor="end" className="experience-end">
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                id="end"
                className="experience-input-end"
              ></input>
            </div>
          </div>
          {/* Description */}
          <div className="input-field-description">
            <label className="experience-description">აღწერა</label>
            <textarea
              type="text"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              className="experience-input-description"
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
              <button className="experience-next">
                <div className="experience-next-page">შემდეგი</div>
              </button>
            </div>
          </div>
        </div>
        <div className="experience-resume"></div>
      </div>
    );
  }
}

export default Experience;
