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

export async function getAllProductsById(id) {
  const [categories, featured, trending] = await Promise.all([
    supabase.from("categories").select("*").eq("id", id),
    supabase.from("featured").select("*").eq("id", id),
    supabase.from("trending").select("*").eq("id", id),
  ]);

  if (categories.error || featured.error || trending.error) {
    console.error(categories.error || featured.error || trending.error);
    notFound();
  }

  return {
    categories: categories.data,
    featured: featured.data,
    trending: trending.data,
  };
}
