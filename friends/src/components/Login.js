import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    // console.log("Hello I am here");
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        // console.log("This is RES", res);
        // console.log("I am here");
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h2>Hello from Login component</h2>
      <form className="login-form" onSubmit={login}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </div>

        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
