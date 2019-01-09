import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Jumbotron from './Jumbotron';

import AddPost from './AddPost'
import ViewPosts from './ViewPosts'
import ViewPost from './ViewPost'

import shortid from 'shortid'
import loremIpsum from 'lorem-hipsum'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: new Array(5).fill(null).map(_ => ({id:shortid.generate(), content:loremIpsum({count:5, units:'paragraphs'})})),
      viewing: ''
    }
  }

  addPost = (content, cb) => {
    const post = {id: shortid.generate(), content}

    this.setState({
      posts: [...this.state.posts, post]
    })

    cb()
  }

  getPostById = (id) => {
    return this.state.posts.find(post => post.id === id)
  }

  handleClickPost = (id) => {
    this.setState({
      viewing:id
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <div>
            <Jumbotron />
            <Switch>
              <Route exact path='/' render={ props => <ViewPosts {...props} posts={this.state.posts} handleClickPost={this.handleClickPost}/> }/>
              <Route exact path='/new' render={ props => <AddPost {...props} addPost={this.addPost}/> } />
              <Route exact path='/:postId' render={ props => <ViewPost {...props} getPostById={this.getPostById}/> } />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;