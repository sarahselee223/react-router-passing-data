import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import loremIpsum from 'lorem-hipsum'

class AddPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: loremIpsum({count:5, units:'paragraphs'})
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addPost(this.state.post, () => {
      this.props.history.push('/')
    })

  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className='container'>
        <Link to="/">Back</Link>
        <form onSubmit={ this.handleSubmit }>
          <textarea name='post' cols='80' rows='15' onChange={ this.handleChange } value={ this.state.post }>
          </textarea>
          <div>
            <input type='submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default AddPost