import React from "react";
import { Router, Route, Redirect } from "react-router-dom";

import Login from "./Login.jsx";
import Signin from "./Signin.jsx";
import Home from "./Home.jsx";

import history from "./history";

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default Routes;
