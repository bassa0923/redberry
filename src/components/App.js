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

    // Add Experience Input Field
    experienceAmount: [1],

    // Experience Input Fields
    experiences: [
      {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    // ExperiencesError
    experiencesError: [
      {
        positionError: "",
        employerError: "",
        startDateError: "",
        endDateError: "",
        descriptionError: "",
      },
    ],
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

    // Get Experience
    let experiences = JSON.parse(window.sessionStorage.getItem("experiences"));

    // If experience exists
    if (experiences) {
      this.setState({
        experiences,
      });
    }

    // Get Experience Amount
    let experienceAmount = JSON.parse(
      window.sessionStorage.getItem("experienceAmount")
    );

    // If experienceAmount exists
    if (experienceAmount) {
      this.setState({
        experienceAmount,
      });
    }

    // Get Experiences Error Array
    let experiencesError = JSON.parse(
      window.sessionStorage.getItem("experiencesError")
    );

    // If experiencesErro exist
    if (experiencesError) {
      this.setState({
        experiencesError,
      });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    // Save handlesubmit click number for showing Error or Success message(image)
    if (this.state.handleSubmit !== prevState.handleSubmit) {
      this.showValidationResult();
    }

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

    // Saving Experience Array of Object At Session Storage!
    if (this.state.experiences !== prevState.experiences) {
      window.sessionStorage.setItem(
        "experiences",
        JSON.stringify(this.state.experiences)
      );
    }

    // Saving Amount Of added experiences And Updating Index Of Experience in state
    if (this.state.experienceAmount !== prevState.experienceAmount) {
      window.sessionStorage.setItem(
        "experienceAmount",
        JSON.stringify(this.state.experienceAmount)
      );
    }

    // Saving experienceErrorArray state At session Storage!
    if (this.state.experiencesError !== prevState.experiencesError) {
      window.sessionStorage.setItem(
        "experiencesError",
        JSON.stringify(this.state.experiencesError)
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

  renderAnotherExperience = () => {
    // Add extra experience input field

    // 1) Get state, store in new variable, add 1
    let experienceAmount = [
      ...this.state.experienceAmount,
      this.state.experienceAmount.length + 1,
    ];

    // 3) Update state with same variable
    this.setState({
      experienceAmount,
    });

    // 4) Update experiences object

    // 1) create object which i want to add in state
    let object = {
      position: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    // 2) creating copy of existing state and adding new object
    let experiences = [...this.state.experiences, object];

    // 3) updating state
    this.setState({
      experiences,
    });

    // Update experienceError Object

    // 1) create object error
    let objectError = {
      positionError: "",
      employerError: "",
      startDateError: "",
      endDateError: "",
      descriptionError: "",
    };

    // 2) Create copy of existing objectError
    let experiencesError = [...this.state.experiencesError, objectError];

    // 3) Update State
    this.setState({
      experiencesError,
    });
  };

  saveExperience = (value, name, index) => {
    // Save Customer Experience

    // 1) Make a copy of existing obj
    let experiences = [...this.state.experiences];

    // 2) Get Value from Experience
    if (name.startsWith("experience-input-position")) {
      experiences[index].position = value;
    }
    if (name.startsWith("experience-input-employer")) {
      experiences[index].employer = value;
    }
    if (name.startsWith("experience-input-start")) {
      experiences[index].startDate = value;
    }
    if (name.startsWith("experience-input-end")) {
      experiences[index].endDate = value;
    }
    if (name.startsWith("experience-input-description")) {
      experiences[index].description = value;
    }

    // 3) Update State Of Experience And Index
    this.setState({
      experiences,
    });
  };

  validateExperience = () => {
    // 1) Create copy of existing Experience and experiencesError in state
    let experiences = [...this.state.experiences];
    let experiencesError = [...this.state.experiencesError];
    experiences.forEach((experience, i) => {
      // if Error set it to true
      if (experience.position.length < 2) {
        experiencesError[i].positionError = true;
      }
      if (experience.employer.length < 2) {
        experiencesError[i].employerError = true;
      }
      if (experience.startDate === "") {
        experiencesError[i].startDateError = true;
      }
      if (experience.endDate === "") {
        experiencesError[i].endDateError = true;
      }
      if (experience.description === "") {
        experiencesError[i].descriptionError = true;
      }

      // If no error set it to false
      if (experience.position.length >= 2) {
        experiencesError[i].positionError = false;
      }
      if (experience.employer.length >= 2) {
        experiencesError[i].employerError = false;
      }
      if (experience.startDate) {
        experiencesError[i].startDateError = false;
      }
      if (experience.endDate) {
        experiencesError[i].endDateError = false;
      }
      if (experience.description.length) {
        experiencesError[i].descriptionError = false;
      }
    });
    this.setState({
      experiencesError,
    });
    // Return true if there is no Error
    let result = experiencesError.map((experienceError, i) => {
      if (
        !experienceError.positionError &&
        !experienceError.employerError &&
        !experienceError.startDateError &&
        !experienceError.endDateError &&
        !experienceError.descriptionError
      ) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  };

  nextPageEducation = (validateArray, event) => {
    let experiences = [...this.state.experiences];
    let result = [...validateArray];
    let validation = false;

    this.setState({
      handleSubmit: true,
    });
    result.forEach((el, i) => {
      if (el === true) {
        validation = true;
        return;
      }
    });

    // If there is one array and and there is error Prevent Default!
    if (validateArray.length === 1 && validateArray[0] === false) {
      event.preventDefault();
    }
    // If there is more than One Array
    if (validateArray.length > 1) {
      validateArray.forEach((validationResult, i) => {
        if (validationResult === true) {
          return;
        }
        if (validation === false) {
          event.preventDefault();
        }
        if (validationResult === false) {
          if (
            experiences[i].position !== "" ||
            experiences[i].employer !== "" ||
            experiences[i].startDate !== "" ||
            experiences[i].endDate !== "" ||
            experiences[i].description !== ""
          )
            event.preventDefault();
        }
      });
    }
  };

  showValidationResultExperience = (error) => {
    if (this.state.handleSubmit) {
      if (error) {
        return (
          <img
            src={errorImage}
            alt="error"
            className="experience-error-result"
          ></img>
        );
      }
      return (
        <img
          src={successImage}
          alt="success"
          className="experience-success-result"
        ></img>
      );
    }
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
            <Route
              path="/experience"
              exact
              element={
                <Experience
                  // Render Experience Page
                  experienceAmount={this.state.experienceAmount}
                  renderAnotherExperience={this.renderAnotherExperience}
                  // Info On Experiences
                  experiences={this.state.experiences}
                  saveExperience={this.saveExperience}
                  experiencesError={this.state.experiencesError}
                  // ErrorDetector
                  validateExperience={this.validateExperience}
                  // Go to next Page (Education)
                  nextPageEducation={this.nextPageEducation}
                  // Handle Submit
                  handleSubmit={this.state.handleSubmit}
                  showValidationResultExperience={
                    this.showValidationResultExperience
                  }
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
