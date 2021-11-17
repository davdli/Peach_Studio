import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../redux/cart";
import { updateOrder } from '../store/users';

const CheckoutForm = (props) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  console.log('This is the cart:', cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems(user))
  }, [])

  const pay = (event) => {
    dispatch(updateOrder(user.id))
  }

  return cart.length > 0 ? (
    <div>
      <div className='checkout-wrapper'>
        <h1>CHECKOUT</h1>
        <br />
        <Link to='/products'>
          <button>CONTINUE SHOPPING</button>
        </Link>
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
            <hr style={{ marginLeft: "150px", marginRight: "225px" }} />

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
            <hr style={{ marginLeft: "150px", marginRight: "225px" }} />

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

            <br />
            <Link to="/confirmation">
              <button style={{ marginLeft: "150px", width: '520px' }} onClick={pay}>PAY NOW</button>
            </Link>
          </div>

          <div className='checkout-bottom-summary'>
            <p className='checkout-bag'>Your Bag</p>
            {cart.map(product => (
              <div key={product.id}>
                <p>{product.name} ({product.cart.quantity})</p>
                <p>${Number(product.price).toFixed(2)}</p>
              </div>
            ))}
            <hr />
            <div>
              <p>Subtotal</p>
              <p>${cart.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0).toFixed(2)}</p>
            </div>
            <div>
              <p>Tax</p>
              <p>${(cart.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0) * 0.045).toFixed(2)}</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>${(100).toFixed(2)}</p>
            </div>
            <hr />
            <div style={{ fontSize: "24px", fontWeight: "bolder" }}>
              <p>Total</p>
              <p>${(Number(cart.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0).toFixed(2)) + Number((cart.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0) * 0.045).toFixed(2)) + 100).toFixed(2)}</p>
            </div>
            <Link to='/cart'>
              <button>RETURN TO CART</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  ) : (
    <h3>Your cart is empty</h3>
  )
}

export default CheckoutForm;
