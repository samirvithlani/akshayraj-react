import React from "react";
import { Link } from "react-router-dom";

export const Students = () => {
  return (
    <div>
      <h1>Student</h1>
      <ul>
        <li>
            <Link to="/students/commerce">commerce</Link>
        </li>
        <li>
            <Link to="commerce">commerce</Link>
        </li>
        <li>
            <Link to="/science">science</Link>
        </li>
      </ul>
    </div>
  );
};
