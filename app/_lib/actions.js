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
  if (!session) throw new Error("You must be logged in");

  const newShippingDetails = {
    fullname: session?.user?.name,
    email: session?.user?.email,
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
  };

  console.log(newShippingDetails);

  const { error } = await supabase
    .from("shipping")
    .insert([newShippingDetails]);

  if (error) throw new Error("Shipping could not be completed");

  revalidatePath("/shipping");

  redirect("/thank-you");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}
