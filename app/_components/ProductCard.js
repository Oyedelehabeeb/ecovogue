import React from "react";

const ProductCard = ({ imageUrl, name, buttonText = "Add to Cart +" }) => {
  const truncateName = (text, maxLength = 15) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <div className="flex flex-col w-[270px] h-full shadow-md shadow-gray-300 overflow-hidden">
      <div className="relative w-full h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col flex-grow p-3">
        <h3
          className="text-lg font-medium h-12 overflow-hidden text-ellipsis whitespace-nowrap"
          title={name}
        >
          {truncateName(name)}
        </h3>
        <button className="text-yellow-500 mt-auto self-start">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
