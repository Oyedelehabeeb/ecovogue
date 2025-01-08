import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import { Search } from "lucide-react";

export const metadata = {
  title: "winter-essentials",
};

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-600 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-6">Our Winter Collection</h1>
          <p className="text-lg text-gray-200 max-w-2xl text-center">
            Discover our cozy winter essentials
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
