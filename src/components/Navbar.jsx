import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

function Navbar({ setFormState, setIsAuth, userSignOut, isAuth }) {

  const navRef = useRef(null)
  const menuRef = useRef(null)
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    let handler = document.addEventListener('mousedown', (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMobileNav(false)
      }
    })

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])


  useEffect(() => {
    const closeNavOnScreenSiz = () => {
      if (navRef.current.offsetWidth > 480) {
        setShowMobileNav(false)
      }
    }

    closeNavOnScreenSiz()
  })

  return (
    <div className="navbar-container" ref={menuRef}>
      <div className="nav" ref={navRef}>
        {!showMobileNav &&
          <ul>
            <i onClick={() => setShowMobileNav(true)} id='hamburger-btn' style={{ color: 'white' }} className="fas fa-solid fa-bars"></i>
            <li><Link to='/' >Home</Link></li>
            {!isAuth && <li><Link to='/user/login' onClick={() => setFormState('login')}>Log in</Link></li>}
            {isAuth && <li><a style={{ cursor: 'pointer' }} onClick={() => {
              setIsAuth(false)
              userSignOut()
            }}>Sign Out</a></li>}
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