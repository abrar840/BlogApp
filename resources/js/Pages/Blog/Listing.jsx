import '@/../css/home.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { usePage } from '@inertiajs/react';

const Home = () => {
    const { blogs } = usePage().props;

    const [filteredBlogs, setFilteredBlogs] = useState(blogs);

    function searchFilter(search) {
        if (!search) {
            setFilteredBlogs(blogs);
            return;
        }
        const keyword = search.toLowerCase();
        const filtered = blogs.filter(blog =>
            blog.title.toLowerCase().includes(keyword)
        );
        setFilteredBlogs(filtered);
    }
    return (
        <div className='body'>
            <Navbar searchbar={1} search={searchFilter} />
            <div className="main">
                <div className="container">
                    <div className="logo-wrapper">
                        <h1 className='logo-txt'>Latest</h1>
                    </div>
                    {filteredBlogs?.map((blog, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={"/storage/" + blog.images[0].path} alt="Blog image" className="w-[880px] h-[400px] rounded-lg" />
                                <div className="txt">
                                    <div className="title">
                                        <h1>{blog.title}</h1>
                                    </div>
                                    <div className="blog_info">
                                        <p>{blog.content}</p>
                                    </div>
                                    <div className="blog_btn">
                                        <button>Read more...</button>
                                    </div>
                                </div>
                                <hr />
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
