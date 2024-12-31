import { getWomenProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

export const revalidate = 30;

export default async function WomenPage() {
  const initialProducts = await getWomenProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-pink-400 to-rose-300 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-4">
            WOMEN&apos;S COLLECTION
          </div>
          <h1 className="text-4xl font-bold mb-4">Elegance Redefined</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Discover our curated collection for the modern woman
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Categories</option>
              <option>Dresses</option>
              <option>Tops</option>
              <option>Bottoms</option>
              <option>Accessories</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>Latest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            {initialProducts.length} items found
          </div>
        </div>

        {/* Product Grid with Infinite Scroll */}
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
