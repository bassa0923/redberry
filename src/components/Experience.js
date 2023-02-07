import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

class Experience extends React.Component {
  render() {
    return (
      <div>
        {/* header */}
        <Link to="/">
          <img
            className="back-arrow"
            src={arrow}
            alt="arrow"
            onClick={this.props.clearSessionStorage}
          ></img>
        </Link>
        <div className="header-text">გამოცდილება</div>
        <div className="header-page">2/3</div>
        <div className="header-line"></div>
      </div>
    );
  }
}

export default Experience;
