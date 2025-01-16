"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const ITEMS_PER_PAGE = 4;

export default function FeaturedPagination({ featured }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("featuredPage")) || 1;
  const totalPages = Math.ceil(featured.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = featured.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("featuredPage", newPage);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="hidden sm:block md:block lg:block relative">
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
      <div className="block sm:hidden md:hidden lg:hidden relative">
        <div className="flex flex-col items-center justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 sm:gap-6 px-0 sm:px-10">
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

          <div>
            <div className="flex items-center justify-center mt-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="absolute left-0 z-10 bg-stone-400 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft size={30} className="text-white" />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="absolute right-0 z-10 bg-stone-400 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight size={30} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </>
  );
}
