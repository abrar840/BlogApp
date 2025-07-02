import React from 'react'
import '@/../css/recentblogs.css';
const RecentBlogs = ({ blogs }) => {
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
                                        {blog.content}
                                    </p>
                                </div>


                                <div className="btn_wrapper">
                                    <div className="edit_btn"> <button> Edit </button></div>
                                    <div className="delete_btn"><button>Delete</button></div>
                                </div>
                            </div>)
                    })}
            </div>

        </div>



    )
}

export default RecentBlogs
