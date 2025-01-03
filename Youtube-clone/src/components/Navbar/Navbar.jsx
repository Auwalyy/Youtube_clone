import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/profile.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img className="menu_icon" src={menu_icon} alt="" />
        <img className="logo" src={logo} alt="" />
      </div>
      <div >
        </div>className="nav-middle flex-div">
        <input type="text" placeholder="Search" />
        <img src="" alt="" />
        <img src
      </div>
    </nav>
  )
}

export default Navbar
