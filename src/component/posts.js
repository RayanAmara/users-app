import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { postsList: [] , userId : this.props.match.params.id};
  }

  componentDidMount() {
    
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + this.state.userId + "")
      .then(res => res.json())
      .then(data => {
        this.setState({ postsList: data });
        console.log("hello")
      })
      .catch(console.log);
  }
    
  render() {
    return (
      <div>
        {this.state.postsList.map(e => {
          return (
            <Link to={`/${e.id}`} style={{ textDecoration: "none" }}>
              <div className="container">
                <h1>{e.title}</h1>
                <span>{e.body}</span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
  
}

export default Posts;
