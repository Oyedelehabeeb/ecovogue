import { getMenProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

export const revalidate = 30;

export default async function MenPage() {
  const initialProducts = await getMenProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-slate-800 to-gray-700 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-4">
            MEN&apos;S COLLECTION
          </div>
          <h1 className="text-4xl font-bold mb-4">Style & Sophistication</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Elevate your wardrobe with our premium men&apos;s collection
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Categories</option>
              <option>Suits</option>
              <option>Shirts</option>
              <option>Pants</option>
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
