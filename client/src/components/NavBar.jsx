import React, { Component } from "react";
import { render } from "react-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse d-flex" id="navbar">
        <a className="navbar-brand mr-auto p-2" id="nav-h" href="/">
          Payton's Blog
        </a>
        <a className="nav-item nav-link p-2" id="nav-t" href="/blogs">
          Blog Posts
        </a>
        <a className="nav-item nav-link p-2" id="nav-t" href="/post">
          Post
        </a>
      </nav>
    );
  }
}
