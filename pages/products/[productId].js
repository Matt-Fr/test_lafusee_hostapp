import React from "react";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <Image src={product.image} alt={product.title} width={200} height={200} />
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the list of all product IDs
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  // Generate paths for all products
  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Render 404 if the path is not found
  };
}

export async function getStaticProps({ params }) {
  const productId = params.productId;

  try {
    // Fetch the product details by productId
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!res.ok) {
      throw new Error("Product not found");
    }

    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: null, // Return null to indicate that the product was not found
      },
    };
  }
}

export default ProductDetail;
