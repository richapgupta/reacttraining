import React from "react";
import { NavLink } from "react-router-dom";

export default function Store() {
  return (
    <div className="mainWrapper">
      <div className="container">
        <ul className="menuItems">
          <li>
            <NavLink to="/store/delhi" activeClassName="active">
              Delhi
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to="/store/bangaluru" activeClassName="active">
              Bangalure
            </NavLink>
          </li>
          <li>
            <NavLink to="/store/pune" activeClassName="active">
              Pune
            </NavLink>
          </li>
          <li>
            <NavLink to="/store/mumbai" activeClassName="active">
              Mumbai
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
