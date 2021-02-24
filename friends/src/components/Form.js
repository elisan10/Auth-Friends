import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Form = ({ setNewPost }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: 0,
    email: "",
  });

  const handleChanges = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", newFriend)
      .then((res) => {
        setNewPost((post) => !post);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="friend-form" onSubmit={addNewFriend}>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChanges}
        />
      </div>

      <div className="age">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={newFriend.password}
          onChange={handleChanges}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={newFriend.password}
          onChange={handleChanges}
        />
      </div>

      <button>Log in</button>
    </form>
  );
};
