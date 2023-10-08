import React, { useState } from 'react'
import './navbar.css';
import logo from "../../assets/logo.png"
import { Link } from "react-scroll"
import contactImg from "../../assets/contact.png"
import Menu from "../../assets/menu.png"
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='worksExp' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Work Experience</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">My Project</Link>
                {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Client</Link> */}
            </div>
            <button className='desktopMenuBtn' onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
                <img src={contactImg} alt='Contact' className='desktopMenuImg' />Contact Me</button>

            <img src={Menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='worksExp' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Work Experience</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>My Projects</Link>
                {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Client</Link> */}
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default NavBar
