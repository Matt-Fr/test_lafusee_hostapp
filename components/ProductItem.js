import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart, cart } = useCart();
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function with the product
  };

  return (
    <>
      <Link href={`/products/${product.id}`}>
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
      </Link>
      <button onClick={handleAddToCart}>add to cart</button>
    </>
  );
};

export default ProductItem;
