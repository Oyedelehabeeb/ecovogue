import React from "react";
import Image from "next/image";
import Button from "../_components/Button";
import ProductCard from "../_components/ProductCard";
import { getDiscountedItems } from "../_lib/data-service";

export const revalidate = 30;

export default async function DiscountedItemsPage() {
  const discountedItems = await getDiscountedItems();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mt-12">
        <h1 className="text-3xl font-bold text-center text-customGreen">
          Discounted Items
        </h1>
        <p className="text-gray-500 text-lg ml-2">({discountedItems.length})</p>
      </div>

      {discountedItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-6">
            No discounted items available at the moment.
          </p>
          <Button>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discountedItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 relative hover:shadow-md transition-shadow"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="font-bold text-lg mb-2">{item.name}</h3>

              <p className="text-gray-600 mb-2">
                {item.discount > 0 ? (
                  <>
                    <span className="line-through">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-red-500 ml-2">
                      ${(item.price - item.discount).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <>${item.price.toFixed(2)}</>
                )}
              </p>

              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  Available Sizes: {item.size}
                </p>
                <p className="text-sm text-gray-500">Colors: {item.color}</p>
              </div>

              <div className="flex justify-between items-center">
                <Button>Add to Cart</Button>
                <Button>Add to Saved</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
