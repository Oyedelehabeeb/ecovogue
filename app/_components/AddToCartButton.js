"use client";

import { ShoppingCart } from "lucide-react";
import Button from "./Button";
import { addToCart } from "../_lib/actions";
import { toast } from "sonner";
import { useCart } from "./CartContext";

function AddToCartButton({ item, useremail }) {
  async function handleAddToCart() {
    try {
      await addToCart({
        productId: item.productId,
        name: item.name,
        email: useremail,
        size: item.size,
        color: item.color,
        price: item.price,
        order: Math.random().toString(36).substring(7).toUpperCase(),
        imageUrl: item.imageUrl,
      });
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart");
    }
  }

  return <Button onClick={handleAddToCart}>Add to Cart</Button>;
}

export default AddToCartButton;
