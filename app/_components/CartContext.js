"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Store quantities as state
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (itemId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, newQuantity),
    }));
  };

  const getQuantity = (itemId) => {
    return quantities[itemId] || 1;
  };

  return (
    <CartContext.Provider
      value={{
        quantities,
        updateQuantity,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
