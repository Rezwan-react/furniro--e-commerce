import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
function Home() {
  return (
    <>
    {/* ============================= Banner part state ============================= */}
      <section>
        <Banner/>
      </section>
      {/* --------------------------- Banner part end ---------------------------------- */}
      {/* =========================== Browse part stste ================================ */}
      <section id='browse'>
        <div className="containre">
           <div className="browse_row">
            <div className="browse_col">
              <div className="browse_head">
                <h2>Browse The Range</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="browse_imges">
                <div className="browse_img">
                  <img src="images/Dining.png" alt="Dining" />
                  <p>Dining</p>
                </div>
                <div className="browse_img">
                  <img src="images/Living.png" alt="Living" />
                  <p>Living</p>
                </div>
                <div className="browse_img">
                  <img src="images/Bedroom.png" alt="Bedroom" />
                  <p>Bedroom</p>
                </div>
              </div>
            </div>
           </div>
        </div>
      </section>
      {/* ------------------------------ Browse part end ------------------------------------ */}
    </>
  )
}

export default Home