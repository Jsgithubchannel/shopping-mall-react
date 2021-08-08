import React, { useContext } from "react";

const Product = ({ product }) => {
  // let 재고 = useContext(재고context);
  return (
    <div className="product">
      <img src={product.imgSrc} alt="cloth" />
      <h4>{product.title}</h4>
      <p>
        {product.content} & {product.price} WON
      </p>
      {/* {재고} */}
    </div>
  );
};

export default Product;
