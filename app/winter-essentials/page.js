import { getWinterEssentials } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import Spinner from "../_components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "winter-essentials",
};

export const revalidate = 30;

export default async function Page() {
  const initialProducts = await getWinterEssentials();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-r from-gray-900 to-gray-600 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <div className="bg-white/20 px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base mb-4 sm:mb-6">
            WINTER COLLECTION
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">
            Winter Essentials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl text-center">
            Stay warm and stylish this season
          </p>
        </div>
      </div>

      <Suspense fallback={<Spinner />} key={initialProducts.productId}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <ProductGrid initialProducts={initialProducts} />
        </div>
      </Suspense>
    </div>
  );
}
