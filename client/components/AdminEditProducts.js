import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProduct } from "../redux/singleProduct";

const AdminEditProducts = () => {
  const { singleProduct } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    ...product,
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
      window.location = `/products/${product.id}`;
    };
    dispatch(updateProduct(state));
    redirect();
  };

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <button>Cancel Editing</button>
      </Link>
      <h3>Editing {product.name}:</h3>
      <form id="edit-product" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name: </label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder={state.name}
        />
        <br />

        <label htmlFor="image">Product Image: </label>
        <input
          name="image"
          value={state.imageUrl}
          onChange={handleChange}
          placeholder={state.Url}
        />
        <br />

        <label htmlFor="price">Product Price: </label>
        <input
          name="price"
          value={state.price}
          onChange={handleChange}
          placeholder={state.price}
        />
        <br />

        <label htmlFor="description">Product Description: </label>
        <input
          name="description"
          value={state.description}
          onChange={handleChange}
          placeholder={state.description}
        />
        <br />
        <button type="submit">Submit Product Changes</button>
      </form>
      <hr />
      <div className="editor-current-product">
        <h5>Current Product:</h5>
        <div className="single-product-container">
          <div className="single-product-image">
            <img width="400px" src={product.imageUrl} />
          </div>
          <div className="single-product-info">
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <h4>Description: {product.description}</h4>
            <h4>Size: {product.imageUrl}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProducts;
