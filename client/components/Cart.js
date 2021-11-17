import React from "react";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import {
  getCartItems,
  updateCart,
  increaseQuantity,
  decreaseQuantity,
  getGuestCart,
  guestIncreaseQty,
  removeItem,
} from "../redux/cart";

import { Link } from "react-router-dom";

const Cart = (props) => {
  let cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  useEffect(() => {
    if (user.id) {
      dispatch(getCartItems(user));
    } else {
      getGuestCart(dispatch);
    }
  }, [user]);



  const handleDelete = (event) => {
    dispatch(removeItem(event.target.value, user.id));
    // changeQuantity(prevCount => prevCount + 1);
  };

  const handleIncrease = (event) => {
    if (user.id) {
      dispatch(increaseQuantity(event.target.value, user.id));
      // changeQuantity((prevCount) => prevCount + 1);
    } else {
      console.log("this is cart", cart);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === Number(event.target.value)) {
          cart[i].cart.quantity++;
          dispatch(guestIncreaseQty(cart));
        }
      }
    }
  };
  const handleDecrease = (event) => {
    if (user.id) {
      dispatch(decreaseQuantity(event.target.value, user.id));
      // changeQuantity((prevCount) => prevCount - 1);
    } else {
      console.log("this is cart", cart);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === Number(event.target.value)) {
          cart[i].cart.quantity--;
          dispatch(guestIncreaseQty(cart));
        }
      }
    }
  };

  return cart.length > 0 ? (
    <div>
      <div className='cart-wrapper'>
        <h1>YOUR BAG</h1>
        <div className='cart-top'>
          <Link to='/products'>
            <button>CONTINUE SHOPPING</button>
          </Link>
          <div className='cart-top-text'>
            <p>Shopping Bag ({cart.length})</p>
            <p>Your Wishlist (0)</p>
          </div>
          <Link to='/checkout'>
            <button>CHECKOUT NOW</button>
          </Link>
        </div>
        <div className='cart-bottom'>
          <div className='cart-bottom-info'>
            {cart.map((product) => (
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
                    <p>Price: ${product.price}</p>
                    <button value={product.id} onClick={handleIncrease}>
                      +
                    </button>
                    <p>Quantity: {product.cart.quantity}</p>
                    <button value={product.id} onClick={handleDecrease}>
                      -
                    </button>
                  </div>
                  <div className='cart-product-amount'>
                    <button
                      className=''
                      onClick={handleDelete}
                      value={product.id}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-bottom-summary'>
            <p className='order-summary'>Order Summary</p>
            <div>
              <p>Subtotal</p>
              <p>
                $
                {cart
                  .reduce((accum, product) => {
                    return (
                      accum +
                      Number(product.price) * Number(product.cart.quantity)
                    );
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div>
              <p>Estimated Tax</p>
              <p>
                $
                {(
                  cart.reduce((accum, product) => {
                    return (
                      accum +
                      Number(product.price) * Number(product.cart.quantity)
                    );
                  }, 0) * 0.045
                ).toFixed(2)}
              </p>
            </div>
            <div>
              <p>Estimated Shipping</p>
              <p>${(100).toFixed(2)}</p>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bolder" }}>
              <p>Total</p>

              <p>${Number(Number(cart.reduce((accum, product) => {
                return accum + Number(product.price) * Number(product.cart.quantity)
              }, 0).toFixed(2)) + Number((cart.reduce((accum, product) => {
                return accum + Number(product.price) * Number(product.cart.quantity)
              }, 0) * 0.045).toFixed(2)) + 100).toFixed(2)}</p>
            </div>
            <Link to='/checkout'>
              <button>CHECKOUT NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <div className='cart-wrapper' style={{ height: "70vh" }}>
        <h1>YOUR BAG</h1>
        <div className='cart-top'>
          <Link to='/products'>
            <button>CONTINUE SHOPPING</button>
          </Link>
          <div className='cart-top-text'>
            <p>Shopping Bag (0)</p>
            <p>Your Wishlist (0)</p>
          </div>
          <Link to='/products'>
            <button>CONTINUE SHOPPING</button>
          </Link>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>Your bag is empty!</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
