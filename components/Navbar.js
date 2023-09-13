import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <IconButton sx={{ color: "white" }}>
            <HomeIcon />
          </IconButton>
        </Link>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ecommerce Project
        </Typography>

        <ShoppingCart />
      </Toolbar>
    </AppBar>
  );
}
