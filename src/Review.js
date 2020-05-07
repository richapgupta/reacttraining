import React, { Component } from "react";

export default class Review extends Component {
  constructor() {
    super();
    this.uname = React.createRef();
    this.review = React.createRef();
  }

  handleClick() {
    alert(
      "Thank you " + this.uname.current.value + " for your Review comments!!!"
    );
  }
  render() {
    return (
      <div>
        <h1>Review form</h1>
        <form className="form-vertical" onSubmit={() => this.handleClick()}>
          <div class="form-group">
            <label for="uname">Name : </label>
            <input
              type="text"
              name="uname"
              class="form-control"
              placeholder="Enter your Name"
              defaultValue=""
              required
              ref={this.uname}
            />
          </div>
          <div class="form-group">
            <label for="feedback">Review Comments : </label>
            <input
              type="text"
              name="review"
              class="form-control"
              placeholder="Enter your Review Comments"
              defaultValue=""
              required
              ref={this.review}
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
