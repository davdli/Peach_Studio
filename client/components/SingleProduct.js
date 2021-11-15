import React, { useEffect, useState } from "react";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useSelector, useDispatch, connect } from "react-redux";
import { addToCart } from "../redux/cart";

const SingleProduct = (props) => {
  const { isLoggedIn } = props;
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.auth);
  let [quantity, changeQuantity] = useState(0);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
    // Safe to add dispatch to the dependencies array
  }, []);
  // empty "dependency array" runs once

  // useEffect(() => {
  //   dispatch(fetchSingleProduct(props.match.params.id));
  // }, [product]);

  const handleQuantity = (event) => {
    // event.preventDefault();
    console.log(quantity);
    if (event.target.value === "increase") {
      changeQuantity(quantity++);
    } else if (event.target.value === "decrease") {
      changeQuantity(quantity--);
    }
  };

  const addProduct = (event) => {
    const userObj = {
      productId: event.target.value,
      userId: user.id,
      quantity: quantity,
    };
    dispatch(addToCart(userObj));
  };

  return (
    <div>
      <div className="single-product-view">
        <div className="right">
          <h3>Left in stock: {product.inventory}</h3>
          <h3>Price: ${product.price}</h3>
          <button className="btn first" onClick={addProduct} value={product.id}>
            Add to Cart
          </button>
          <button value="increase" onClick={handleQuantity}>
            +
          </button>
          <div>{quantity}</div>
          <button value="decrease" onClick={handleQuantity}>
            -
          </button>
        </div>
        <div>
          <h3>{product.name}</h3>
          <img src={product.imageUrl} />
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ auth }) => {
  return {
    isLoggedIn: !!auth.id,
  };
};

export default connect(mapState)(SingleProduct);
