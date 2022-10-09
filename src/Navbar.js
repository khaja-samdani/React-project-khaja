import "./App.css"
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className="container">
        <div>
            <Link to="/">Home page</Link>
        </div>
        <div>
            <Link to="/about">About page</Link>
        </div>
        <div>
            <Link to="/h&t">H&T page</Link>
        </div>
    </div>
  )
}

export default Navbar