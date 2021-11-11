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
              <p>SHOPPING BAG (2)</p>
              <p>YOUR WISHLIST (1)</p>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
          <div className="cart-bottom">
            <div className="cart-bottom-info">

              <div className="cart-product">
                <div className="cart-product-detail">
                  <img src="https://media.istockphoto.com/photos/liivng-coralcolor-of-the-year-2019interior-design-for-living-area-or-picture-id1134702834?b=1&k=6&m=1134702834&s=170667a&w=0&h=2q1rjh0eKl02t3ZCfbeweubkljyd64fZJON5862nXRg="/>
                  <div>
                    <p><b>PRODUCT:</b> PEACHYCHAIR</p>
                    <p><b>ID:</b> 2</p>
                    <div className="cart-product-color" style={{backgroundColor: '#f4d0a5'}}></div>
                  </div>
                </div>
                <div className="cart-product-price">
                  <div className="cart-product-cost">
                    <p>$100</p>
                  </div>
                  <div className="cart-product-amount">
                    <button>+</button>
                    <p>3</p>
                    <button>-</button>
                  </div>
                </div>
              </div>

              <hr />

              <div className="cart-product">
                <div className="cart-product-detail">
                  <img src="https://images.urbndata.com/is/image/Anthropologie/40800781_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720"/>
                  <div>
                    <p><b>PRODUCT:</b> PEACHYCHAIR</p>
                    <p><b>ID:</b> 4</p>
                    <div className="cart-product-color" style={{backgroundColor: 'lightgray'}}></div>
                  </div>
                </div>
                <div className="cart-product-price">
                  <div className="cart-product-cost">
                    <p>$200</p>
                  </div>
                  <div className="cart-product-amount">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="cart-bottom-summary">
              <p>ORDER SUMMARY</p>
              <div>
                <p>SUBTOTAL</p>
                <p>$ 300</p>
              </div>
              <div>
                <p>ESTIMATED SHIPPING</p>
                <p>$50</p>
              </div>
              <div>
                <p>TOTAL</p>
                <p>$350</p>
              </div>
              <button>CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
