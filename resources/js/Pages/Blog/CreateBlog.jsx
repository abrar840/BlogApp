import React, { useState } from 'react'
import Navbar from './components/navbar'
// import {useform} from '@inertia/react'
import '@/../css/createblog.css';
import SideBar from './components/SideBar';
import RecentBlogs from './components/RecentBlogs';
 
import NewBlog from './components/NewBlog';
const Createblog = () => {

const [showForm,setShowForm]=useState(0);

 function onCall(){
  return(
    setShowForm(true)
  )
}


function close(){
  return(
    setShowForm(false)
  )
}

  return (


    <div className='body'>
      <Navbar searchbar={0} />
      <div className="main">
        
          <SideBar onTrigger={onCall} />
          <RecentBlogs/>
      
      {showForm && <NewBlog onClose={close}/>}
          
          
         
      </div>



    </div>
  )
}

export default Createblog
