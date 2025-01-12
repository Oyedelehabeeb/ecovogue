import Link from "next/link";
import React from "react";
import {
  FaCartPlus,
  FaHeart,
  FaInfoCircle,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import ProductMenu from "./ProductMenu";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default async function ProductCard({
  productId,
  imageUrl,
  name,
  price,
  rating = 0,
  item,
}) {
  const truncateName = (text, maxLength = 15) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  const formatToNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

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

  // return (
  //   <div className="relative w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
  //     <div className="relative w-full h-[280px]">
  //       <Image
  //         src={imageUrl}
  //         alt={name}
  //         fill
  //         className="object-cover rounded-t-lg"
  //       />
  //       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
  //         <Link href={`/${productId}`} className="bg-white p-2 rounded-full">
  //           <ArrowRight size={36} className="text-customGreen text-2xl" />
  //         </Link>
  //       </div>
  //     </div>

  //     <div className="p-4">
  //       <h3
  //         className="text-lg font-medium mb-2 text-gray-800 line-clamp-2 min-h-[3.5rem]"
  //         title={name}
  //       >
  //         {truncateName(name)}
  //       </h3>

  //       <div className="flex items-center mb-2">
  //         <div className="flex items-center">{renderStars(rating)}</div>
  //         <span className="ml-2 text-sm text-gray-600">({rating})</span>
  //       </div>

  //       <div className="flex justify-between items-center mt-2">
  //         <span className="text-lg font-semibold text-gray-900">
  //           {formatToNaira(price)}
  //         </span>
  //         <Link
  //           href={`/${productId}`}
  //           className="text-yellow-500 text-sm hover:text-yellow-600 hover:underline transition-colors duration-200"
  //         >
  //           View details
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="relative w-full sm:w-[220px] md:w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link href={`/${productId}`} className="bg-white p-2 rounded-full">
            <ArrowRight size={36} className="text-customGreen text-2xl" />
          </Link>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3
          className="text-sm sm:text-base font-medium mb-2 text-gray-800 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]"
          title={name}
        >
          {truncateName(name)}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center scale-90 sm:scale-100">
            {renderStars(rating)}
          </div>
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-600">
            ({rating})
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            {formatToNaira(price)}
          </span>
          <Link
            href={`/${productId}`}
            className="text-xs sm:text-sm text-yellow-500 hover:text-yellow-600 hover:underline transition-colors"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
