"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../_components/Button";
import { Trash2, ShoppingCart } from "lucide-react";

export default function SavedItemsPage() {
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      name: "Sustainable Linen Dress",
      price: 149.99,
      sizes: ["XS", "S", "M", "L"],
      colors: ["Natural", "Sage", "Terracotta"],
      image: "/placeholder-image.png",
    },
    {
      id: 2,
      name: "Recycled Denim Jacket",
      price: 189.99,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Light Wash", "Dark Wash"],
      image: "/placeholder-image.png",
    },
  ]);

  const removeItem = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    // In a real app, this would integrate with cart state management
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Saved Items
        <span className="text-gray-500 text-lg ml-4">
          ({savedItems.length} items)
        </span>
      </h1>

      {savedItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-6">
            You haven't saved any items yet
          </p>
          <Button>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 relative hover:shadow-md transition-shadow"
            >
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="w-full h-64 relative mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="font-bold text-lg mb-2">{item.name}</h3>

              <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  Available Sizes: {item.sizes.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Colors: {item.colors.join(", ")}
                </p>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={() => addToCart(item)}
                  className="flex-grow flex items-center justify-center"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
