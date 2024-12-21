// SavedItemsPage.js
import Image from "next/image";
import Button from "../_components/Button";
import DeleteSavedButton from "../_components/DeleteSavedButton";
import { getSaved } from "../_lib/data-service";
import AddToCartButton from "../_components/AddToCartButton";

export const revalidate = 0;

export default async function SavedItemsPage() {
  const savedItems = await getSaved();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mt-10 text-customgGreen text-center">
        Saved Items
        <span className="text-gray-500 text-lg ml-4">
          ({savedItems.length} items)
        </span>
      </h1>

      {savedItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-6">
            You haven&apos;t saved any items yet
          </p>
          <Button>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedItems?.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 relative hover:shadow-md transition-shadow"
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

              <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  Available Sizes: {item.size}
                </p>
                <p className="text-sm text-gray-500">Colors: {item.color}</p>
              </div>

              <div className="flex justify-between items-center">
                <AddToCartButton item={item} />
                <DeleteSavedButton itemId={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
