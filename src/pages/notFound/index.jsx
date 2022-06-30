import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImage from '../../assets/images/404.svg'

const index = () => {
  return (
    <div className='d-flex justify-content-center'>
     <div className="content">
     <img src={notFoundImage} alt="404" />
        <h1>404 Page</h1>
        <p>Back to home!</p>
        <Link to='/' className='btn btn-primary'>Home</Link>
     </div>
    </div>
  )
}

export default index