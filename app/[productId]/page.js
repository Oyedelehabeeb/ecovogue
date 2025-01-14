import { FaStar, FaStarHalf } from "react-icons/fa";
import AddToCartButton from "../_components/AddToCartButton";
import AddToSavedButton from "../_components/AddToSavedButton";
import {
  getAllProducts,
  getAllProductsById,
  getCart,
} from "../_lib/data-service";
import { ChevronRight, Truck, Shield, RefreshCw } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/app/_lib/auth";
import Image from "next/image";

export const revalidate = 30;

export async function generateStaticParams() {
  const products = await getAllProducts();

  const productsId = products.map((product) => ({
    productId: String(product.productId),
  }));
  return productsId;
}

export async function generateMetadata({ params }) {
  const { name } = await getAllProductsById(params.productId);
  return { title: `${name}` };
}

// export const metadata = {
//   title: "Product",
// };

export default async function Page({ params }) {
  const product = await getAllProductsById(params.productId);
  const session = await auth();
  const useremail = session?.user.email;

  if (!product) {
    notFound();
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

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(product.price);

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-4 sm:mb-6 lg:mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-4">
                {product.description}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex items-center text-lg sm:text-xl">
                  {renderStars(product.rating)}
                </div>
                <span className="ml-2 text-sm sm:text-base text-gray-600">
                  ({product.rating} rating)
                </span>
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                {formattedPrice}
              </div>

              <div className="space-y-6">
                {/* Size Selection */}
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
                    Select Size
                  </h3>
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="py-2 px-4 text-sm sm:text-base border rounded-md hover:border-customGreen focus:outline-none focus:ring-2 focus:ring-customGreen"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
                    Select Color
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["#000000", "#FFFFFF", "#808080"].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-customGreen"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <AddToCartButton
                  item={product}
                  useremail={useremail}
                  className="flex-1"
                />
                <AddToSavedButton
                  item={product}
                  useremail={useremail}
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
