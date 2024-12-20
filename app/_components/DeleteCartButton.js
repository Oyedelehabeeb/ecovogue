"use client";

import { Trash2 } from "lucide-react";
import { deleteCartItem } from "../_lib/actions";

export default function DeleteCartButton({ itemId }) {
  async function handleDelete() {
    await deleteCartItem(itemId);
  }
  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
      <Trash2 size={20} />
    </button>
  );
}
