import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
function Banner() {
  return (
   <>
    <section id='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_col">
                    <div className="banner_text">
                        <h1>New Arrival</h1>
                        <h2>Discover Our  New Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <div className="banner_button">
                            <Link to='/shop' >BUY Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Banner