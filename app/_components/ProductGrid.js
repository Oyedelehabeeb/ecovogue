"use client";

import { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import Loader from "../loader";
import { Search } from "lucide-react";
import ProductOperations from "./ProductOperation";
import { useSearchParams } from "next/navigation";

const PRODUCTS_PER_PAGE = 8;

export default function ProductGrid({ initialProducts }) {
  const [products, setProducts] = useState(
    initialProducts.slice(0, PRODUCTS_PER_PAGE)
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialProducts.length > PRODUCTS_PER_PAGE
  );
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "price-asc";

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setPage(1);

    const filtered = initialProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
    setProducts(filtered.slice(0, PRODUCTS_PER_PAGE));
    setHasMore(filtered.length > PRODUCTS_PER_PAGE);
  };

  // Sorting logic
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = [...products].sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const startIndex = page * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      const newProducts = filteredProducts.slice(startIndex, endIndex);

      if (
        newProducts.length < PRODUCTS_PER_PAGE ||
        endIndex >= filteredProducts.length
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
  }, [loading, hasMore, page, filteredProducts]);

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
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="flex flex-wrap gap-4 items-center w-full md:w-auto mb-4 md:mb-0">
          <div className="relative flex-1 md:flex-none md:w-64">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full bg-gray-100 rounded-lg px-4 py-2 pr-8 pl-10 border focus:outline-none focus:ring-2 focus:ring-customGreen"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          <ProductOperations />
        </div>
        <div className="text-sm text-gray-600">
          {filteredProducts.length} items found
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {sortedProducts.map((product) => (
          <ProductCard
            item={product}
            key={product.id}
            productId={product.productId}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div id="loader" className="flex justify-center items-center py-4">
        {loading && <Loader />}
      </div>
    </div>
  );
}
