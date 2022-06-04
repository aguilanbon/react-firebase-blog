import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <di className="navbar-container">
        <div className="nav">
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/user/login'>Log in</Link></li>
            </ul>
        </div>
    </di>
  )
}

export default Navbar