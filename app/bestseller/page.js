import { getAllProducts } from "../_lib/data-service";
import ProductCard from "../_components/ProductCard";

export const revalidate = 30;

export default async function BestsellerPage() {
  const products = await getAllProducts();

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mt-8 text-center">Bestsellers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            name={product.name}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
