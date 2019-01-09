import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Jumbotron from './Jumbotron';

import AddPost from './AddPost'
import ViewPosts from './ViewPosts'
import ViewPost from './ViewPost'

const App = props =>
  <div>
    <NavBar />
    <BrowserRouter>
      <div>
        <Jumbotron />
        <Switch>
          <Route exact path='/' component={ ViewPosts }/>
          <Route exact path='/new' component={ AddPost } />
          <Route exact path='/:postId' component={ ViewPost } />
        </Switch>
      </div>
    </BrowserRouter>
  </div>

export default App;