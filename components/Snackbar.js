import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackbarComponent = ({ open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={onClose}>
      <MuiAlert elevation={6} variant="filled" severity="success">
        Item added to the shopping cart
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackbarComponent;
