import React from "react";
import "./Index.css";

const Task3 = ({ obj }) => {
  return (
    <li className="item">
      {obj.isOnline ? <span className="status on"></span> : <span className="status off"></span>}
      <img className="avatar" src={obj.avatar} alt={obj.name} width="48" />
      <p className="name">{obj.name}</p>
    </li>
  );
};

export default Task3;
