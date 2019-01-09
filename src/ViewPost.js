import React from 'react'

import { Link, Redirect } from 'react-router-dom'

const ViewPost = props => {
  const post = props.getPostById(props.match.params.postId)

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

export default ViewPost