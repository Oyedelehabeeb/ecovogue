"use client";

import { Heart } from "lucide-react";
import { addToSaved } from "../_lib/actions";

function AddToSavedButton({ item }) {
  async function handleAddToSaved() {
    await addToSaved({
      productId: item.productId,
      name: item.name,
      size: item.size,
      color: item.color,
      price: item.price,
      imageUrl: item.imageUrl,
    });
  }

  return (
    <button
      className="text-gray-500 hover:text-gray-700"
      onClick={handleAddToSaved}
    >
      <Heart size={20} />
    </button>
  );
}

export default AddToSavedButton;
