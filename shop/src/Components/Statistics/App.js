import React from "react";
import "./Index.css";

const Task2 = ({ obj }) => {
  return (
    <li className="item">
      <span className="label">{obj.label}</span>
      <span className="percentage">{obj.percentage}%</span>
    </li>
  );
};

export default Task2;
