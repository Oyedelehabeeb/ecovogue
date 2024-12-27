import AddToCartButton from "../_components/AddToCartButton";
import AddToSavedButton from "../_components/AddToSavedButton";
import { getAllProducts, getAllProductsById } from "../_lib/data-service";

export const revalidate = 30;

export async function generateStaticParams() {
  const products = await getAllProducts();

  const productsId = products.map((product) => ({
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
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10">
        <div className="w-full md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mt-10">{product.name}</h1>
          <p className="text-lg mt-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
          <div className="flex items-center mt-4">
            <AddToCartButton item={product} />
            <AddToSavedButton item={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
