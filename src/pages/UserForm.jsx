import React from 'react'
import { Link } from 'react-router-dom'

function UserForm() {
  return (
    <div className='user-form'>
        <h1 style={{opacity: '.8'}}>Hi! Time to log back in!</h1>
        <div className="form-container">
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email @</label>
                    <input type="email" name="email" id="" className='inputBox' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password &#8226;&#8226;&#8226; </label>
                    <input type="password" name="" id="" className='inputBox' />
                </div>
                <div className="form-group">
                    <input type="submit" value="Log In" />
                </div>
                <div className="form-footer">
                    <p>Not yet signed up? <Link to='/user/signup'>Click Here!</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserForm