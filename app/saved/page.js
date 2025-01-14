import Image from "next/image";
import Link from "next/link";
import { getSaved } from "../_lib/data-service";
import { Heart, ShoppingBag } from "lucide-react";
import { auth } from "@/app/_lib/auth";
import DeleteSavedButton from "../_components/DeleteSavedButton";
import AddToCartButton from "../_components/AddToCartButton";

export const metadata = {
  title: "saved",
};

export const revalidate = 0;

export default async function SavedPage() {
  const session = await auth();
  const email = session?.user.email;
  const savedItems = await getSaved(email);

  if (!savedItems || savedItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Heart className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No saved items yet
        </h2>
        <p className="text-gray-600 mb-4">Items you save will appear here</p>
        <Link
          href="/"
          className="bg-customGreen text-white px-6 py-2 rounded-md hover:bg-customGreen/90"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">
          Saved Items ({savedItems.length})
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedItems?.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 relative hover:shadow-md transition-shadow bg-white"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="font-bold text-lg mb-2">{item.name}</h3>

              <p className="text-gray-600 mb-2">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(item.price)}
              </p>

              <div className="flex justify-between items-center">
                <AddToCartButton item={item} useremail={email} />
                <DeleteSavedButton itemId={item.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
