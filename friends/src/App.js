import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import Login from "./components/Login";

import Loader from "react-loader-spinner";

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
      <div className="app-container">
        <Loader
          type="ThreeDots"
          color="#5e433c"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
      <div className="Router">
        <Switch>
          <Route exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
