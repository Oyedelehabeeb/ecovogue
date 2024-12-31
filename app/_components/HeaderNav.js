"use client";

import Link from "next/link";
import { Bitter } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdFavorite } from "react-icons/md";
import { ShoppingCart, Search } from "lucide-react";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="container mx-auto flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <nav className="ml-8">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/women"
                className={`text-customGreen relative pb-1 ${
                  pathname === "/women"
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
                    : ""
                }`}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                href="/men"
                className={`text-customGreen relative pb-1 ${
                  pathname === "/men"
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
                    : ""
                }`}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                href="/babies"
                className={`text-customGreen relative pb-1 ${
                  pathname === "/babies"
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
                    : ""
                }`}
              >
                Babies
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-customGreen relative pb-1 ${
                  pathname === "/about"
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link href="/">
          <h1
            className={`${bitter.className} font-semibold text-customGreen text-xl sm:text-3xl`}
          >
            ECOVOGUE
          </h1>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 rounded-lg px-4 py-2 pr-8 w-64"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <Link
          href="/saved"
          className={`rounded-lg px-4 py-2 flex items-center text-customGreen relative ${
            pathname === "/saved"
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
              : ""
          }`}
        >
          <MdFavorite className="h-5 w-5 mr-2 text-customGreen" />
          Saved
        </Link>
        <Link
          href="/cart"
          className={`rounded-lg px-4 py-2 flex items-center text-customGreen relative ${
            pathname === "/cart"
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
              : ""
          }`}
        >
          <ShoppingCart className="h-5 w-5 mr-2 text-customGreen" />
          Cart
        </Link>
      </div>
    </div>
  );
}
