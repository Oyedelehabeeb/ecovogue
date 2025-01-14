"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const ITEMS_PER_PAGE = 4;

export default function TrendingPagination({ trending }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("trendingPage")) || 1;
  const totalPages = Math.ceil(trending.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = trending.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("trendingPage", newPage);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="absolute left-0 z-10 bg-stone-400 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft size={30} className="text-white" />
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {currentItems.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              item={item}
              productId={item.productId}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="absolute right-0 z-10 bg-stone-400 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}
