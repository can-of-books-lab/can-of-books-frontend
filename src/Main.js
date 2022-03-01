import React from "react";
import BestBooks from "./modules/Bestbooks";
import Header from "./modules/Header.js";
import Footer from "./modules/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    console.log(this.state.bookData);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/"></Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/Profile"></Route>
          </Switch>
          <Footer />
        </Router>
        {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
        <BestBooks bookData={this.state.bookData} />
      </>
    );
  }
}

export default Main;
