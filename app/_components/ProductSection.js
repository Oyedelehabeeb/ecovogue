"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { PAGE_SIZE } from "../_lib/constants";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductSection({
  title,
  initialData,
  initialCount,
  fetchFunction,
  className = "",
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(initialCount / PAGE_SIZE);

  async function handlePageChange(newPage) {
    if (newPage < 1 || newPage > pageCount || loading) return;

    // setLoading(true);
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
  }

  return (
    <section className={`p-4 bg-white relative ${className}`}>
      <h2 className="text-2xl font-bold text-center mb-3 capitalize">
        {title}
      </h2>

      <div className="relative flex items-center justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className="bg-stone-400 absolute left-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft size={30} className="text-white" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {initialData.map((product) => (
            <div key={product.id} className={loading ? "opacity-50" : ""}>
              <ProductCard
                id={product.id}
                item={product}
                productId={product.productId}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount || loading}
          className="bg-stone-400 absolute right-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        Page {currentPage} of {pageCount}
      </div>
    </section>
  );
}
