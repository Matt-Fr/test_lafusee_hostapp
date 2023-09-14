import Link from "next/link";
import { useCart } from "@/store/CartContext";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const ProductItem = ({ product, onAddToCart }) => {
  const { addToCart, cart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart();
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
          <Button
            onClick={handleAddToCart}
            size="small"
            variant="contained"
            color="secondary"
            sx={{ m: "0.5rem" }}
          >
            Add to cart
          </Button>
          <Link href={`/products/${product.id}`}>
            <Button size="small" variant="contained">
              View item
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
