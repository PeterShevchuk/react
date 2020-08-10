import React from "react";
import "./Index.css";

const Task3 = ({ obj }) => {
  return (
    <tr>
      <td>{obj.type}</td>
      <td>{obj.amount}</td>
      <td>{obj.currency}</td>
    </tr>
  );
};

export default Task3;
