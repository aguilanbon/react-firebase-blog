import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

function Navbar({ setFormState }) {

  const navRef = useRef(null)
  const [showMobileNav, setShowMobileNav] = useState(false)


  useEffect(() => {
    const closeNavOnScreenSiz = () => {
      if (navRef.current.offsetWidth > 480) {
        setShowMobileNav(false)
      }
    }

    closeNavOnScreenSiz()
  })


  return (
    <div className="navbar-container" ref={navRef}>
      <div className="nav">
        {!showMobileNav &&
          <ul>
            <i onClick={() => setShowMobileNav(true)} id='hamburger-btn' style={{ color: 'white' }} className="fas fa-solid fa-bars"></i>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/user/login' onClick={() => setFormState('login')}>Log in</Link></li>
          </ul>
        }
      </div>
      {showMobileNav &&
        <MobileNav setFormState={setFormState} setShowMobileNav={setShowMobileNav} />
      }
    </div>
  )
}

export default Navbar