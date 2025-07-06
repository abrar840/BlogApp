import React, { useState } from 'react'
import '@/../css/recentblogs.css';
import { router } from '@inertiajs/react';
import {
    Card,

    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
                            <Card key={index}>
                                <CardContent className='p-5'>
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

                                        <div className=""> <Button className='bg-green-500' onClick={() => { onEdit(blog.id) }}>Edit-Blog</Button></div>
                                        <div className=""> <Button variant="destructive" onClick={() => { onDelete(blog.id) }}>Delete</Button></div>

                                    </div>
                                </CardContent>
                            </Card>)
                    })}
            </div>
        </div>



    )
}

export default RecentBlogs
