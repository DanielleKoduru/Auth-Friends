import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute }  from "./components/privateRoute";
import Login from './components/login';
import FriendList from './components/friendList';
import AddFriend from './components/addFriend';
import './App.css';

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <nav>
            <Link to="/Login">Login</Link>
            <Link onClick={logout}>Logout</Link>
            <Link to="/addFriend">Add Friends</Link>
          </nav>
        </div>

        <h1>Welcome to Friends List</h1>
        
          <Switch>
            <PrivateRoute exact path="/protected">
              <AddFriend />
              <FriendList />
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
