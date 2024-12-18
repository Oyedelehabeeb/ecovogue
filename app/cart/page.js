// "use client";

import DeleteCartButton from "@/app/_components/DeleteCartButton";
import QuantityButton from "@/app/_components/QuantityButton";
import { Heart } from "lucide-react";
import Image from "next/image";
import Button from "../_components/Button";
import { getCart } from "../_lib/data-service";
import OrderSummary from "../_components/OrderSummary";

// import { updateCartItemQuantity } from "@/app/_lib/actions.js";

export default async function CartPage() {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Organic Cotton Oversized Shirt",
  //     price: 89.99,
  //     size: "M",
  //     color: "Sage Green",
  //     quantity: 1,
  //     image: "/placeholder-image.png",
  //   },
  //   {
  //     id: 2,
  //     name: "High-Waisted Recycled Jeans",
  //     price: 129.99,
  //     size: "S",
  //     color: "Indigo Blue",
  //     quantity: 2,
  //     image: "/placeholder-image.png",
  //   },
  // ]);

  const cartItems = await getCart();

  const quantity = 1;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
          <Button>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items Column */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-6 relative"
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

                <div className="absolute top-0 right-0 flex space-x-2">
                  <DeleteCartButton cartItems={cartItems} />
                  <button className="text-gray-500 hover:text-gray-700">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Column */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}
