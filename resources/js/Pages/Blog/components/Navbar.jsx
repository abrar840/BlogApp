import React from 'react'
import '@/../css/navbar.css';

import logo from './logo.svg';
import SearchBar from './SearchBar';

const Navbar = (props) => {
    return (
        <div className=''>
            <div className="header">
                <div className="logo"><img src={logo} alt="logo" className='h-12 w-12' />
                    <h1><b><i>mini BLOG</i></b></h1></div>
                {/* {route.current('home') && <SearchBar />} */}
                <div style={{ width: "250px" }} className='p-0'>
                    {props.searchbar ? <SearchBar search={props.search} /> : null}
                </div>
                <nav className='navbar'>
                    <ul>
                        <li className='text-center cursor-pointer select-none'><a href="/">Home</a>
                        </li>
                        <li className='text-center cursor-pointer select-none'><a href="/createblog">Create</a></li>
                    </ul>
                </nav>
                <div className="btn">
                    {/* <button className='text-center cursor-pointer select-none'><i>login</i></button> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
