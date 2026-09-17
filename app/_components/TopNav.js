"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div className="h-12 flex items-center justify-center gap-9 border-t border-black/[.06]">
      <Link
        href="/discountedItems"
        className={`subnav-link ${
          pathname === "/discountedItems" ? "text-yellow-400" : ""
        } `}
      >
        Offers
      </Link>
      <Link
        href="/bestseller"
        className={`subnav-link ${
          pathname === "/bestseller" ? "text-yellow-400" : ""
        }`}
      >
        Best Sellers
      </Link>
      <Link
        href="/winter-essentials"
        className={`subnav-link ${
          pathname === "/winter-essentials" ? "text-yellow-400" : ""
        }`}
      >
        Winter Essentials
      </Link>
      <Link
        href="/new-arrivals"
        className={`subnav-link ${
          pathname === "/new-arrivals" ? "text-yellow-400" : ""
        }`}
      >
        New Arrivals
      </Link>
      <Link
        href="/limited-edition-items"
        className={`subnav-link ${
          pathname === "/limited-edition-items" ? "text-yellow-400" : ""
        }`}
      >
        Limited Edition Items
      </Link>
      <Link
        href="/on-sale"
        className={`subnav-link text-[#a44d34] ${
          pathname === "/on-sale" ? "text-yellow-400" : ""
        }`}
      >
        On Sale
      </Link>
    </div>
  );
}
