import React from 'react';
import Main from './Main.js'
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {

  
  render() {
    return (
      <>
        <Main/>
      </>
    );
  }
}

export default withAuth0(App);
