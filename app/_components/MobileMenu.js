"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MdFavorite } from "react-icons/md";
import { ShoppingCart } from "lucide-react";
import { Bitter } from "next/font/google";
import SignOutButton from "./SignoutButton";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Header with Menu Button and Logo */}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={toggleMenu}
          className="text-customGreen p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link
          href="/"
          className={`${bitter.className} text-customGreen text-2xl uppercase font-semibold`}
        >
          Ecovogue
        </Link>

        <div className="flex items-center space-x-2">
          <Link href="/saved" className="text-customGreen p-2">
            <MdFavorite className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="text-customGreen p-2">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto py-4">
          {/* Main Navigation */}
          <nav className="px-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Main Menu
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/women", label: "Women" },
                { href: "/men", label: "Men" },
                { href: "/babies", label: "Babies" },
                { href: "/about", label: "About Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-customGreen ${
                      pathname === item.href ? "text-yellow-400" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Shop Categories */}
          <nav className="px-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Shop</h3>
            <ul className="space-y-2">
              {[
                { href: "/discountedItems", label: "Discounted Items" },
                { href: "/bestseller", label: "Best Sellers" },
                { href: "/winter-essentials", label: "Winter Essentials" },
                { href: "/new-arrivals", label: "New Arrivals" },
                { href: "/limited-edition-items", label: "Limited Edition" },
                { href: "/on-sale", label: "On Sale" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-customGreen ${
                      pathname === item.href ? "text-yellow-400" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Actions */}
          <div className="px-4 mt-auto">
            <SignOutButton />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={toggleMenu} />
      )}
    </>
  );
}
