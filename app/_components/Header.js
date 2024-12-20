import { Search, ShoppingCart } from "lucide-react";
import { Bitter } from "next/font/google";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <header className="bg-white divide-y-2 divide-gray-100 border border-black">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <nav className="ml-8">
            <ul className="flex space-x-6">
              <li>
                <Link href="/women" className="text-customGreen">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/men" className="text-customGreen">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-customGreen">
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
            href="/signin"
            className="rounded-lg px-4 py-2 flex items-center text-customGreen"
          >
            <CiUser className="h-5 w-5 mr-2 text-customGreen" />
            Sign In
          </Link>
          <Link
            href="/saved"
            className=" rounded-lg px-4 py-2 flex items-center text-customGreen"
          >
            <MdFavorite className="h-5 w-5 mr-2 text-customGreen" />
            Saved
          </Link>
          <Link
            href="/cart"
            className="rounded-lg px-4 py-2 flex items-center text-customGreen"
          >
            <ShoppingCart className="h-5 w-5 mr-2 text-customGreen" />
            Cart
          </Link>
        </div>
      </div>
      <nav className=" text-stone-700">
        <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          <Link
            href="/discountedItems"
            className=" text-customGreen hover:text-gray-400"
          >
            Discounted Items
          </Link>
          <Link
            href="/best-sellers"
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
