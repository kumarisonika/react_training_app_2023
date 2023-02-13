import React from 'react'
import DeleteAlluser from './DeleteAlluser'

const Redux_UserDetails = () => {
  return (
    <div>
        <div className='admin-table'>
      <div className='admin-subtitle'>List of User Details </div>
      <button>Add New Users</button>
      </div>
      <ul>
        <li>Hi</li>
        <li>HiI</li>
      </ul>
      <hr/>
      <DeleteAlluser/>
    </div>
    
  )
}

export default Redux_UserDetails
