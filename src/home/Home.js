import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    /* if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false });
    } else {
      this.setState({ isLoggedIn: true });
    } */
    //    this.setState({isLoggedIn:!this.state.isLoggedIn})
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  }
  render() {
    return (
      <div className="mainWrapper">
        <h3>{this.state.isLoggedIn ? "Welcome User!!!" : "Please Login!"}</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleClick()}
        >
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
