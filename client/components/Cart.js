import React from "react";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCartItems, updateCart } from "../redux/cart";
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  console.log('This is the cart:', cart);
  console.log('This is the state.auth:', user);

  let [quantity, changeQuantity] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {// This works as a componentDidMount?
    dispatch(getCartItems(user));
  }, []);

  // useEffect(() => { // Is this a componentDidUpdate?
  //   dispatch(getCartItems(user));
  // }, [cart]);

  const handleDelete = (productId, userId) =>{
    dispatch(updateCart(productId, userId));
  }

  const handleQuantity = (event) => {
    event.preventDefault();
    console.log(quantity);
    if (event.target.value === "increase") {
      changeQuantity(quantity++);
    } else if (event.target.value === "decrease") {
      changeQuantity(quantity--);
    } 
  };

  return (
    <div>
      <div className='cart-wrapper'>
        <h1>YOUR BAG</h1>
        <div className='cart-top'>
          <Link to='/products'>
            <button>CONTINUE SHOPPING</button>
          </Link>
          <div className='cart-top-text'>
            <p>Shopping Bag ({cart.length})</p>
            <p>Your Waitlist (1)</p>
          </div>
          <Link to='/checkout'>
            <button>CHECKOUT NOW</button>
          </Link>
        </div>
        <div className='cart-bottom'>
          <div className='cart-bottom-info'>
            <div className='cart-product'>
              <div className='cart-product-detail'>
                <img src='https://media.istockphoto.com/photos/liivng-coralcolor-of-the-year-2019interior-design-for-living-area-or-picture-id1134702834?b=1&k=6&m=1134702834&s=170667a&w=0&h=2q1rjh0eKl02t3ZCfbeweubkljyd64fZJON5862nXRg=' />
                <div>
                  <p>
                    <b>Product:</b> Peachy Chair
                  </p>
                  <p>
                    <b>Id:</b> 2
                  </p>
                  <div
                    className='cart-product-color'
                    style={{ backgroundColor: "#f4d0a5" }}
                  ></div>
                </div>
              </div>
              <div className='cart-product-price'>
                <div className='cart-product-cost'>
                  <p>$100</p>
                </div>
                <div className='cart-product-amount'>
                  <button value='increase' onClick={handleQuantity}>+</button>
                  <p>3</p>
                  <button value='decrease' onClick={handleQuantity}>-</button>
                  <button value='remove' onClick={handleDelete(0, user.id )}>Remove</button> {/* Somehow we have to pass a product Id perhaps with a map function? */}
                </div>
              </div>
            </div>

            <hr />

            <div className='cart-product'>
              <div className='cart-product-detail'>
                <img src='https://images.urbndata.com/is/image/Anthropologie/40800781_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720' />
                <div>
                  <p>
                    <b>Product:</b> Peachy Table
                  </p>
                  <p>
                    <b>Id:</b> 4
                  </p>
                  <div
                    className='cart-product-color'
                    style={{ backgroundColor: "lightgray" }}
                  ></div>
                </div>
              </div>
              <div className='cart-product-price'>
                <div className='cart-product-cost'>
                  <p>$200</p>
                </div>
                <div className='cart-product-amount'>
                  <button>+</button>
                  <p>1</p>
                  <button>-</button>
                </div>
              </div>
            </div>
          </div>

          <div className='cart-bottom-summary'>
            <p className='order-summary'>Order Summary</p>
            <div>
              <p>Subtotal</p>
              <p>$ 300</p>
            </div>
            <div>
              <p>Estimated Tax</p>
              <p>$20</p>
            </div>
            <div>
              <p>Estimated Shipping</p>
              <p>$50</p>
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bolder" }}>
              <p>Total</p>
              <p>$370</p>
            </div>
            <Link to='/checkout'>
              <button>CHECKOUT NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
