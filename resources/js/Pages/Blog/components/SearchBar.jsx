import React from 'react'
import { Input } from "@/components/ui/input"
const SearchBar = ({ search }) => {



  return (
    <div>
      <div className="search "><Input onChange={(e) => { search(e.target.value) }} placeholder='search here ....' className='cursor-pointer select-none ' />
      </div>
    </div>
  )
}

export default SearchBar
