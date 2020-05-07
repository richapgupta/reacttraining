import React from "react";
import { NavLink } from "react-router-dom";
import { Banner } from "../banner/Banner";

export function Nav() {
  return (
    <div>
      <div className="container">
        <ul className="menuItems">
          <li>
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/like" activeClassName="active">
              Like Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalouge" activeClassName="active">
              Catalouge
            </NavLink>
          </li>
          <li>
            <NavLink to="/author" activeClassName="active">
              Author List
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" activeClassName="active">
              Locate a Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" activeClassName="active">
              Feedack
            </NavLink>
          </li>
          <li>
            <NavLink to="/review" activeClassName="active">
              review
            </NavLink>
          </li>

          <li>
            <a href="">TBC</a>
          </li>
        </ul>
      </div>
      <Banner />
    </div>
  );
}
