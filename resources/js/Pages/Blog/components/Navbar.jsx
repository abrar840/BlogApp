import React from 'react'


import logo from './logo.svg';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <div className=''>
            <div className="header">
                <div className="logo"><img src={logo} alt="logo" className='h-12 w-12' />
                    <h1><b><i>mini BLOG</i></b></h1></div>
                {/* {route.current('home') && <SearchBar />} */}
                <SearchBar />
                <nav className='navbar'>
                    <ul>
                        <li className='text-center cursor-pointer select-none'>Home</li>
                        <li className='text-center cursor-pointer select-none'>Create blog</li>
                    </ul>
                </nav>
                      <div className="btn">
                    <button className='text-center cursor-pointer select-none'><i>login</i></button>
                      </div>
            </div>
        </div>
    )
}

export default Navbar
