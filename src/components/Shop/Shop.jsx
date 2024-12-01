import React from 'react'
import './Shop.css'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ProductsPagination from '../Pagination/ProductsPagination';



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
      {/* =============================== Filter part start ========================== */}
        <section id='filter'>
          <div className="container">
            <div className="filter_row">
              <div className="filter_col">
                <div className="filter_text">
                  <h3><HiOutlineAdjustmentsHorizontal /></h3>
                  <h2> Filter </h2>
                  <p>Showing 1–16 of 32 results</p>
                </div>
                <div className="filter_input">
                  <label>Show</label>
                  <input type="number" value='16' className='one' />
                  <label>Short by</label>
                  <input type="text" placeholder='Default' className='two'/>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* -------------------------------- Filter part end ---------------------------- */}
      {/* ================================= products part start ====================== */}
      <section id='products'>
        <ProductsPagination itemsPerPage={16}/>
        </section>  
      {/* --------------------------------- products part end ------------------------  */}
    </>
  )
}

export default Shop