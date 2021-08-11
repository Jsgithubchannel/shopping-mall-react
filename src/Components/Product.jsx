import React, { useContext } from "react";
import StockContext from "../App";
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const stock = useContext(StockContext);
  const history = useHistory();
  return (
    <div
      className="product"
      onClick={() => {
        history.push("/detail/" + product.id);
      }}
    >
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
