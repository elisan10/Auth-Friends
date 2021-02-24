import React from "react";
import Loader from "react-loader-spinner";

const FriendsList = () => {
  return (
    <div>
      <h4>Hello I am in FriendsList</h4>
      <Loader
        type="ThreeDots"
        color="#5e433c"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
};

export default FriendsList;
