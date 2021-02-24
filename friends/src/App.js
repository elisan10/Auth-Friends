import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello I am here</h1>
        <nav className="nav-bar">
          <Link className="a" to="/login">
            Login
          </Link>
          <Link className="a" to="/friends">
            Friends
          </Link>
        </nav>
      </header>
      <div className="app-container"></div>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
