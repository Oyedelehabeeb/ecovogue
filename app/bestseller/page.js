import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

export const revalidate = 30;

export default async function BestsellerPage() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-amber-600 to-yellow-500 mt-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Bestsellers</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Discover what everyone loves
          </p>
          <div className="mt-4 flex space-x-4">
            <div className="bg-white/20 px-4 py-2 rounded-lg">Most Popular</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              Customer Favorites
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">Top Rated</div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Categories</option>
              <option>Best Rated</option>
              <option>Most Reviewed</option>
              <option>Customer Choice</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
          <div className="text-sm text-amber-600 font-medium">
            Updated weekly based on sales
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
