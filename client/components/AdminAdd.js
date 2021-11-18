import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createProduct } from "../redux/singleProduct";

const AdminAdd = () => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
  });

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const redirect = () => {
      window.location = `/admin-products`;
    };

    dispatch(createProduct(state));
    redirect();
  };

  return (
    <div className="admin-product-container">
      <Link to="/admin-portal">
        <button className="admin-button">←Admin Portal</button>
      </Link>
      <h3>Creating New Inventory:</h3>
      <form id="create-product" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name: </label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name here"
        />
        <br />

        <label htmlFor="imageUrl"> Image: </label>
        <input
          name="image"
          value={product.imageUrl}
          onChange={handleChange}
          placeholder="Enter url to image here"
        />
        <br />

        <label htmlFor="price"> Price: </label>
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter price here"
        />
        <br />

        <label htmlFor="description"> Description: </label>
        <input
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter furniture description here"
        />
        <br />

        <br />
        <button className="admin-button" type="submit">
          Submit Changes
        </button>
      </form>
    </div>
  );
};

export default AdminAdd;
