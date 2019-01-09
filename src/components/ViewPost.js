import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const ViewPost = props => {
  const { post } = props

  if (!post) return <Redirect to='/' />
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <Link to='/'>Back</Link>
          
          <h2>{ post.id }</h2>
          {/* Make new line characters into paragraphs'. It helps with spacing */}
          <div>
            { post.content.split('\n').map((p,i) => <p key={i}>{p}</p>) }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => 
  ({ post: state.posts.find(post => post.id === props.match.params.postId)})

export default connect(mapStateToProps)(ViewPost)