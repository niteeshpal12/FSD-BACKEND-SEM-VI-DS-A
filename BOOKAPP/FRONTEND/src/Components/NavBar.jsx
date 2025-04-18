import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center h-16 bg-gray-500  text-white'>
    <Link to="/add" className='hover:bg-gray-600 p-2 rounded-md'>Add Book</Link>
    <Link to="/View" className='hover:bg-gray-600 p-2 rounded-md' >View Book</Link>
    <Link to="/Search" className='hover:bg-gray-600 p-2 rounded-md'>Search Book</Link>
    <Link to="/Update" className='hover:bg-gray-600 p-2 rounded-md'>Update Book</Link>
    <Link to="/Delete" className='hover:bg-gray-600 p-2 rounded-md'>Delete Book</Link>
  </nav>
  )
}

export default NavBar
