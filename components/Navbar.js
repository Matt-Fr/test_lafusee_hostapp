import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
