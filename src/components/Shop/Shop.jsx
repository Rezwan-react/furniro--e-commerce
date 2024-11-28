import React from 'react'
import './Shop.css'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

function Shop() {
  return (
    <>
      {/* ============================== banner part start ========================= */}
        <section id='shop_banner'>
          <div className="container">
          <div className="shop_banner_row">
            <div className="shop_banner_col">
              <div className="shop_head">
                <h2>Shop</h2>
                <BreadCrumb/>
              </div>
            </div>
          </div>
          </div>
        </section>
      {/* ------------------------------- banner part end --------------------------- */}
    </>
  )
}

export default Shop