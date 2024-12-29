import Link from "next/link";
import React from "react";
import {
  FaCartPlus,
  FaHeart,
  FaInfoCircle,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";

const ProductCard = ({ productId, imageUrl, name, price, rating = 0 }) => {
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
    <div className="relative flex flex-col w-[270px] h-full shadow-md shadow-gray-300 overflow-hidden group">
      <div className="relative w-full h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaCartPlus size={36} className="text-customGreen text-2xl" />
          <FaHeart size={36} className="text-customGreen text-2xl" />
          <FaInfoCircle size={36} className="text-customGreen text-2xl" />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-3">
        <h3
          className="text-lg font-medium h-12 overflow-hidden text-ellipsis whitespace-nowrap"
          title={name}
        >
          {truncateName(name)}
        </h3>
        <div className="flex items-center mt-2 mb-1">
          {renderStars(rating)}
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-semibold text-gray-900">
            {formatToNaira(price)}
          </span>
          <Link
            href={`/product/${productId}`}
            className="text-yellow-500 text-sm hover:underline"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
