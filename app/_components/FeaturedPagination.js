"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const ITEMS_PER_PAGE = 4;

export default function FeaturedPagination({ featured }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(featured.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = featured.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-stone-400 absolute left-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft size={30} className="text-white" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {currentItems.map((product) => (
            <div key={product.id}>
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
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-stone-400 absolute right-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </>
  );
}
