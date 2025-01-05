import { ArrowRight, ChevronLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import OrderSummary from "../_components/OrderSummary";
import { getCart } from "../_lib/data-service";

export const metadata = {
  title: "shipping-order",
};

export const revalidate = 0;

export default async function ShippingPage() {
  const cartItems = await getCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">Add items to proceed to shipping</p>
        <Link
          href="/"
          className="bg-customGreen text-white px-6 py-2 rounded-md hover:bg-customGreen/90"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Stepper */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-customGreen text-white flex items-center justify-center">
              1
            </span>
            <span className="ml-2 font-medium text-gray-600">Cart</span>
          </div>
          <ArrowRight className="text-gray-400" />
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-customGreen text-white flex items-center justify-center">
              2
            </span>
            <span className="ml-2 font-medium">Shipping</span>
          </div>
          <ArrowRight className="text-gray-400" />
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              3
            </span>
            <span className="ml-2 text-gray-600">Success</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                    >
                      <option value="">Select State</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                      <option value="rivers">Rivers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mt-6">
              <Link
                href="/cart"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Cart
              </Link>
              <Link
                href="/payment"
                className="bg-customGreen text-white px-6 py-2 rounded-md hover:bg-customGreen/90"
              >
                Continue to Payment
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <OrderSummary cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
