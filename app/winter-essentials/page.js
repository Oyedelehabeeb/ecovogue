import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mt-10">Our Winter Collection</h1>
          <p className="text-lg text-gray-200 max-w-2xl text-center">
            Discover our cozy winter essentials
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
            </select>
            <select className="px-4 py-2 border rounded-md">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
