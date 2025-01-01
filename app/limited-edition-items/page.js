import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import { Search } from "lucide-react";

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-purple-900 to-indigo-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Limited Edition Items</h1>
          <p className="text-lg text-gray-200 max-w-2xl text-center">
            Exclusive pieces, crafted for distinction
          </p>
          <div className="mt-4 px-4 py-2 border border-white rounded-full text-sm">
            Limited time only
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
