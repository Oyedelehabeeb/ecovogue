import Link from "next/link";
import React from "react";
import { FaCartPlus, FaHeart, FaInfoCircle } from "react-icons/fa";

function ProductCard({ productId, imageUrl, name }) {
  const truncateName = (text, maxLength = 15) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
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
        <Link
          href={`/${productId}`}
          className="text-yellow-500 mt-auto self-start"
        >
          View product details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
