import React from 'react'
import './ProductsCard.css'

function ProductsCard() {
  return (
    <>
        <section id='productsCard'>
            <div className="container">
                <div className="productsCard_row">
                    <div className="productsCard_col">
                        <div className="products group">
                            <div className="products_img">
                                <img src="images/products.png" alt="products" />
                            </div>
                            <div className="products_text">
                                <h2>Syltherine</h2>
                                <p>Stylish cafe chair</p>
                                <div className="products_price">
                                    <h3>Rp 2.500.000</h3>
                                    <p>Rp 3.500.000</p>
                                </div>
                            </div>
                            <div className="productsAdd_button">
                                    <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductsCard