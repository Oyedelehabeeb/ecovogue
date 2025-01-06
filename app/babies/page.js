import { getBabiesProducts } from "../_lib/data-service";
import DiscountProductGrid from "../_components/DiscountProductGrid";
import { Search } from "lucide-react";

export const metadata = {
  title: "babies",
};

export const revalidate = 30;

export default async function BabiesPage() {
  const initialProducts = await getBabiesProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
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
        <DiscountProductGrid initialProducts={initialProducts} />
      </div>
    </div>
  );
}
