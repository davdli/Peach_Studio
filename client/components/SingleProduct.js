import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id);
  }
  render() {
    const product = this.props.product;
    return (
      <div>
        <div className="single-product-view">
          <div className="right">
            <h3>Left in stock: {product.inventory}</h3>
            <h3>Price: ${product.price}</h3>
            <button className="btn first">Add to Cart</button>
          </div>
          <div className="left">
            <h3>{product.name}</h3>
            <img src={product.imageUrl} />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleProduct: (id) => {
      dispatch(fetchSingleProduct(id));
    },
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
