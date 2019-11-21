import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom'

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { usersList: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ usersList: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        {this.state.usersList.map(e => {
          return (
            <Link to={`/${e.id}`}  style={{textDecoration: 'none'}}>
              <div className="container">
                <h1>{e.name}</h1>
                <h1>{e.username}</h1>
                <h2>{e.email}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
