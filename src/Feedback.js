import React, { Component } from "react";

export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      uname: "",
      feedback: "",
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    alert("Thank you " + this.state.uname + " for your feedback!!!");
  }
  render() {
    return (
      <div>
        <h1>Feedback form</h1>
        <form className="form-vertical" onSubmit={() => this.handleClick()}>
          <div class="form-group">
            <label for="uname">Name : </label>
            <input
              type="text"
              name="uname"
              class="form-control"
              placeholder="Enter your Name"
              value={this.state.uname}
              required
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div class="form-group">
            <label for="feedback">Feedback : </label>
            <input
              type="text"
              name="feedback"
              class="form-control"
              placeholder="Enter your feedback"
              value={this.state.feedback}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <input
            name="submit"
            class="btn btn-primary"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}