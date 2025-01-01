import React from "react";
import Image from "next/image";
import Button from "../_components/Button";
import ProductCard from "../_components/ProductCard";
import { getDiscountedItems } from "../_lib/data-service";
import DiscountProductGrid from "../_components/DiscountProductGrid";
import { Search } from "lucide-react";

export const revalidate = 30;

export default async function DiscountedItemsPage() {
  const discountedItems = await getDiscountedItems();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-red-600 to-orange-500">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-4">
            LIMITED TIME OFFER
          </div>
          <h1 className="text-4xl font-bold mb-4">Special Discounts</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Get up to 70% off on selected items
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap gap-4 items-center w-full md:w-auto mb-4 md:mb-0">
            {/* Search Input */}
            <div className="relative flex-1 md:flex-none md:w-64">
              <input
                type="search"
                placeholder="Search products..."
                className="bg-gray-100 rounded-lg px-4 py-2 pr-8 w-64 pl-10 border focus:outline-none focus:ring-2 focus:ring-customGreen"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>

            {/* Filters */}

            <select className="px-4 py-2 border rounded-md bg-gray-100">
              <option>Latest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            {initialProducts.length} items found
          </div>
        </div>

        {/* Discount Product Grid */}
        <DiscountProductGrid initialProducts={discountedItems} />
      </div>
    </div>
  );
}
