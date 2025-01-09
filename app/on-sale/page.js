import { getAllProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import Spinner from "../_components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "on-sale",
};

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getAllProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-red-600 to-pink-600 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-4">
            MEGA SALE
          </div>
          <h1 className="text-4xl font-bold mb-4">Season End Sale</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Up to 30% off on selected items
          </p>
        </div>
      </div>

      <Suspense fallback={<Spinner />} key={initialProducts.ProductId}>
        <div className="container mx-auto px-4 py-8">
          <ProductGrid initialProducts={initialProducts} />
        </div>
      </Suspense>
    </div>
  );
}
