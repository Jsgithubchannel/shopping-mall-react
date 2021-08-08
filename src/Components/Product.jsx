import React, { useContext } from "react";
import StockContext from "../App";

const Product = ({ product }) => {
  const stock = React.useContext(StockContext);
  if (stock === undefined) {
    throw new Error("ERROR");
  }
  return stock;
  return (
    <div className="product">
      <img src={product.imgSrc} alt="cloth" />
      <h4>{product.title}</h4>
      <p>
        {product.content} & {product.price} WON
      </p>
      {stock}
    </div>
  );
};

export default Product;
