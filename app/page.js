import woman from "@/public/woman-01.png";
import landingPageImage from "@/public/landing-page.jpg";
import Image from "next/image";
import Button from "./_components/Button";
import {
  getCategories,
  getFeatured,
  getSpecials,
  getTrending,
} from "./_lib/data-service";
import Link from "next/link";
import CategoriesPagination from "./_components/CategoriesPagination";
import FeaturedPagination from "./_components/FeaturedPagination";
import TrendingPagination from "./_components/TrendingPagination";

export const revalidate = 20;

export default async function Home() {
  const [categories, featured, trending, specials] = await Promise.all([
    getCategories(),
    getFeatured(),
    getTrending(),
    getSpecials(),
  ]);

  return (
    <>
      <div>
        <div className="">
          <div className="relative w-full h-screen">
            <Image
              src={woman}
              className="object-cover object-top w-full h-full"
              placeholder="blur"
              quality={80}
              alt="Mountains and forests with two cabins"
              fill
              priority
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
              Timeless Styles, Made for You
            </h1>
            <p className="text-gray-300 mb-8 text-lg sm:text-xl">
              Redefine Your Style This Season
            </p>
            <div className="flex justify-center space-x-4">
              <Button>Shop women</Button>
              <Button>Shop Men</Button>
            </div>
          </div>
        </div>
        {/* Categories */}
        <section className="p-4 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Shop from categories
          </h2>

          <CategoriesPagination categories={categories} />
        </section>
        {/* Featured */}
        <section className="p-4 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Featured Products
          </h2>

          <FeaturedPagination featured={featured} />
        </section>
        {/* Trending picks */}
        <section className="p-4 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Trending Products
          </h2>

          <TrendingPagination trending={trending} />
        </section>
        {/* Special for you */}
        <section className="px-20 pb-6 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Specials for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3: lg:grid-cols-2 px-10 gap-6">
            {specials.map((product, index) => (
              <Link href={`/${product.productId}`} className="" key={index}>
                <div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-2"
                  />
                </div>
                <h2 className="font-semibold">{product.name}</h2>
              </Link>
            ))}
          </div>
        </section>
        <section className="pt-6 bg-gradient-to-r from-customGreen to-green-600">
          <div className="relative w-full h-32 sm:h-64">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-white capitalize font-semibold text-2xl tracking-widest">
                Committed to sustainable fashion
              </h2>
              <p className="text-gray-300 capitalize text-sm">
                Crafted with care, designed for a greener tomorrow
              </p>
              <Button>Learn more</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
