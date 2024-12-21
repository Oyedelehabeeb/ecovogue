"use client";

import { Trash2 } from "lucide-react";
import { deleteSavedItem } from "../_lib/actions";
import { toast } from "sonner";

function DeleteSavedButton({ itemId }) {
  async function handleDelete() {
    try {
      await deleteSavedItem(itemId);
      toast.success("Item removed from saved");
    } catch (error) {
      toast.error("Failed to remove item from saved");
    }
  }
  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
      <Trash2 size={20} />
    </button>
  );
}

export default DeleteSavedButton;
