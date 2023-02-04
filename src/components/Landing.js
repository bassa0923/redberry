import React from "react";
import logo from "../images/LOGO.png";
import agencyLogo from "../images/LOGO-2.png";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <img className="landing-logo" src={logo} alt="logo"></img>
        <div className="line"></div>
        <button className="landing-button">
          <text className="landing-button-text">რეზიუმეს დამატება</text>
        </button>
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
