"use client";

import { Heart } from "lucide-react";
import { addToSaved } from "../_lib/actions";
import { MdFavorite } from "react-icons/md";
import { toast } from "sonner";

function AddToSavedButton({ item }) {
  async function handleAddToSaved() {
    try {
      await addToSaved({
        productId: item.productId,
        name: item.name,
        size: item.size,
        color: item.color,
        price: item.price,
        imageUrl: item.imageUrl,
      });
      toast.success("Item added to saved");
    } catch (error) {
      console.error("Error adding to saved:", error);
      toast.error("Failed to add item to saved");
    }
  }

  return (
    <button
      className="text-gray-500 hover:text-gray-700"
      onClick={handleAddToSaved}
    >
      <MdFavorite className="h-5 w-5 mr-2 text-customGreen" />
    </button>
  );
}

export default AddToSavedButton;
