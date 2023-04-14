import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <Link to="/">Home</Link>
                         <Link to="/create">Create</Link>
                        <Link to="/edit">Edit</Link>
                        <Link to="/delete">Delete</Link>
    </div>
  )
}

export default Navbar
