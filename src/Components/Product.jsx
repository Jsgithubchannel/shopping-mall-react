import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imgSrc} alt="cloth" />
      <h4>{product.title}</h4>
      <p>
        {product.content} & {product.price} WON
      </p>
    </div>
  );
};

export default Product;
