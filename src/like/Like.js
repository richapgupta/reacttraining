import React, { Component } from "react";

export default class Like extends Component {
  constructor(props) {
    super(props);
    // int to 0
    this.state = {
      count: this.props.count,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={() => this.handleClick()}>
          Like
        </button>
        <br />
        {/* You clicked Like button {this.state.count} times */}
        <Display
          count={this.state.count}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

function Display(props) {
  return (
    <>
      {/* <button className="btn"
        onClick={props.handleClick()}>
        Like
      </button> */}
      <p>You have liked {props.count} times !!!</p>
    </>
  );
}
