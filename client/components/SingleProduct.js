import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";
import { addToCart } from "../redux/cart";
const mapStateToProps = ({ product }) => {
  return { product };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
});

const SingleProduct = ({ product, fetchSingleProduct, match }) => {
  useEffect(() => {
    fetchSingleProduct(match.params.id);
  }, []);

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <h3>Left in stock: {product.inventory}</h3>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
