import React from 'react'
import './navbar.css'

import { CiMenuFries } from "react-icons/ci";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className='navbar'>
        <h1>TechXperience</h1>
        <ul className='navbar-links'>
            <li><a href="#about">About</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#registration">Registration</a></li>
        </ul>
        <div className='smallscreen'>
            <CiMenuFries className='smallscreen-menu' color="#000" fontSize={27} onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className="menu-overlay">
                    <RiMenuUnfoldLine className='menu-overlay-close' fontSize={27} onClick={() => setToggleMenu(false)} />
                    <ul className='menu-links'>
                        <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href="#speakers" onClick={() => setToggleMenu(false)}>Speakers</a></li>
                        <li><a href="#schedule" onClick={() => setToggleMenu(false)}>Schedule</a></li>
                        <li><a href="#registration" onClick={() => setToggleMenu(false)}>Registration</a></li>
                    </ul>
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar