import React from "react";
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
import mobile from "../images/mobile.png";
import logo from "../images/cv logo.png";

class PersonalInfo extends React.Component {
  handleSubmit = (event) => {
    const isValidate = this.props.validatePersonalInfo();
    this.props.nextPage(isValidate, event);
  };

  render() {
    return (
      <div className="personal-info">
        <div className="input-personal-info">
          {/* header */}
          <Link to="/">
            <img
              className="back-arrow"
              src={arrow}
              alt="arrow"
              onClick={this.props.clearSessionStorage}
            ></img>
          </Link>
          <div className="header-text">პირადი ინფო</div>
          <div className="header-page">1/3</div>
          <div className="header-line"></div>

          {/* input fields */}
          <div className="input-field-name">
            <label
              className={
                !this.props.nameError
                  ? "personal-info-name"
                  : "personal-info-name error"
              }
            >
              სახელი
            </label>
            <input
              type="text"
              placeholder="ანზორ"
              className={`personal-input-name ${
                this.props.handleSubmit
                  ? !this.props.nameError
                    ? "personal-input-name input-success"
                    : "personal-input-name input-error"
                  : ""
              }`}
              value={this.props.name ? this.props.name : ""}
              onChange={(e) =>
                this.props.saveInfo(e.target.value, e.target.className)
              }
            ></input>
            <div
              className={
                !this.props.nameError ? "name-hint" : "name-hint error"
              }
            >
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </div>
            {this.props.showValidationResult(this.props.nameError)}
          </div>

          {/* input field lastName */}
          <div className="input-field-lastname">
            <label
              className={
                !this.props.lastNameError
                  ? "personal-info-lastname"
                  : "personal-info-lastname error"
              }
            >
              გვარი
            </label>
            <input
              type="text"
              placeholder="მუმლაძე"
              className={`personal-input-lastname ${
                this.props.handleSubmit
                  ? !this.props.lastNameError
                    ? "personal-input-lastName input-success"
                    : "personal-input-lastName input-error"
                  : ""
              }`}
              value={this.props.lastName ? this.props.lastName : ""}
              onChange={(e) =>
                this.props.saveInfo(e.target.value, e.target.className)
              }
            ></input>
            <div
              className={
                !this.props.lastNameError
                  ? "lastname-hint"
                  : "lastname-hint error"
              }
            >
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </div>
            {this.props.showValidationResult(this.props.lastNameError)}
          </div>

          {/* upload photo */}
          <div
            className={
              !this.props.imageError
                ? "personal-upload-photo"
                : "personal-upload-photo error"
            }
          >
            პირადი ფოტოს ატვრითვა
          </div>
          <button className="personal-upload-button">
            <input
              type="file"
              id="image"
              className="personal-upload-image"
              name="image"
              onChange={(e) => this.props.saveInfo(e, e.target.className)}
            ></input>
            <label htmlFor="image" className="upload-image">
              ატვირთვა
            </label>
          </button>

          {/* general info */}
          <div className="input-field-info">
            <label className="personal-general-info">
              ჩემ შესახებ (არასავალდებულო)
            </label>
            <textarea
              type="text"
              placeholder="ზოგადი ინფო შენ შესახებ"
              className="personal-input-info"
              value={this.props.generalInfo ? this.props.generalInfo : ""}
              onChange={(e) =>
                this.props.saveInfo(e.target.value, e.target.className)
              }
            ></textarea>
          </div>

          {/* email input */}
          <div className="input-field-email">
            <label
              className={
                !this.props.emailError
                  ? "personal-info-email"
                  : "personal-info-email error"
              }
            >
              ელ.ფოსტა
            </label>
            <input
              type="text"
              placeholder="anzor666@redberry.ge"
              className={`personal-input-email ${
                this.props.handleSubmit
                  ? !this.props.emailError
                    ? "personal-input-email input-success"
                    : "personal-input-email input-error"
                  : ""
              }`}
              value={this.props.email ? this.props.email : ""}
              onChange={(e) =>
                this.props.saveInfo(e.target.value, e.target.className)
              }
            ></input>
            <div
              className={
                !this.props.emailError ? "email-hint" : "email-hint error"
              }
            >
              უნდა მთავრდებოდეს @redberry.ge-ით
            </div>
            {this.props.showValidationResult(this.props.emailError)}
          </div>

          {/* mobile input */}
          <div className="input-field-mobile">
            <label
              className={
                !this.props.mobileError
                  ? "personal-info-mobile"
                  : "personal-info-mobile error"
              }
            >
              მობილურის ნომერი
            </label>
            <input
              type="text"
              placeholder="+995 551 12 34 56"
              className={`personal-input-mobile ${
                this.props.handleSubmit
                  ? !this.props.mobileError
                    ? "personal-input-mobile input-success"
                    : "personal-input-mobile input-error"
                  : ""
              }`}
              value={this.props.mobile ? this.props.mobile : ""}
              onChange={(e) =>
                this.props.saveInfo(e.target.value, e.target.className)
              }
            ></input>
            <div
              className={
                !this.props.mobileError ? "mobile-hint" : "mobile-hint error"
              }
            >
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </div>
            {this.props.showValidationResult(this.props.mobileError)}
          </div>

          {/* go to next page if everything is correct*/}
          <Link to="/experience">
            <button
              className="next-button"
              onClick={(event) => this.handleSubmit(event)}
            >
              <div className="next">შემდეგი</div>
            </button>
          </Link>
        </div>
        <div className="personal-info-resume">
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
          <img src={logo} alt="resume logo" className="resume-logo-info"></img>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
