"use client";
import { useCart } from "./CartContext";

function QuantityButton({ itemId }) {
  const { getQuantity, updateQuantity } = useCart();
  const quantity = getQuantity(itemId);

  function handleIncrement() {
    updateQuantity(itemId, quantity + 1);
  }

  function handleDecrement() {
    updateQuantity(itemId, quantity - 1);
  }

  return (
    <>
      <button onClick={handleDecrement} className="bg-gray-200 px-2 rounded">
        -
      </button>
      <span className="mx-4">{quantity}</span>
      <button onClick={handleIncrement} className="bg-gray-200 px-2 rounded">
        +
      </button>
    </>
  );
}

export default QuantityButton;
