import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from "./Components/PrivateRoute";
import Login from './Components/Login';
import FriendList from './Components/FriendList';

import './App.css';

function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <Router>
      <div className="App">
        <h1>Friends List App</h1>
          <Link to="/Login">Login</Link>
          <Link onClick={logout}>Logout</Link>
          <Link to="/protected">Friends</Link>
        
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
