"use client";

import React from "react";
import Button from "../_components/Button";
import { useCart } from "./CartContext";

export default function OrderSummary({ cartItems }) {
  const { quantity } = useCart();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * quantity, 0)
      .toFixed(2);
  };

  const formatToNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const shippingCost = 5000;
  const taxAmount = 2500;

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
          <span>{formatToNaira(shippingCost)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatToNaira(taxAmount)}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>
            {formatToNaira(calculateTotal() + shippingCost + taxAmount)}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 pb-3 text-center mt-4">
        Shipping and taxes calculated at checkout
      </p>
    </>
  );
}
