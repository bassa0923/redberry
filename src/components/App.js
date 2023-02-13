import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import PersonalInfo from "./PersonalInfo";
import "../app.css";
import errorImage from "../images/error.png";
import successImage from "../images/success.png";
import Experience from "./Experience";
import Education from "./Education";
import Resume from "./Resume";

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

    // Degrees
    degrees: [],
    selectedDegree: false,
    // Education
    education: [
      {
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      },
    ],
    educationError: [
      {
        instituteError: "",
        degreeError: "",
        due_dateError: "",
        descriptionError: "",
      },
    ],
    // Amount of Education
    educationAmount: [1],
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

    // Get Education
    let education = JSON.parse(window.sessionStorage.getItem("education"));

    // If education exists save it at state
    if (education) {
      this.setState({
        education,
      });
    }
    // Get Education Amount
    let educationAmount = JSON.parse(
      window.sessionStorage.getItem("educationAmount")
    );

    // If educationAmount exists
    if (educationAmount) {
      this.setState({
        educationAmount,
      });
    }

    let educationError = JSON.parse(
      window.sessionStorage.getItem("educationError")
    );

    // If experiencesErro exist
    if (educationError) {
      this.setState({
        educationError,
      });
    }
  }

  componentDidMount() {
    this.getDegreesData();
  }
  getDegreesData = async () => {
    // Get Data from api
    const degreesRespone = await fetch(
      "https://resume.redberryinternship.ge/api/degrees"
    );
    const degrees = await degreesRespone.json();

    // Store it In State
    this.setState({
      degrees,
    });
  };

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

    // Saving Amount Of added experiences
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

    // Saving Education Array of Object at session Storage!
    if (this.state.education !== prevState.education) {
      window.sessionStorage.setItem(
        "education",
        JSON.stringify(this.state.education)
      );
    }
    // Saving Amount Of added education
    if (this.state.educationAmount !== prevState.educationAmount) {
      window.sessionStorage.setItem(
        "educationAmount",
        JSON.stringify(this.state.educationAmount)
      );
    }
    // Saving education Error Array state At session Storage!
    if (this.state.educationError !== prevState.educationError) {
      window.sessionStorage.setItem(
        "educationError",
        JSON.stringify(this.state.educationError)
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

    // 3) Update state
    this.setState({
      experienceAmount,
    });

    // Update experiencesError object

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

  showValidationResults = (error) => {
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

  changeValue = (event) => {
    this.setState({
      selectedDegree: event.target.value,
    });
  };

  saveEducation = (value, name, index) => {
    // Save Customer Education

    // 1) Make a copy of existing obj
    let education = [...this.state.education];

    // 2) Get Value from Experience
    if (name.startsWith("education-input-place")) {
      education[index].institute = value;
    }
    if (name.startsWith("education-input-degree")) {
      education[index].degree = value;
    }
    if (name.startsWith("education-input-end")) {
      education[index].due_date = value;
    }
    if (name.startsWith("education-input-description")) {
      education[index].description = value;
    }

    // 3) Update State Of Experience And Index
    this.setState({
      education,
    });
  };

  renderAnotherEducation = () => {
    // Add extra education input field

    // 1) Get state, store in new variable, add 1
    let educationAmount = [
      ...this.state.educationAmount,
      this.state.educationAmount.length + 1,
    ];

    // 3) Update state with same variable
    this.setState({
      educationAmount,
    });

    //  Update educationError object

    // 1) create object which i want to add in state
    let object = {
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    };

    // 2) creating copy of existing state and adding new object
    let education = [...this.state.education, object];

    // 3) updating state
    this.setState({
      education,
    });

    // Update experienceError Object

    // 1) create object error
    let objectError = {
      instituteError: "",
      degreeError: "",
      due_dateError: "",
      descriptionError: "",
    };

    // 2) Create copy of existing objectError
    let educationError = [...this.state.educationError, objectError];

    // 3) Update State
    this.setState({
      educationError,
    });
  };
  validateEducation = () => {
    // 1) Create copy of existing Education and educationError in state
    let educations = [...this.state.education];
    let educationError = [...this.state.educationError];
    educations.forEach((education, i) => {
      // if Error set it to true
      if (education.institute.length < 2) {
        educationError[i].instituteError = true;
      }
      if (education.degree === "") {
        educationError[i].degreeError = true;
      }
      if (education.due_date === "") {
        educationError[i].due_dateError = true;
      }
      if (education.description === "") {
        educationError[i].descriptionError = true;
      }

      // If no error set it to false
      if (education.institute.length >= 2) {
        educationError[i].instituteError = false;
      }
      if (education.degree) {
        educationError[i].degreeError = false;
      }
      if (education.due_date) {
        educationError[i].due_dateError = false;
      }
      if (education.description) {
        educationError[i].descriptionError = false;
      }
    });
    this.setState({
      educationError,
    });
    // Return true if there is no Error
    let result = educationError.map((educationError, i) => {
      if (
        !educationError.instituteError &&
        !educationError.degreeError &&
        !educationError.due_dateError &&
        !educationError.descriptionError
      ) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  };

  finishResume = (validateArray, event) => {
    let education = [...this.state.education];
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
        console.log(validationResult);
        if (validationResult === true) {
          this.sendDataToApi();
          return;
        }
        if (validation === false) {
          event.preventDefault();
        }
        if (validationResult === false) {
          if (
            education[i].institute !== "" ||
            education[i].degree !== "" ||
            education[i].due_date !== "" ||
            education[i].description !== ""
          )
            event.preventDefault();
        } else {
          console.log("siuuu");
        }
      });
    }
  };

  sendDataToApi = () => {
    const data = {
      name: this.state.name,
      surname: this.state.lastName,
      email: this.state.email,
      phone_number: this.state.mobile,
      experiences: this.state.experiences,
      educations: this.state.education,
      image: this.state.image,
      about_me: this.state.generalInfo,
    };

    fetch("https://resume.redberryinternship.ge/api/cvs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                  showValidationResults={this.showValidationResults}
                  // Clear session storage
                  clearSessionStorage={this.clearSessionStorage}
                  // Perosnal info
                  name={this.state.name}
                  lastName={this.state.lastName}
                  image={this.state.image}
                  generalInfo={this.state.generalInfo}
                  email={this.state.email}
                  mobile={this.state.mobile}
                />
              }
            />
            <Route
              path="/education"
              exact
              element={
                <Education
                  // Clear Session Storage
                  clearSessionStorage={this.clearSessionStorage}
                  // Education Amount
                  educationAmount={this.state.educationAmount}
                  // Degrees
                  degrees={this.state.degrees}
                  selectedDegree={this.state.selectedDegree}
                  changeValue={this.changeValue}
                  // Save Changes in input field
                  saveEducation={this.saveEducation}
                  // Education
                  education={this.state.education}
                  // Education Error
                  educationError={this.state.educationError}
                  // Render another Education
                  renderAnotherEducation={this.renderAnotherEducation}
                  // validation of experience
                  validateEducation={this.validateEducation}
                  finishResume={this.finishResume}
                  handleSubmit={this.state.handleSubmit}
                  showValidationResults={this.showValidationResults}
                  // Personal Info
                  name={this.state.name}
                  lastName={this.state.lastName}
                  image={this.state.image}
                  generalInfo={this.state.generalInfo}
                  email={this.state.email}
                  mobile={this.state.mobile}
                  experiences={this.state.experiences}
                />
              }
            />
            <Route
              path="/resume"
              exact
              element={
                <Resume // Personal Info
                  name={this.state.name}
                  lastName={this.state.lastName}
                  image={this.state.image}
                  generalInfo={this.state.generalInfo}
                  email={this.state.email}
                  mobile={this.state.mobile}
                  // Experience Info
                  experiences={this.state.experiences}
                  // Education Info
                  education={this.state.education}
                  // Clear Session Storage
                  clearSessionStorage={this.clearSessionStorage}
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
