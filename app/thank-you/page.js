import Link from "next/link";
import { ArrowRight, CheckCircle2, Package } from "lucide-react";
import OrderSummary from "../_components/OrderSummary";
import { getCart } from "../_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "thank-you",
};

export const revalidate = 0;

export default async function Page() {
  const session = await auth();
  const email = session?.user.email;
  const cartItems = await getCart(email);
  const orderNumber = Math.random().toString(36).substring(7).toUpperCase();
  const estimatedDelivery = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="flex justify-center items-center space-x-4 mt-20">
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
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
          <span className="w-8 h-8 rounded-full bg-customGreen text-white flex items-center justify-center">
            3
          </span>
          <span className="ml-2 text-gray-600">Success</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Order Confirmation */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-customGreen mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Thank you for your order!
            </h1>
            <p className="text-gray-600 mb-6">
              We&apos;ve received your order and will notify you when it ships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <div className="bg-gray-50 px-6 py-3 rounded-lg">
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="font-semibold">{orderNumber}</p>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-semibold">{estimatedDelivery}</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Package className="w-4 h-4 mr-2" />
              <p>A confirmation email has been sent to your email address</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <OrderSummary cartItems={cartItems} />
          </div>

          {/* Actions */}
          <div className="text-center">
            <Link
              href="/"
              className="bg-customGreen text-white px-8 py-3 rounded-md hover:bg-customGreen/90 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
