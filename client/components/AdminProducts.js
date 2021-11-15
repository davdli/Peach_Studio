import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/products";

const AdminProducts = () => {
  // this is the same  mapstate
  const products = useSelector((state) => state.products);
  // this is the same  mapdispatch
  const dispatch = useDispatch();
  //when we pass in an empty arr it acts as componentdidmount and when we dont pass in a second arg it acts as componentdidupdate
  useEffect(() => {
    dispatch(fetchProducts());
    // Safe to add dispatch to the dependencies array
  }, []);

  return (
    <div className="content">
      <div className="container">
        <Link to="/admin-products/create">
          <button>Create New Peachy Item</button>
        </Link>
        <h1>Product List</h1>
        <div id="admin-products">
          {products.map((product) => (
            <div key={product.id} id="product">
              {product.name}
              <br />
              <Link to={`/products/${product.id}`}>
                <button>View Product Page</button>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/admin-portal">
          <button>Back to Administrator Portal</button>
        </Link>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(AdminProducts);
