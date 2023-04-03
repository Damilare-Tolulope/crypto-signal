import React from 'react'

import logo from "../assets/images/logo.png"
import user from "../assets/images/user.png"


const Header = () => {
  return (
    <nav className='bg-dark border-b border-white/5 fixed w-full z-20'>
        <div className='flex justify-between items-center py-3 px-5'>
            <img src={logo} alt='logo' />
            <div className='flex items-center gap-2 text-white mr-10 cursor-pointer'>
                <img src={user} alt='user' />
                <p>Martinez George</p>
            </div>
        </div>
    </nav>
  )
}

export default Header