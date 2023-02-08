import React from "react";
import logo from "../images/LOGO.png";
import agencyLogo from "../images/LOGO-2.png";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <img className="landing-logo" src={logo} alt="logo"></img>
        <div className="landing-line"></div>
        <Link to="/personalInfo">
          <button className="landing-button">
            <div className="landing-button-text">რეზიუმეს დამატება</div>
          </button>
        </Link>
        <img
          className="landing-agency-logo"
          src={agencyLogo}
          alt="agency logo"
        ></img>
      </div>
    );
  }
}

export default Landing;
