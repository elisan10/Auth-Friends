import React from "react";

function Friends(props) {
  const { friend } = props;
  return (
    <div className="friends">
      <h3>{friend.name}</h3>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
    </div>
  );
}

export default Friends;
