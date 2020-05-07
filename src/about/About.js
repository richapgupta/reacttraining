import React, { Component } from "react";

function highlight(e) {
  e.target.style.backgroundColor = "yellow";
}

function unhighlight(e) {
  e.target.style.backgroundColor = null;
}
function Subscribe() {
  return <div>YOu habr been subscirbed!</div>;
}

function Unsubscribe() {
  return (
    <div>
      YOu habr been unsubscirbed!
      <br />
      <span
        onMouseOver={(e) => highlight(e)}
        onMouseOut={(e) => unhighlight(e)}
      >
        Mybokk1
      </span>
    </div>
  );
}

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      subscribed: false,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      subscribed: !prevState.subscribed,
    }));
  }
  render() {
    return (
      <div className="mainWrapper">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn" onClick={() => this.handleClick()}>
            {this.state.subscribed ? "unsubscribe" : "subscribe"}
          </button>
          {this.state.subscribed ? <Subscribe /> : <Unsubscribe />}
        </div>
      </div>
    );
  }
}
