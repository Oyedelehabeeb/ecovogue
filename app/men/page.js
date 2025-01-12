import { getMenProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import { Search } from "lucide-react";
import Spinner from "../_components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "men",
};

export const revalidate = 30;

export default async function MenPage() {
  const initialProducts = await getMenProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-r from-customGreen to-green-600 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">
            Modern Men&apos;s Fashion
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl text-center px-4">
            Discover our curated collection for the modern man
          </p>
        </div>
      </div>

      {/* Products Grid Section */}
      <Suspense fallback={<Spinner />} key={initialProducts.ProductId}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <ProductGrid initialProducts={initialProducts} />
        </div>
      </Suspense>
    </div>
  );
}
