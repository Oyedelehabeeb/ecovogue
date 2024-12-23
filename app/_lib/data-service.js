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
  const { data, error } = await supabase.from("cart").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getSaved() {
  const { data, error } = await supabase.from("saved").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getDiscountedItems() {
  const { data, error } = await supabase.from("discountedItems").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function fetchProductById(productId) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getAllProducts() {
  const [categories, featured, trending] = await Promise.all([
    supabase.from("categories").select("*"),
    supabase.from("featured").select("*"),
    supabase.from("trending").select("*"),
  ]);

  if (categories.error || featured.error || trending.error) {
    console.error(categories.error || featured.error || trending.error);
    notFound();
  }

  // Combine all products into a single array
  const allProducts = [...categories.data, ...featured.data, ...trending.data];

  return allProducts;
}
export async function getAllProductsById(productId) {
  const [categories, featured, trending] = await Promise.all([
    supabase.from("categories").select("*").eq("productId", productId),
    supabase.from("featured").select("*").eq("productId", productId),
    supabase.from("trending").select("*").eq("productId", productId),
  ]);

  if (categories.error || featured.error || trending.error) {
    console.error(categories.error || featured.error || trending.error);
    notFound();
  }

  // Combine all products into a single array
  const allProducts = [...categories.data, ...featured.data, ...trending.data];

  // Return the first product found (assuming productId is unique across all tables)
  return allProducts.length > 0 ? allProducts[0] : null;
}
