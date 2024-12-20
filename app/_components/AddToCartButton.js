"use client";

import { ShoppingCart } from "lucide-react";
import Button from "./Button";
import { addToCart } from "../_lib/actions";

function AddToCartButton({ item }) {
  async function handleAddToCart() {
    try {
      await addToCart({
        productId: item.productId,
        name: item.name,
        size: item.size,
        color: item.color,
        price: item.price,
        imageUrl: item.imageUrl,
      });

      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart");
    }
  }

  return (
    <Button
      className="flex-grow flex items-center justify-center"
      onClick={handleAddToCart}
    >
      <ShoppingCart size={16} className="mr-2" />
      Add to Cart
    </Button>
  );
}

export default AddToCartButton;
