import React from 'react'

const SearchBar = ({ search }) => {



  return (
    <div>
      <div className="search "><input type="text" name="" id="" onChange={(e) => { search(e.target.value) }} placeholder='search here ....' className='cursor-pointer select-none' /></div>
    </div>
  )
}

export default SearchBar
