import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



function Navbar() {
  return (
    <>
        <nav className='mine_menu'>
          <div className="container">
            <div className="menu_row">
              <div className="menu_col">
                <div className="logo">
                  <Link to='/'><img src="images/logo.png" alt="logo" /></Link>
                </div>
                <div className="menu">
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                  </ul>
                </div>
                <div className="menu_icons">
                  <ul>
                    <li><Link to='#'><FaUser /></Link></li>
                    <li><Link to='#'><FaSistrix /></Link></li>
                    <li><Link to='#'><CiHeart /></Link></li>
                    <li><CiShoppingCart /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar