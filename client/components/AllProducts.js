import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./Footer";

const AllProducts = (props) => {
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
    <div>
      <h2 className="products-header"> All Peachy Furniture</h2>
      <div className="all-furniture">
        <div className="furniture-grid">
          {products.map((product) => (
            <div key={product.id} className="furniture-item">
              <Link to={`/products/${product.id}`}>
                <img
                  id="productPhoto"
                  src={product.imageUrl}
                  className="images"
                />
                <p>{product.name}</p>
              </Link>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default AllProducts;
