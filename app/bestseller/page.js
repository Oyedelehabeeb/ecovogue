import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import { Search } from "lucide-react";
import Spinner from "../_components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "best-seller",
};

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[300px] bg-gradient-to-r from-amber-600 to-yellow-500 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-6">Our Bestsellers</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center mb-4">
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

      <Suspense fallback={<Spinner />} key={initialProducts.productId}>
        <div className="container mx-auto px-4 py-8">
          <ProductGrid initialProducts={initialProducts} />
        </div>
      </Suspense>
    </div>
  );
}
