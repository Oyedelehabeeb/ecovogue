"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { auth } from "@/app/_lib/auth";

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
  // redirect("/cart");
}
export async function addToSaved(newItem) {
  const { error } = await supabase.from("saved").insert([newItem]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/cart");
}

export async function updateUserDetails(formData) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("You must be logged in");
  }

  const requiredFields = ["phone", "address", "city", "state", "zip"];
  for (const field of requiredFields) {
    if (!formData.get(field)) {
      throw new Error(`${field} is required`);
    }
  }

  const newShippingDetails = {
    fullname: session.user.name,
    email: session.user.email,
    phone: Number(formData.get("phone")),
    address: formData.get("address").slice(0, 200),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    created_at: new Date().toISOString(),
  };

  const { error: shippingError } = await supabase
    .from("shipping")
    .insert([newShippingDetails]);

  if (shippingError) {
    throw new Error("Failed to save shipping details");
  }

  const { error: cartError } = await supabase
    .from("cart")
    .delete()
    .eq("email", session.user.email);

  if (cartError) {
    throw new Error("Failed to clear cart items");
  }
  redirect("/thank-you");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}
