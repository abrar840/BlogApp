import React, { useState } from 'react'
import '@/../css/recentblogs.css';
import { router } from '@inertiajs/react';
const RecentBlogs = ({ blogs, onEdit }) => {


    function onDelete(id) {
        if (confirm("are sure you want to delete this blog")) {
            router.delete(`/delete/${id}`)
        }
    }
    return (
        <div className="main">
            <div className="title">
                <h1>Your Recent blogs</h1>
            </div>
            <div className="blogs_container">
                {blogs &&
                    blogs.map((blog, index) => {
                        return (
                            <div className="blogs_card" key={index}>
                                <div className="img_wrapper">
                                    {blog.images.map((image) => {
                                        return (
                                            <img src={"/storage/" + image.path} alt="Blog image" className="w-[300px] h-[250px] rounded-lg" />)
                                    })}
                                </div>
                                <div className="title_wrapper"><b>{blog.title}</b></div>
                                <div className=" max-w-[300px]">
                                    <p className="">
                                        {blog.content.split(" ").slice(0, 12).join(" ") + "...."}
                                    </p>
                                </div>
                                <div className="btn_wrapper">
                                    <div className="edit_btn"> <button onClick={() => { onEdit(blog.id) }}> Edit </button></div>
                                    <div className="delete_btn"><button onClick={() => { onDelete(blog.id) }}>Delete</button></div>
                                </div>
                            </div>)
                    })}
            </div>
        </div>



    )
}

export default RecentBlogs
