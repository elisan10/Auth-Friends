import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Friends from "./Friends";

import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { Form } from "./Form";

const FriendsList = () => {
  const [newPost, setNewPost] = useState(false);
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token"));

    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, [newPost]);

  if (!friends) {
    return (
      <div className="loader">
        <Loader type="ThreeDots" color="#5e433c" height={50} width={50} />
      </div>
    );
  }

  return (
    <div>
      <h2>Check out my friends!</h2>
      <Form setNewPost={setNewPost} />

      {friends.map((friend) => {
        // console.log("friend in friend list", friend);
        return <Friends key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
