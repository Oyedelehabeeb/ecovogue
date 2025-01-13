import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

function DiscountProductCard({
  item,
  productId,
  imageUrl,
  name,
  price,
  rating = 0,
  discount,
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

  return (
    <div className="relative w-full sm:w-[220px] md:w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 z-10">
        <span className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
          -{formatToNaira(discount)}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={`/${productId}`}
            className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-customGreen" />
          </Link>
        </div>
      </div>

      {/* Content */}
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
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              {formatToNaira(price)}
            </span>
            <span className="text-base sm:text-lg font-semibold text-red-500">
              {formatToNaira(price - discount)}
            </span>
          </div>
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

export default DiscountProductCard;
