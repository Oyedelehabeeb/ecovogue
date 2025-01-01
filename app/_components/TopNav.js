"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
      <Link
        href="/discountedItems"
        className={`text-customGreen hover:text-gray-400 ${
          pathname === "/discountedItems" ? "text-yellow-400" : ""
        } `}
      >
        Discounted Items
      </Link>
      <Link
        href="/bestseller"
        className={`text-customGreen hover:text-gray-400 ${
          pathname === "/bestseller" ? "text-yellow-400" : ""
        }`}
      >
        Best Sellers
      </Link>
      <Link
        href="/winter-essentials"
        className={` text-customGreen hover:text-gray-400 ${
          pathname === "/winter-essentials" ? "text-yellow-400" : ""
        }`}
      >
        Winter Essentials
      </Link>
      <Link
        href="/new-arrivals"
        className={` text-customGreen hover:text-gray-400 ${
          pathname === "/new-arrivals" ? "text-yellow-400" : ""
        }`}
      >
        New Arrivals
      </Link>
      <Link
        href="/limited-edition-items"
        className={` text-customGreen hover:text-gray-400 ${
          pathname === "/limited-edition-items" ? "text-yellow-400" : ""
        }`}
      >
        Limited Edition Items
      </Link>
      <Link
        href="/on-sale"
        className={` text-customGreen hover:text-gray-400 ${
          pathname === "/on-sale" ? "text-yellow-400" : ""
        }`}
      >
        On Sale
      </Link>
    </div>
  );
}
