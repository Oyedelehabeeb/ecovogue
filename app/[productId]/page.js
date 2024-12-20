import {
  getCategories,
  getFeatured,
  getTrending,
  getAllProductsById,
} from "../_lib/data-service";

export async function generateStaticParams() {
  const categories = await getCategories();
  const featured = await getFeatured();
  const trendings = await getTrending();

  const ids = [
    ...categories.map((category) => ({ productId: String(category.id) })),
    ...featured.map((feature) => ({ productId: String(feature.id) })),
    ...trendings.map((trending) => ({ productId: String(trending.id) })),
  ];

  // Remove duplicates
  const uniqueIds = Array.from(new Set(ids.map((item) => item.productId))).map(
    (id) => ({ productId: id })
  );

  return uniqueIds;
}

export default async function Page({ params }) {
  const product = await getAllProductsById().find(
    (product) => product.id === Number(params.productId)
  );

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
