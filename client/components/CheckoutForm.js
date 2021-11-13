import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'

const CheckoutForm = () => {
  return (
    <div>
    <div className='checkout-wrapper'>
      <h1>CHECKOUT</h1>
      <br />
      <div className='checkout-bottom'>
        <div className='checkout-bottom-info'>

          <div className='checkout-section'>
            <p>Billing Address</p>
            <form className="checkout-form">
              <label>First Name</label>
              <input />
              <label>Last Name</label>
              <input />
              <label>Email</label>
              <input />
              <label>Address</label>
              <input />
            </form>
          </div>

          <br />
          <hr style={{marginLeft: "150px", marginRight: "225px"}}/>

          <div className='checkout-section'>
            <p>Shipping Address</p>
            <form className="checkout-form">
              <label>First Name</label>
                <input />
                <label>Last Name</label>
                <input />
                <label>Email</label>
                <input />
                <label>Address</label>
                <input />
            </form>
          </div>

          <br />
          <hr style={{marginLeft: "150px", marginRight: "225px"}}/>

          <div className='checkout-section'>
            <p>Payment</p>
            <form className="checkout-form">
              <label>Name on Card</label>
                <input />
                <label>Credit Card Number</label>
                <input />
                <label>Expiration</label>
                <input />
                <label>CVV</label>
                <input />
            </form>
          </div>
        </div>

        <div className='checkout-bottom-summary'>
          <p className='checkout-bag'>Your Bag</p>
          <div>
            <p>Peachy Chair (3)</p>
            <p>$100</p>
          </div>
          <div>
            <p>Peachy Table (1)</p>
            <p>$200</p>
          </div>
          <div>
            <p>Subtotal</p>
            <p>$300</p>
          </div>
          <div style={{ fontSize: "24px", fontWeight: "bolder" }}>
            <p>Total</p>
            <p>$370</p>
          </div>
          <Link to='/cart'>
            <button>Return to Cart</button>
          </Link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  )
}

export default CheckoutForm;
