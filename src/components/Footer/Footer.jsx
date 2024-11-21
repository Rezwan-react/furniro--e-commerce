import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <section id='footer'>
            <div className="container">
                <div className="footer_row">
                    <div className="footer_col">
                        <div className="footer_head">
                            <h2>footer</h2>
                            <p>400 University Drive Suite 200 Coral Gables, <span>FL 33134 USA</span></p>
                        </div>
                        <div className="footer_menu">
                        <ul>
                            <li><p>Links</p></li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                        </div>
                        <div className="footer_help">
                        <ul>
                            <li><p>Help</p></li>
                            <li><Link to='/'>Payment Options</Link></li>
                            <li><Link to='/'>Returns</Link></li>
                            <li><Link to='/'>Privacy Policies</Link></li>
                        </ul>
                        </div>
                        <div className="footer_input">
                            <p>Newsletter </p>
                            <div className="footer_in">
                            <input type="text" placeholder='Enter Your Email Address' />
                            <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer_text">
                        <p>2023 furino. All rights reverved</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer