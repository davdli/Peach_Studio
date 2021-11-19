import React, { useEffect, useState } from "react";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useSelector, useDispatch, connect } from "react-redux";
import { addToCart } from "../redux/cart";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.auth);
  let [quantity, changeQuantity] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
    // Safe to add dispatch to the dependencies array
  }, [quantity]);
  // empty "dependency array" runs once

  const addProduct = (event) => {
    const userObj = {
      productId: event.target.value,
      userId: user.id,
      quantity: quantity,
    };
    dispatch(addToCart(userObj));
    changeQuantity(0);
  };

  return (
    <div>
      <div className='single-product-view'>
        <div className='right'>
          <h3>Left in stock: {product.inventory}</h3>
          <h3>${product.price}</h3>
          <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
            <button value="increase" onClick={() => changeQuantity(quantity + 1)} style={{margin: '10px'}}>
              +
            </button>
            <div>{quantity}</div>
            <button value="decrease" onClick={() => changeQuantity(quantity - 1)} style={{margin: '10px'}}>
              -
            </button>
          </div>
          <button className='btn first' onClick={addProduct} value={product.id}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3>{product.name}</h3>
          <img src={product.imageUrl} />
          <p>{product.description}</p>
        </div>
      </div>
      <Link className='singleproductback' to='/products'>
        BACK
      </Link>
    </div>
  );
};

const mapState = ({ auth }) => {
  return {
    isLoggedIn: !!auth.id,
  };
};

export default connect(mapState)(SingleProduct);
