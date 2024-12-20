"use client";

import Button from "../_components/Button";
import { useCart } from "./CartContext";

function OrderSummary({ cartItems }) {
  const { quantity } = useCart();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <h2 className="text-xl text-customGreen font-bold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$15.50</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${(parseFloat(calculateTotal()) + 25.5).toFixed(2)}</span>
        </div>
      </div>

      <Button className="w-full mt-6">Proceed to Checkout</Button>

      <p className="text-sm text-gray-600 pb-3 text-center mt-4">
        Shipping and taxes calculated at checkout
      </p>
    </>
  );
}

export default OrderSummary;
