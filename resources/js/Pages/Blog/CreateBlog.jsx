import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
// import {useform} from '@inertia/react'
import '@/../css/createblog.css';
import SideBar from './components/SideBar';
import RecentBlogs from './components/RecentBlogs';

import NewBlog from './components/NewBlog';
import { usePage, router } from '@inertiajs/react';
const Createblog = () => {

  const [showForm, setShowForm] = useState(false);
  const { flash, blogs } = usePage().props;




  const [editingId, setEditingId] = useState(0);
  const [editBlogData, setEditBlogData] = useState(null)


  function onCall() {
    return (
      setShowForm(true)
    )
  }


  function close() {

    setEditBlogData(null);
    setEditingId(null);
    setShowForm(false);

  }

  function editBlog(id) {
    const blog = blogs.find(blog => blog.id === id);
    if (blog) {
      setEditBlogData(blog);
      setEditingId(id);
      setShowForm(true);
    }
  }

  return (


    <div className='body'>
      <Navbar searchbar={0} />
      <div className="main">
        <div className="session-message">
          {flash.success && (<div className='alert-success bg-green-100 text-green-800 px-4 py-3 rounded-md my-4'>{flash.success}</div>)}
          {flash.error && (<div class="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded">{flash.error}</div>)}
        </div>
        <SideBar onTrigger={onCall} />
        <RecentBlogs blogs={blogs} onEdit={editBlog} />
        {showForm && <NewBlog onClose={close} blogdata={editBlogData} id={editingId} />}
      </div>
    </div>
  )
}

export default Createblog
