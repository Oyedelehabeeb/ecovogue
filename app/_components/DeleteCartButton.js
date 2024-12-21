"use client";

import { Trash2 } from "lucide-react";
import { deleteCartItem } from "../_lib/actions";
import { toast } from "sonner";

export default function DeleteCartButton({ itemId }) {
  async function handleDelete() {
    try {
      await deleteCartItem(itemId);
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Failed to remove item from cart");
    }
  }
  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
      <Trash2 size={20} />
    </button>
  );
}