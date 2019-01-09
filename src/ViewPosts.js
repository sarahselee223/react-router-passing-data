import React from 'react'

import { Link } from 'react-router-dom'

const ViewPosts = props => {
  return (
    <div className='container'>
      <div className='row'>
      {
        props.posts.map(post => 
          <div className='col-md-4' key={ post.id }>
            <h2>{ post.id }</h2>
            <p>
              { post.content.slice(0,200) }...
            </p>
            <p>
              <Link to={`/${post.id}`} className='btn btn-secondary' role='button'>
                View details »
              </Link>
            </p>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default ViewPosts