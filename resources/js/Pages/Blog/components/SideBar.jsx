import React from 'react'
import '@/../css/sidebar.css';
import { Link } from '@inertiajs/react';
const SideBar = ({ onTrigger }) => {
  return (
    <div className='sidebar'>
      <div className="title"></div>
      <div className="list">
        <ul>
          <li > Your Recent Blogs
          </li>
          <li onClick={onTrigger}>Create New Blog</li>
          <li>

            <Link
              href={route('logout')}
              method="post"
              as="button">
              lOGOUT
            </Link></li>
          <li>

            <Link className=''
              href={route('profile.edit')}
              method="get"
              as="button">
              Profile
            </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
