import { supabase } from "./supabase";
import { notFound } from "next/navigation";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
export async function getFeatured() {
  const { data, error } = await supabase.from("featured").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
export async function getTrending() {
  const { data, error } = await supabase.from("trending").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
export async function getSpecials() {
  const { data, error } = await supabase.from("specials").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCart() {
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("type", "women");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
export async function getQuantity() {
  const { data, error } = await supabase.from("cart").select("quantity");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
