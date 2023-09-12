import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/CartContext";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

const ProductItem = ({ product }) => {
  const { addToCart, cart } = useCart();
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function with the product
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card component="div" className="card">
          <CardMedia
            component="img"
            image={product.image}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Card>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography>{`$${product.price}`}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button size="small">View item</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
