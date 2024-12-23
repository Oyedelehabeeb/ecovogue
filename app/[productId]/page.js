import { getAllProducts, getAllProductsById } from "../_lib/data-service";

export async function generateStaticParams() {
  const products = await getAllProducts();

  const productsId = products?.map((product) => ({
    productId: String(product.productId),
  }));
  return productsId;
}

export default async function Page({ params }) {
  const product = await getAllProductsById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto mb-4"
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
    </div>
  );
}
