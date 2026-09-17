"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag } from "lucide-react";
import SignOutButton from "./SignoutButton";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-[76px] items-center justify-between px-6 xl:px-10">
      <div className="flex items-center">
        <nav>
          <ul className="flex gap-7">
            <li>
              <Link
                href="/women"
                className={`nav-link ${
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
                className={`nav-link ${
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
                className={`nav-link ${
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
                className={`nav-link ${
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

      <Link
        href="/"
        className="brand-mark absolute left-1/2 -translate-x-1/2"
      >
        ECO<span>VOGUE</span>
      </Link>

      <div className="flex items-center gap-1">
        <Link
          href="/saved"
          className={`header-action ${
            pathname === "/saved"
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
              : ""
          }`}
        >
          <Heart className="h-[18px] w-[18px]" />
          <span className="sr-only">Saved</span>
        </Link>
        <Link
          href="/cart"
          className={`header-action ${
            pathname === "/cart"
              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
              : ""
          }`}
        >
          <ShoppingBag className="h-[18px] w-[18px]" />
          <span className="sr-only">Cart</span>
        </Link>
        <SignOutButton />
      </div>
    </div>
  );
}
