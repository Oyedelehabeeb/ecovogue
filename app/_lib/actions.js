import { supabase } from "./supabase";

export async function updateCartItemQuantity(itemId, newQuantity) {
  const { data, error } = await supabase
    .from("cart")
    .update({
      // If you want to track quantity separately
      quantity: newQuantity,
    })
    .eq("id", itemId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
