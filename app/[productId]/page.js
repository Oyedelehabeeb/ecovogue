import { FaStar, FaStarHalf } from "react-icons/fa";
import AddToCartButton from "../_components/AddToCartButton";
import AddToSavedButton from "../_components/AddToSavedButton";
import { getAllProducts, getAllProductsById } from "../_lib/data-service";
import { ChevronRight, Truck, Shield, RefreshCw } from "lucide-react";
import Link from "next/link";

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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" className="text-yellow-400" />);
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    return stars;
  };

  // Format price to Naira
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(product.price);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <Link
            href="/categories"
            className="text-gray-500 hover:text-gray-900"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center text-xl">
                {renderStars(product.rating)}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating} out of 5)
              </span>
            </div>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              {formattedPrice}
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600">{product.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-customGreen mr-2" />
                  <span className="text-sm">Free Delivery</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-customGreen mr-2" />
                  <span className="text-sm">1 Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="h-5 w-5 text-customGreen mr-2" />
                  <span className="text-sm">7 Days Return</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <AddToCartButton item={product} className="flex-1" />
              <AddToSavedButton item={product} className="w-12 h-12" />
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold mb-4">Product Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
