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
    .eq("productId", productId)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getAllProducts() {
  const [categories, featured, trending, specials] = await Promise.all([
    supabase.from("categories").select("*"),
    supabase.from("featured").select("*"),
    supabase.from("trending").select("*"),
    supabase.from("specials").select("*"),
  ]);

  if (categories.error || featured.error || trending.error || specials.error) {
    console.error(
      categories.error || featured.error || trending.error || specials.error
    );
    notFound();
  }

  const allProducts = [
    ...categories.data,
    ...featured.data,
    ...trending.data,
    ...specials.data,
  ];

  return allProducts;
}

export async function getAllProductsById(productId) {
  try {
    const queries = [
      supabase
        .from("categories")
        .select("*")
        .eq("productId", productId)
        .single(),
      supabase.from("featured").select("*").eq("productId", productId).single(),
      supabase.from("trending").select("*").eq("productId", productId).single(),
      supabase.from("specials").select("*").eq("productId", productId).single(),
    ];

    const results = await Promise.allSettled(queries);

    // Find first successful result
    const successfulResult = results.find(
      (result) => result.status === "fulfilled" && result.value.data !== null
    );

    if (successfulResult) {
      return successfulResult.value.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }
}

export async function getWomenProducts() {
  const [categories, featured, trending, specials] = await Promise.all([
    supabase.from("categories").select("*").eq("type", "women"),
    supabase.from("featured").select("*").eq("type", "women"),
    supabase.from("trending").select("*").eq("type", "women"),
    supabase.from("specials").select("*").eq("type", "women"),
  ]);

  if (categories.error || featured.error || trending.error || specials.error) {
    console.error(
      categories.error || featured.error || trending.error || specials.error
    );
    notFound();
  }

  const allProducts = [
    ...categories.data,
    ...featured.data,
    ...trending.data,
    ...specials.data,
  ];

  return allProducts;
}
export async function getMenProducts() {
  const [categories, featured, trending, specials] = await Promise.all([
    supabase.from("categories").select("*").eq("type", "men"),
    supabase.from("featured").select("*").eq("type", "men"),
    supabase.from("trending").select("*").eq("type", "men"),
    supabase.from("specials").select("*").eq("type", "men"),
  ]);

  if (categories.error || featured.error || trending.error || specials.error) {
    console.error(
      categories.error || featured.error || trending.error || specials.error
    );
    notFound();
  }

  const allProducts = [
    ...categories.data,
    ...featured.data,
    ...trending.data,
    ...specials.data,
  ];

  return allProducts;
}

export async function getBabiesProducts() {
  const { data, error } = await supabase.from("babies").select("*");

  if (error) {
    notFound();
  }

  return data;
}
