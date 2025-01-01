"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchInput({
  initialProducts,
  // onSearch,
  placeholder = "Search products...",
}) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = initialProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // onSearch(filtered);
  }, [searchQuery, initialProducts]);

  return (
    <div className="relative flex-1 md:flex-none md:w-64">
      <input
        type="search"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-customGreen"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    </div>
  );
}
