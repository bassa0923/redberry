import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import PersonalInfo from "./PersonalInfo";
import "../app.css";
import errorImage from "../images/error.png";
import successImage from "../images/success.png";
import Experience from "./Experience";

class App extends React.Component {
  state = {
    // personal info
    name: "",
    lastName: "",
    image: "",
    generalInfo: "",
    email: "",
    mobile: "",

    // personal info ERROR!
    nameError: "",
    lastNameError: "",
    imageError: "",
    emailError: "",
    mobileError: "",

    // handleSubmit
    handleSubmit: false,
    back: false,
  };

  // Creating Inital State
  initialState = this.state;

  UNSAFE_componentWillMount() {
    // Get data from sessionStorage
    let name = JSON.parse(window.sessionStorage.getItem("name"));
    let lastName = JSON.parse(window.sessionStorage.getItem("lastName"));
    let generalInfo = JSON.parse(window.sessionStorage.getItem("generalInfo"));
    let image = JSON.parse(window.sessionStorage.getItem("image"));
    let email = JSON.parse(window.sessionStorage.getItem("email"));
    let mobile = JSON.parse(window.sessionStorage.getItem("mobile"));

    // Update state with that data
    this.setState({
      name,
      lastName,
      image,
      generalInfo,
      email,
      mobile,
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    // Save handlesubmit click number for showing Error or Success message(image)
    if (this.state.handleSubmit !== prevState.handleSubmit) {
      this.showValidationResult();
    }

    // if state is changed, store at sessionStorage
    if (this.state.name !== prevState.name) {
      window.sessionStorage.setItem("name", JSON.stringify(this.state.name));
    }
    if (this.state.lastName !== prevState.lastName) {
      window.sessionStorage.setItem(
        "lastName",
        JSON.stringify(this.state.lastName)
      );
    }
    if (this.state.image !== prevState.image) {
      window.sessionStorage.setItem("image", JSON.stringify(this.state.image));
    }
    if (this.state.generalInfo !== prevState.generalInfo) {
      window.sessionStorage.setItem(
        "generalInfo",
        JSON.stringify(this.state.generalInfo)
      );
    }
    if (this.state.email !== prevState.email) {
      window.sessionStorage.setItem("email", JSON.stringify(this.state.email));
    }
    if (this.state.mobile !== prevState.mobile) {
      window.sessionStorage.setItem(
        "mobile",
        JSON.stringify(this.state.mobile)
      );
    }
  }

  saveInfo = (value, name) => {
    // Update and Store data in state
    if (name.startsWith("personal-input-name")) {
      this.setState({
        name: value,
      });
    }
    if (name.startsWith("personal-input-lastname")) {
      this.setState({
        lastName: value,
      });
    }
    if (name.startsWith("personal-input-info")) {
      this.setState({
        generalInfo: value,
      });
    }
    if (name.startsWith("personal-input-email")) {
      this.setState({
        email: value,
      });
    }
    if (name.startsWith("personal-input-mobile")) {
      this.setState({
        mobile: value,
      });
    }

    if (name.startsWith("personal-upload-image")) {
      if (value.target.files && value.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({ image: e.target.result });
        };
        reader.readAsDataURL(value.target.files[0]);
      }
    }
  };

  validatePersonalInfo = () => {
    let nameError = "";
    let lastNameError = "";
    let imageError = "";
    let emailError = "";
    let mobileError = "";

    // Validation
    // Name Validation
    if (!/^[ა-ჰ]+$/.test(this.state.name) || this.state.name.length < 2) {
      nameError = true;
    }
    // lastName Validation
    if (
      !/^[ა-ჰ]+$/.test(this.state.lastName) ||
      this.state.lastName.length < 2
    ) {
      lastNameError = true;
    }
    // Image Validation
    if (this.state.image === "") {
      imageError = true;
    }
    // Email Validation
    if (!/^\S+@redberry.ge$/.test(this.state.email)) {
      emailError = true;
    }
    // Mobile Validation
    if (!/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/.test(this.state.mobile)) {
      mobileError = true;
    }

    // Updating Error State
    this.setState({
      nameError,
      lastNameError,
      imageError,
      emailError,
      mobileError,
    });

    if (
      nameError === "" &&
      lastNameError === "" &&
      imageError === "" &&
      emailError === "" &&
      mobileError === ""
    ) {
      return true;
    }
    return false;
  };

  nextPage = (isValidate, event) => {
    if (!isValidate) {
      event.preventDefault();
      this.setState({
        handleSubmit: true,
      });
    } else {
      this.setState({
        handleSubmit: false,
      });
    }
  };

  showValidationResult = (error) => {
    if (this.state.handleSubmit) {
      if (error) {
        return (
          <img src={errorImage} alt="error" className="error-result"></img>
        );
      }
      return (
        <img src={successImage} alt="success" className="success-result"></img>
      );
    }
  };

  clearSessionStorage = () => {
    sessionStorage.clear();
    this.setState(this.initialState);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route
              path="/personalInfo"
              exact
              element={
                <PersonalInfo
                  // Personal Info
                  name={this.state.name}
                  lastName={this.state.lastName}
                  image={this.state.image}
                  generalInfo={this.state.generalInfo}
                  email={this.state.email}
                  mobile={this.state.mobile}
                  // Personal Info Errors
                  nameError={this.state.nameError}
                  lastNameError={this.state.lastNameError}
                  imageError={this.state.imageError}
                  emailError={this.state.emailError}
                  mobileError={this.state.mobileError}
                  validatePersonalInfo={this.validatePersonalInfo}
                  // functions (Saving info and Going to next page)
                  saveInfo={this.saveInfo}
                  nextPage={this.nextPage}
                  // handleSubmit
                  handleSubmit={this.state.handleSubmit}
                  showValidationResult={this.showValidationResult}
                  // Clear Session Storage
                  clearSessionStorage={this.clearSessionStorage}
                />
              }
            />
            <Route path="/experience" exact element={<Experience />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
