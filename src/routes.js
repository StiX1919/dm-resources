import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// currently not doing anything with this, need to wireframe site views,
// login page vs modal, what routes, etc.
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    );
  }
}
