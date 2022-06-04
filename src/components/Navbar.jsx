import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({setFormState}) {
  return (
    <div className="navbar-container">
        <div className="nav">
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/user/login' onClick={() => setFormState('login')}>Log in</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar