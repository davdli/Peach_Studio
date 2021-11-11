import React from "react";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SingleProduct = (props) => {
  const product = useSelector((state) => state.product);
  // this is like mapdispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
    // Safe to add dispatch to the dependencies array
  }, []);
  return (
    <div>
      <div className="single-product-view">
        <div className="right">
          <h3>Left in stock: {product.inventory}</h3>
          <h3>Price: ${product.price}</h3>
          <button className="btn first">Add to Cart</button>
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
export default SingleProduct;
