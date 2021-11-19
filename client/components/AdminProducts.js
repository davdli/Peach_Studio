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
    <div className="admin-product-container">
      <div className="card-holder">
        <Link to="/admin-portal">
          <button className="admin-button">←Admin Portal</button>
        </Link>
        <Link to="/admin-products/create">
          <button className="admin-button">+Add Inventory</button>
        </Link>
        <h1>Current Inventory</h1>
        <div className="card">
          <table>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Sales Price</th>
              <th>Current Stock</th>
              <th>Category</th>
            </tr>
            {products.map((product) => (
              <tr key={product.id} id="product">
                <td>
                  <img src={product.imageUrl} className="theimage" />
                </td>
                <td>
                  {" "}
                  <Link to={`/products/${product.id}`}>{product.name} </Link>
                </td>
                <td>${product.price}</td>
                <td>{product.inventory}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </table>
        </div>
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
