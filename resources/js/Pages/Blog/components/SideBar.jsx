import React from 'react'
import '@/../css/sidebar.css';
const SideBar = ({onTrigger}) => {
  return (
    <div className='sidebar'>
       <div className="title"></div>
       <div className="list">
        <ul>
            <li >Your Recent blogs</li>
            <li onClick={onTrigger}>Create New Blog</li>
            <li>logout</li>
        </ul>
       </div>
    </div>
  )
}

export default SideBar
