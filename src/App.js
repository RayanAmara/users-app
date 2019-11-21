import React, { Component } from "react";
import { Route, Link ,Switch, BrowserRouter as Router } from "react-router-dom";

import UsersList from './component/userslist'
import Posts from './component/posts.js'
import PostsDescription from './component/postsdescritpion.js'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route exact path={`/:id`} component={Posts} />
          <Route exact path={`/posts/:id`} component={PostsDescription} />
        </Switch>
      </Router>
    );
  }
}

export default App;
