import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import BestBooks from "./modules/Bestbooks";
import Header from "./modules/Header.js";
import Footer from "./modules/Footer.js";
// import Login from "./modules/Login.js";
import Profile from "./modules/Profile.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginButton from "./modules/LoginButton";
import LogoutButton from "./modules/LogoutButton";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.auth0.user || null
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
    console.log(this.state.user);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <>
                  <BestBooks user={this.state.user} />
                  <LogoutButton/>
                </>
              ) : (
                <LoginButton />
              )}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ? <Profile user={this.state.user} loginHandler={this.loginHandler} /> : <h2>Please Log In</h2>}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(Main);
