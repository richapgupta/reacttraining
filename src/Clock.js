import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: props.initial };
  }

  // lifecycle hook
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <div>{this.formatDate()}</div>;
  }

  formatDate() {
    return this.state.time.toLocaleString();
  }
}
