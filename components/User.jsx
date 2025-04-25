import React from "react";

const User = ({ deletUserHandler, avatar_url, id, login }) => {
  return (
    <li className="user" key={id}>
      <img src={avatar_url} alt="" />
      <h3> Username : {login}</h3>
      <button onClick={() => deletUserHandler(id)}>delete</button>
    </li>
  );
};

export default User;
