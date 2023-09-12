import React from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Typography,
  Card,
  Button,
  CssBaseline,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";

const ProductDetail = ({ product }) => {
  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="h5" component="p" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" component="p">
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ShoppingCartIcon />}
            sx={{ mt: 2 }}
          >
            Add to cart
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ShareIcon />}
            sx={{ mt: 2, ml: 1 }}
          >
            Share
          </Button>
        </Grid>
      </Grid>
    </Container>
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
