"use client";

import { useCart } from "./CartContext";

function QuantityButton() {
  const { quantity, setQuantity } = useCart();

  function quantityIncrement() {
    setQuantity(quantity + 1);
  }

  function quantityDecrement() {
    setQuantity(Math.max(1, quantity - 1));
  }

  return (
    <>
      <button onClick={quantityDecrement} className="bg-gray-200 px-2 rounded">
        -
      </button>
      <span className="mx-4">{quantity}</span>
      <button onClick={quantityIncrement} className="bg-gray-200 px-2 rounded">
        +
      </button>
    </>
  );
}

export default QuantityButton;
