import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class PostsDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { postId: this.props.match.params.id, postObject: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/"+this.state.postId+"")
    fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" + this.state.postId + "" 
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ postObject: data });
        console.log("hello");
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        {this.state.postObject.map(e=>
        {return(
          <div className='container'>
            <h1>{e.title}</h1>
            <span>{e.body}</span>
            <h1>{e.name}</h1>
            <span>{e.body}</span>
          </div>)
        }
        )}
      </div>
    );
  }
}

export default PostsDescription;
