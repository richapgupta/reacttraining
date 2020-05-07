import React from "react";

export function Banner() {
  // const bannerTitle = "Special 50% off";
  const btntxt = "get the deal";
  const bannerMsg = "For our student community";
  return (
    <div className="bannerWrapper">
      <div className="container row">
        <div className="col bannerImg">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg"
            height="200"
          />
        </div>
        <div className="col bannerCTA">
          <h1 className="bannerTitle">
            Special <span className="highlightTxt">50% off</span>
          </h1>
          <p className="bannerMsg">{bannerMsg}</p>
          <a className="btn" href="#">
            {btntxt}
          </a>
        </div>
      </div>
    </div>
  );
}
