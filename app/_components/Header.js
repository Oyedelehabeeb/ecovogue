import Link from "next/link";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="bg-white divide-y-2 divide-gray-100">
      <HeaderNav />
      <nav className=" text-stone-700">
        <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          <Link
            href="/discountedItems"
            className=" text-customGreen hover:text-gray-400"
          >
            Discounted Items
          </Link>
          <Link
            href="/bestseller"
            className=" text-customGreen hover:text-gray-400"
          >
            Best Sellers
          </Link>
          <Link
            href="/winter-essentials"
            className=" text-customGreen hover:text-gray-400"
          >
            Winter Essentials
          </Link>
          <Link
            href="/new-arrivals"
            className=" text-customGreen hover:text-gray-400"
          >
            New Arrivals
          </Link>
          <Link
            href="/limited-edition-items"
            className=" text-customGreen hover:text-gray-400"
          >
            Limited Edition Items
          </Link>
          <Link
            href="/on-sale"
            className=" text-customGreen hover:text-gray-400"
          >
            On Sale
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
