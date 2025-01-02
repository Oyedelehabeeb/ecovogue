"use client";

import { FaCartPlus, FaHeart, FaInfoCircle } from "react-icons/fa";
import { addToCart, addToSaved } from "../_lib/actions";
import { toast } from "sonner";

function ProductMenu({ item }) {
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
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart");
    }
  }

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
    <>
      <FaCartPlus
        onClick={handleAddToCart}
        size={36}
        className="text-customGreen text-2xl"
      />
      <FaHeart
        onClick={handleAddToSaved}
        size={36}
        className="text-customGreen text-2xl"
      />
      <FaInfoCircle size={36} className="text-customGreen text-2xl" />
    </>
  );
}

export default ProductMenu;
