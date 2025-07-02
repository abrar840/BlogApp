import React, { useState } from 'react'
import Navbar from './components/navbar'
// import {useform} from '@inertia/react'
import '@/../css/createblog.css';
import SideBar from './components/SideBar';
import RecentBlogs from './components/RecentBlogs';

import NewBlog from './components/NewBlog';
import { usePage } from '@inertiajs/react';
const Createblog = () => {

  const [showForm, setShowForm] = useState(0);
  const { flash, blogs } = usePage().props;

  function onCall() {
    return (
      setShowForm(true)
    )
  }


  function close() {
    return (
      setShowForm(false)
    )
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
        <RecentBlogs blogs={blogs} />

        {showForm && <NewBlog onClose={close} />}



      </div>



    </div>
  )
}

export default Createblog
