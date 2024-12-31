import { getBabiesProducts } from "../_lib/data-service";
import DiscountProductGrid from "../_components/DiscountProductGrid";

export const revalidate = 30;

export default async function BabiesPage() {
  const initialProducts = await getBabiesProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-300 to-purple-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-4">
            BABY COLLECTION
          </div>
          <h1 className="text-4xl font-bold mb-4">Adorable Baby Essentials</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Cute and comfortable wear for your little ones
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Ages</option>
              <option>0-3 Months</option>
              <option>3-6 Months</option>
              <option>6-12 Months</option>
              <option>12-24 Months</option>
            </select>
            <select className="px-4 py-2 border rounded-md bg-white">
              <option>All Categories</option>
              <option>Onesies</option>
              <option>Dresses</option>
              <option>Sets</option>
              <option>Accessories</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            {initialProducts.length} items found
          </div>
        </div>

        {/* Product Grid */}
        <DiscountProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
