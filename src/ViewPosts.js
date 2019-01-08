import React from 'react'


const ViewPosts = ({posts, handleClickPost}) =>
  <div>
    {
      posts.map(post => 
        <div key={post.id} onClick={()=> handleClickPost(post.id)}>{post.content.slice(0,100)}...</div>)
    }
  </div>


export default ViewPosts