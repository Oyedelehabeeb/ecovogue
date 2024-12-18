"use client";

import { Trash2 } from "lucide-react";

export default function DeleteCartButton() {
  const removeItem = (id) => {
    cartItems.filter((item) => item.id !== id);
  };

  return (
    <button
      onClick={() => removeItem(item.id)}
      className="text-red-500 hover:text-red-700"
    >
      <Trash2 size={20} />
    </button>
  );
}
