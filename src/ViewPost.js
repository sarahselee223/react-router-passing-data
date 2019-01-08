import React from 'react'

const ViewPost = props =>
  <div>
    {
      props.post
      ? <>
        <div>{props.post.id}</div>
        <div>{props.post.content}</div>
      </>
      : null
    }
  </div>

export default ViewPost