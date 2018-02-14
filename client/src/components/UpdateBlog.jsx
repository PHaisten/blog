import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UpdateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {}
    };
  }

  handleInputChange1(value) {
    this.setState({
      blog: {
        title: value
      }
    });
  }
  handleInputChange2(value) {
    this.setState({
      blog: {
        content: value
      }
    });
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/blog/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ blog: data });
      });
  }
  handleClick() {
    console.log("about to update");
    fetch("http://localhost:3000/api/blog/" + this.props.match.params.id, {
      method: "put",
      body: JSON.stringify({
        title: this.state.blog.title,
        content: this.state.chirp.content
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(data => {
        console.log("success", data);
      })
      .catch(err => {
        console.log("error", err);
      });
    console.log(this.state);
  }
  render() {
    return (
      <form className="form col-md-6 mx-auto mt-4 py-4 w-50" id="form">
        <input
          type="text"
          className="form-control"
          id="input-field"
          value={this.state.text}
          onChange={event => this.handleInputChange1(event.target.value)}
          placeholder={this.state.blog.title}
        />
        <br />
        <textarea
          type="text"
          rows="10"
          className="form-control mt-4"
          id="input-field1"
          value={this.state.text}
          placeholder={this.state.blog.content}
          onChange={event => this.handleInputChange2(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-light mt-3 justify-content-center"
          id="post-b"
          onClick={() => this.handleClick()}
        >
          Submit
        </button>
      </form>
    );
  }
}
