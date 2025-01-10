"use client";

import { Heart } from "lucide-react";
import { addToSaved } from "../_lib/actions";
import { MdFavorite } from "react-icons/md";
import { toast } from "sonner";
import Button from "./Button";

function AddToSavedButton({ item, useremail }) {
  async function handleAddToSaved() {
    try {
      await addToSaved({
        productId: item.productId,
        name: item.name,
        email: useremail,
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

  return <Button onClick={handleAddToSaved}>Add To Saved</Button>;
}

export default AddToSavedButton;
