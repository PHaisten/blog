import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Blogs from "./Blogs";
import Jumbotron from "./Jumbotron";
import BlogInput from "./BlogInput";
import NavBar from "./NavBar";
import Details from "./Details";
import UpdateBlog from "./UpdateBlog";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Jumbotron} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/post" component={BlogInput} />
            <Route exact path="/blogs/:id" component={Details} />
            <Route exact path="/update/:id" component={UpdateBlog} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
