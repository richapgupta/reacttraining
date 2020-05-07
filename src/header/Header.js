import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="container row">
        <div className="col logoWrapper">
          <span className="logoMaker">Li</span>
          <span className="logotext">MyBookShop</span>
        </div>
        <div className="col searchWrapper">
          {/* <span>search box to come</span> */}
        </div>
        <div className="col headerlinks">
          <a href="#" className="headerLink">
            Like
          </a>
          <a href="#" className="headerLink">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
