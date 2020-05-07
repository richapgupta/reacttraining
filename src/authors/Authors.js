import React, { Component } from "react";
import Axios from "axios";
export default class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({
          authors: response.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.authors.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        //<div>{JSON.stringify(this.state.authors)}</div>;
        <div className="mainWrapper">
          <div className="container">
            {/* {JSON.stringify(this.state.authors)} */}
            <table border="1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {this.state.authors.map((author, index) => (
                  <tr key={index}>
                    <td> {author.name} </td>
                    <td> {author.email} </td>
                    <td> {author.phone} </td>
                    <td> {author.website} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

/* "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }*/
