import Link from "next/link";
import DeleteCartButton from "@/app/_components/DeleteCartButton";
import QuantityButton from "@/app/_components/QuantityButton";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../_components/Button";
import { getCart } from "../_lib/data-service";
import OrderSummary from "../_components/OrderSummary";
import AddToSavedIcon from "../_components/AddToSavedIcon";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "cart",
};

export const revalidate = 0;

export default async function Page() {
  const session = await auth();
  const useremail = session?.user.email;
  const cartItems = await getCart(session?.user.email);

  const quantity = 1;

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-4">
          Add items to your cart to continue shopping
        </p>
        <Button>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Progress Stepper */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center space-x-4 mt-20">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-customGreen text-white flex items-center justify-center">
              1
            </span>
            <span className="ml-2 font-medium">Cart</span>
          </div>
          <ArrowRight className="text-gray-400" />
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              2
            </span>
            <span className="ml-2 text-gray-600">Shipping</span>
          </div>
          <ArrowRight className="text-gray-400" />
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              3
            </span>
            <span className="ml-2 text-gray-600">Success</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-bold mb-6 text-customGreen">
              Shopping Cart ({cartItems.length} items)
            </h1>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 relative rounded-md overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Size: {item.size}
                      </p>
                      <div className="flex items-center gap-4">
                        <QuantityButton itemId={item.id} />
                        <p className="font-semibold">
                          {new Intl.NumberFormat("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          }).format(item.price)}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                      <DeleteCartButton itemId={item.id} />
                      <AddToSavedIcon item={item} useremail={useremail} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-4">
              <OrderSummary cartItems={cartItems} />
              <Link
                href="/shipping"
                className="bg-customGreen text-white px-6 py-2 rounded-md hover:bg-customGreen/90"
              >
                Proceed to Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
