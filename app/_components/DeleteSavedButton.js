"use client";

import { Trash2 } from "lucide-react";
import { deleteSavedItem } from "../_lib/actions";

function DeleteSavedButton({ itemId }) {
  async function handleDelete() {
    await deleteSavedItem(itemId);
  }
  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
      <Trash2 size={20} />
    </button>
  );
}

export default DeleteSavedButton;
