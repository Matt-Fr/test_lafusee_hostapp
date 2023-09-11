import React from "react";
import Image from "next/image";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
