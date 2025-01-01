import { getMenProducts } from "../_lib/data-service";
import ProductGrid from "../_components/ProductGrid";
import { Search } from "lucide-react";

export const revalidate = 30;

export default async function MenPage() {
  const initialProducts = await getMenProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-slate-800 to-gray-700">
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
        <ProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
