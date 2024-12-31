import React from "react";
import Image from "next/image";
import Button from "../_components/Button";
import ProductCard from "../_components/ProductCard";
import { getDiscountedItems } from "../_lib/data-service";
import DiscountProductGrid from "../_components/DiscountProductGrid";

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
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md">
              <option>All Categories</option>
              <option>70% Off & Above</option>
              <option>50% Off & Above</option>
              <option>30% Off & Above</option>
            </select>
            <select className="px-4 py-2 border rounded-md">
              <option>Biggest Discount</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
          <div className="text-sm text-red-600 font-medium">
            {discountedItems.length} items on sale
          </div>
        </div>

        {/* Discount Product Grid */}
        <DiscountProductGrid initialProducts={discountedItems} />
      </div>
    </div>
  );
}
