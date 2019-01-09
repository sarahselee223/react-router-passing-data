import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import loremIpsum from 'lorem-ipsum'
import {Link} from 'react-router-dom'

class AddPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: loremIpsum({count:5, units:'paragraphs'})
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addPost(this.state.post)
    this.setState({
      post: loremIpsum({count:5, units:'paragraphs'})
    })

    this.props.history.push('')
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea name="post" cols="80" rows="15" onChange={this.handleChange} value={ this.state.post }>
            
          </textarea>
          <div>
            <input type="submit" />
          </div>
        </form>
        <Link to = "./new">New</Link>
      </div>
    )
  }
}

export default withRouter(AddPost)