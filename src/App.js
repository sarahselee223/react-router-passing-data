import React, { Component } from 'react';

import AddPost from './AddPost'
import ViewPosts from './ViewPosts'
import ViewPost from './ViewPost'

import shortid from 'shortid'
import loremIpsum from 'lorem-ipsum'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: new Array(5).fill(null).map(_ => ({id:shortid.generate(), content:loremIpsum({count:5, units:'paragraphs'})})),
      viewing: ''
    }
  }

  addPost = (content) => {
    const post = {id: shortid.generate(), content}

    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  handleClickPost = (id) => {
    this.setState({
      viewing:id
    })
  }
  render() {
    return (
      <div>
        <AddPost addPost={this.addPost}/>
        <hr />
        <ViewPosts posts={this.state.posts} handleClickPost={this.handleClickPost}/>
        <hr />
        <ViewPost post={this.state.posts.find(ele=>ele.id === this.state.viewing)}/>
      </div>
    );
  }
}

export default App;
