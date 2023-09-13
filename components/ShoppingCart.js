import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useCart } from "@/store/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useCart();

  const handleDeleteItem = (item) => {
    removeFromCart(item.id);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {cart.length === 0 ? (
          ""
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              padding: "4px",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              marginRight: "8px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              {cart.length === 0 ? "" : cart.length}
            </Typography>
          </div>
        )}

        <ShoppingCartIcon sx={{ color: "white" }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {cart.length === 0 ? (
          <MenuItem>The shopping cart is empty</MenuItem>
        ) : (
          cart.map((item, index) => (
            <MenuItem key={index}>
              <div display="flex" justifyContent="space-between">
                <Typography noWrap width="7rem">
                  {item.title}
                </Typography>

                <span>${item.price}</span>
              </div>
              <Button
                onClick={() => handleDeleteItem(item)}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </MenuItem>
          ))
        )}
        <Divider />
        <MenuItem>
          Total Price: ${totalPrice.toFixed(2)} {/* Display the total price */}
        </MenuItem>
      </Menu>
    </>
  );
}
