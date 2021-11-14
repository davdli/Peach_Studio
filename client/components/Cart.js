import React from "react";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../redux/cart";
import { fetchSingleProduct } from "../redux/singleProduct";
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  console.log('This is the cart:', cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems(user))
  }, [])


  return cart.length > 0 ? (
    <div>
      <div className='cart-wrapper'>
        <h1>YOUR BAG</h1>
        <div className='cart-top'>
          <Link to='/products'>
            <button>CONTINUE SHOPPING</button>
          </Link>
          <div className='cart-top-text'>
            <p>Shopping Bag (2)</p>
            <p>Your Waitlist (1)</p>
          </div>
          <Link to='/checkout'>
            <button>CHECKOUT NOW</button>
          </Link>
        </div>
        <div className='cart-bottom'>

          <div className='cart-bottom-info'>
            {cart[0].products.map(product => (
              <div className='cart-product' key={product.id}>
                <div className='cart-product-detail'>
                  <img src={product.imageUrl} />
                  <div>
                    <p>
                      <b>Product:</b> {product.name}
                    </p>
                    <p>
                      <b>Id:</b> {product.id}
                    </p>
                    <div
                      className='cart-product-color'
                      style={{ backgroundColor: "#f4d0a5" }}
                    ></div>
                  </div>
                </div>
                <div className='cart-product-price'>
                  <div className='cart-product-cost'>
                    <p>{product.price}</p>
                  </div>
                  <div className='cart-product-amount'>
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-bottom-summary'>
            <p className='order-summary'>Order Summary</p>
            <div>
              <p>Subtotal</p>
              <p>${cart[0].products.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0).toFixed(2)}</p>
            </div>
            <div>
              <p>Estimated Tax</p>
              <p>${(cart[0].products.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0) * 0.045).toFixed(2)}</p>
            </div>
            <div>
              <p>Estimated Shipping</p>
              <p>$100</p>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bolder" }}>
              <p>Total</p>
              <p>${(Number(cart[0].products.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0).toFixed(2)) + Number((cart[0].products.reduce((accum, product) => {
                return accum + Number(product.price)
              }, 0) * 0.045).toFixed(2)) + 100).toFixed(2)}</p>
            </div>
            <Link to='/checkout'>
              <button>CHECKOUT NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  ) : (
    <h3>Your cart is empty</h3>
  )
};

export default Cart;
