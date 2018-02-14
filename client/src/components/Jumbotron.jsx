import React, { Component } from "react";
import { render } from "react-dom";
// import image from "../images/jumbotron-image.jpg";

const jumboStyle = {
  background: "rgba(204, 204, 204, 0.5)"
};

const headerStyle = {
  opacity: "1 !important",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#2c1701"
};

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={jumboStyle}
          id="jumbo"
        >
          <div className="container" style={headerStyle} id="header-content">
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
