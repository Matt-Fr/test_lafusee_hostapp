import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const indexOfItemToRemove = cart.findIndex(
      (product) => product.id === productId
    );

    if (indexOfItemToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexOfItemToRemove, 1); // Remove the item at the found index
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
