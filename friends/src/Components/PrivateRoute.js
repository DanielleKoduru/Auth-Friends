import React from "react";
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(componentProps) => {
        // if the token is in localStorage, render the component
        if (localStorage.getItem("token")) {
          console.log("token found, rendering component");
          return <Component {...componentProps} />
        }

        // Otherwise, redirect to login
        else {
          console.log("no token found, redirect to login");
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default PrivateRoute;