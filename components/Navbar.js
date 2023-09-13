import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home"; //
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <IconButton
            sx={{
              color: "white",
            }}
          >
            <HomeIcon />
          </IconButton>
        </Link>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ecommerce Project
        </Typography>
        <IconButton color="inherit" aria-label="cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
