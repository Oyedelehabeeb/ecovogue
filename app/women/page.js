import { getWomenProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";

export const metadata = {
  title: "women",
};

export const revalidate = 30;

export default async function WomenPage() {
  const initialProducts = await getWomenProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[300px] bg-gradient-to-r from-pink-400 to-rose-300 mt-16">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-white/20 px-6 py-2 rounded-full text-sm mb-6">
            WOMEN&apos;S COLLECTION
          </div>
          <h1 className="text-4xl font-bold mb-4">Elegance Redefined</h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center">
            Discover our curated collection for the modern woman
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
