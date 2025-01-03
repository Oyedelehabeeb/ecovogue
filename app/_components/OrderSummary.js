"use client";

import React from "react";
import Button from "../_components/Button";
import { useCart } from "./CartContext";

export default function OrderSummary({ cartItems }) {
  const { quantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * quantity, 0);
  };

  const formatToNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const deliveryCost = 0.0;
  const taxAmount = 100.0;

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatToNaira(calculateTotal())}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatToNaira(deliveryCost)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatToNaira(taxAmount)}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>
            {formatToNaira(calculateTotal() + deliveryCost + taxAmount)}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 pb-3 text-center mt-4">
        Shipping and taxes calculated at checkout
      </p>
    </>
  );
}
