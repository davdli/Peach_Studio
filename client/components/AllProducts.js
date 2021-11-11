import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/products";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    return (
      <div className="test-products">
        All Products
        {this.props.products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img id="productPhoto" src={product.imageUrl} />
              <p>{product.name}</p>
            </Link>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
