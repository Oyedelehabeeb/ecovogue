// "use client";

// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// const initialState = { itemQuantity: 1 };

// function CartProvider({ children }) {
//   const [quantity, setQuantity] = useState(initialState.itemQuantity);

//   return (
//     <CartContext.Provider value={{ quantity, setQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// function useCart() {
//   const context = useContext(CartContext);

//   if (context === undefined)
//     throw new Error("Context was used outside provider");

//   return context;
// }

// export { CartProvider, useCart };

"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const initialState = { itemQuantity: 1 };

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(initialState.itemQuantity);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, quantity, setQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// export default CartProvider;
