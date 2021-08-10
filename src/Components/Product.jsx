import React, { useContext } from "react";
import StockContext from "../App";

const Product = ({ product }) => {
  const stock = useContext(StockContext);
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
