"use client";

import { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import Loader from "../loader";

const PRODUCTS_PER_PAGE = 4;

export default function ProductGrid({ initialProducts }) {
  const [products, setProducts] = useState(
    initialProducts.slice(0, PRODUCTS_PER_PAGE)
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialProducts.length > PRODUCTS_PER_PAGE
  );

  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const startIndex = page * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      const newProducts = initialProducts.slice(startIndex, endIndex);

      if (
        newProducts.length < PRODUCTS_PER_PAGE ||
        endIndex >= initialProducts.length
      ) {
        setHasMore(false);
      }

      setProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, initialProducts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    const loader = document.getElementById("loader");
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [hasMore, loadMoreProducts]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.productId}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
      <div id="loader" className="flex justify-center items-center py-4">
        {loading && <Loader />}
      </div>
    </>
  );
}
