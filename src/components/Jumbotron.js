import React from 'react'

import { Link } from 'react-router-dom'

const Jumbotron = props => 
  <div className='jumbotron'>
    <div className='container'>
      <h1 className='display-3'>Hello, world!</h1>
      <p><Link to='/new' className='btn btn-primary btn-lg' role='button'>Create New</Link></p>
    </div>
  </div>

export default Jumbotron