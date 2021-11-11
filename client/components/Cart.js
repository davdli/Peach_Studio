import React from 'react';
import Footer from './Footer';

export default class Cart extends React.Component {
  render() {
    return (
      <div>
        <div className="cart-wrapper">
          <h1>YOUR BAG</h1>
          <div className="cart-top">
            <button>CONTINUE SHOPPING</button>
            <div className="cart-top-text">
              <p>SHOPPING BAG (3)</p>
              <p>YOUR WISHLIST (1)</p>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
          <div className="cart-bottom">
            <div className="cart-bottom-info">
              <div className="cart-product">
                <div className="cart-product-detail">
                  <img src="https://a.1stdibscdn.com/ellen-dining-chair-in-rust-and-powder-pink-by-essential-home-for-sale/1121189/f_126135721542199199973/12613572_master.jpg?disable=upscale&auto=webp&quality=60&width=1318"/>
                  <div>
                    <p><b>PRODUCT:</b> PEACHYCHAIR</p>
                    <p><b>ID:</b> 3</p>
                  </div>
                </div>
                <div className="cart-product-price">
                  <p>Price</p>
                </div>
              </div>
            </div>
            <div className="cart-bottom-summary">
              <p>Summary</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
