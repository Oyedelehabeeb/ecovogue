"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "./auth";
import { supabase } from "./supabase";

export async function updateCartItemQuantity(itemId, newQuantity) {
  const { data, error } = await supabase
    .from("cart")
    .update({
      quantity: newQuantity,
    })
    .eq("id", itemId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteSavedItem(itemId) {
  const { error } = await supabase.from("saved").delete().eq("id", itemId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/saved");
}

export async function deleteCartItem(itemId) {
  const { error } = await supabase.from("cart").delete().eq("id", itemId);

  if (error) {
    throw new Error("Item could not be deleted", error);
  }

  revalidatePath("/cart");
}

export async function addToCart(newItem) {
  const { data, error } = await supabase.from("cart").insert([newItem]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/saved");
  redirect("/cart");
}
export async function addToSaved(newItem) {
  const { error } = await supabase.from("saved").insert([newItem]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/cart");
  redirect("/saved");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}
