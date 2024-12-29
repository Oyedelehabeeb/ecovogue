import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-red-600 to-pink-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-4">
            MEGA SALE
          </div>
          <h1 className="text-4xl font-bold mb-4">Season End Sale</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Up to 70% off on selected items
          </p>
          <div className="mt-4 flex space-x-4">
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <span className="font-bold">48</span> Hours
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <span className="font-bold">30</span> Minutes
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <span className="font-bold">60</span> Seconds
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Categories</option>
              <option>50% Off & Above</option>
              <option>30% Off & Above</option>
              <option>20% Off & Above</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>Biggest Discount</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Sellers</option>
            </select>
          </div>
          <div className="text-sm text-red-600 font-medium">
            Sale ends in 48 hours!
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
