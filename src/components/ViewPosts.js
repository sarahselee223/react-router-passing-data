import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ViewPosts = props => 
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

const mapStateToProps = state =>
  ({ posts: state.posts })

export default connect(mapStateToProps)(ViewPosts)