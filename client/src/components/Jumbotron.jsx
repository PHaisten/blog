import React, { Component } from "react";
import { render } from "react-dom";
// import image from "../images/jumbotron-image.jpg";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" id="jumbo">
          <div className="container" id="header-content">
            <h1 className="display-3">Coding is Hard</h1>
            <p className="lead">
              A personal blog venturing through the trials and successes of
              learning code.
            </p>
            <p className="lead">By Payton Haisten</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
