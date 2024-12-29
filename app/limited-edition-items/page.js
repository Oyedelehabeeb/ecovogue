import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

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

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Categories</option>
              <option>Limited Collection</option>
              <option>Exclusive Pieces</option>
              <option>Special Edition</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>Latest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popularity</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            * Limited quantities available
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
