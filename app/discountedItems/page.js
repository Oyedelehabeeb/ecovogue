import React from "react";
import Image from "next/image";
import Button from "../_components/Button";
import ProductCard from "../_components/ProductCard";
import { getDiscountedItems } from "../_lib/data-service";
import DiscountProductGrid from "../_components/DiscountProductGrid";
import { Search } from "lucide-react";
import Spinner from "../_components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "discounted-items",
};

export const revalidate = 30;

export default async function DiscountedItemsPage() {
  const discountedItems = await getDiscountedItems();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[300px] bg-gradient-to-r from-red-600 to-orange-500 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-6">
            LIMITED TIME OFFER
          </div>
          <h1 className="text-4xl font-bold mb-4">Special Discounts</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Get up to 30% off on selected items
          </p>
        </div>
      </div>

      <Suspense fallback={<Spinner />} key={discountedItems.productId}>
        <div className="container mx-auto px-4 py-8">
          <DiscountProductGrid initialProducts={discountedItems} />
        </div>
      </Suspense>
    </div>
  );
}
