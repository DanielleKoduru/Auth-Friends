import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute  from "./components/privateRoute";
import Login from './components/login';
import FriendList from './components/friendList';
import AddFriend from './components/addFriend';
import './App.css';

function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/Login">Login</Link>
          <Link onClick={logout}>Logout</Link>
          <Link to="/addFriend">Add Friends</Link>
        </nav>

        <h1>Welcome to Friends List</h1>
        
          <Switch>
            <PrivateRoute exact path="/protected">
              <AddFriend />
              <FriendList />
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
