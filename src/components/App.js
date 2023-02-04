import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import "../app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
