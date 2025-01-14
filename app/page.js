import {
  getCategories,
  getFeatured,
  getTrending,
  getSpecials,
} from "./_lib/data-service";
import Image from "next/image";
import ecovogue from "@/public/ecovoguee.png";
import CategoriesPagination from "./_components/CategoriesPagination";
import FeaturedPagination from "./_components/FeaturedPagination";
import TrendingPagination from "./_components/TrendingPagination";
import Spinner from "./_components/Spinner";
import { Suspense } from "react";
import Footer from "./_components/Footer";
import Link from "next/link";

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
      <div className="mt-0 sm:mt-10">
        {/* Hero Section */}
        <div className="relative">
          <div className="relative w-full h-[300px] sm:h-[800px] md:h-[900px]">
            <Image
              src={ecovogue}
              alt="Mountains and forests with two cabins"
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="100vw"
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
              <Link
                href="/women"
                className="bg-white border border-green-50 text-customGreen px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
              >
                Shop women
              </Link>
              <Link
                href="/men"
                className="bg-white border border-green-50 text-customGreen px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
              >
                Shop men
              </Link>
              <Link
                href="/babies"
                className="bg-white border border-green-50 text-customGreen px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
              >
                Shop babies
              </Link>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl sm:text-3xl  font-semibold mb-6 sm:mb-8">
              Shop by Categories
            </h2>
            <Suspense fallback={<Spinner />}>
              <CategoriesPagination categories={categories} />
            </Suspense>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
              Featured Collection
            </h2>
            <Suspense fallback={<Spinner />}>
              <FeaturedPagination featured={featured} />
            </Suspense>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
              Trending Now
            </h2>
            <Suspense fallback={<Spinner />}>
              <TrendingPagination trending={trending} />
            </Suspense>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full hidden md:block">
          <Footer />
        </footer>
      </div>
    </>
  );
}
