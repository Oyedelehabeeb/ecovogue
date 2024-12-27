// "use client";

import DeleteCartButton from "@/app/_components/DeleteCartButton";
import QuantityButton from "@/app/_components/QuantityButton";
import { Heart } from "lucide-react";
import Image from "next/image";
import Button from "../_components/Button";
import { getCart } from "../_lib/data-service";
import OrderSummary from "../_components/OrderSummary";
import AddToSavedButton from "../_components/AddToSavedButton";

export const revalidate = 0;

export default async function CartPage() {
  const cartItems = await getCart();

  const quantity = 1;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mt-10 text-customGreen text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
          <Button>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center pb-6 relative shadow-lg"
              >
                <div className="w-24 h-24 mr-6 relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-600">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>

                  <div className="flex items-center mt-2">
                    <QuantityButton item={item} quantity={quantity} />
                  </div>
                </div>

                <div className="absolute top-0 right-3 flex space-x-2">
                  <DeleteCartButton cartItems={cartItems} itemId={item.id} />
                  <AddToSavedButton item={item} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 pt-4 rounded-lg h-fit border border-customGreen">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}
