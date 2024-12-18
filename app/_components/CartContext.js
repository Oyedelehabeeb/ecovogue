"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const initialState = { itemQuantity: 1 };

function CartProvider({ children }) {
  const [quantity, setQuantity] = useState(initialState.itemQuantity);

  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { CartProvider, useCart };
