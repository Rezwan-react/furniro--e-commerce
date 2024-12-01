import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import ProductsCard from '../Products/ProductsCard'
import { Link } from 'react-router-dom'
import ProductsCardButton from '../productsButton/ProductsCardButton'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow/NextArrow'
function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <span></span>,
  };

  return (
    <>
    {/* ============================= Banner part start ============================= */}
      <section>
        <Banner/>
      </section>
      {/* --------------------------- Banner part end ---------------------------------- */}
      {/* =========================== Browse part start ================================ */}
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
      {/* =============================== ProductsCaed part start ============================ */}
        <section>
          <div className="container">
            <div className="productsCard_head">
               <h2>Our Products</h2>
            </div>
              <div className='products_items'>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
              </div>
              <div className="productsCard_Show">
                <ProductsCardButton/>
              </div>
          </div>
        </section>
      {/* -------------------------------- ProductsCar part end ------------------------------- */}
      {/* ================================= Explore part start ================================= */}
      <section id='explore'>
        <div className="container">
          <div className="explore_row">
            <div className="explore_col">
              <div className="explore_text">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <div className="explore_button">
                  <button>Explore More</button>
                </div>
              </div>
              <div className="explore_slide">
                <Slider {...settings}>
                  <div className="slide_img">
                    <img src="images/slide-1.png" alt="slide" />
                  </div>                    
                  <div className="slide_img">
                    <img src="images/slide-1.png" alt="slide" />
                  </div>                    
                  <div className="slide_img">
                    <img src="images/slide-1.png" alt="slide" />
                  </div>                    
                  <div className="slide_img">
                    <img src="images/slide-1.png" alt="slide" />
                  </div>                    
                  <div className="slide_img">
                    <img src="images/slide-1.png" alt="slide" />
                  </div>                    
                  </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------- Explore part end ------------------------------- */}
      {/* ======================================== setup part start =============================== */}
        <section id='setup'>
          <div className="container">
            <div className="setup_row">
              <div className="setup_col">
                <div className="setup_text">
                  <p>Share your setup with</p>
                  <h2>#FuniroFurniture</h2>
                </div>
                <div className="setup_img">
                  <img src="images/setup_img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* ----------------------------------------- setup part end --------------------------------- */}
    </>
  )
}

export default Home