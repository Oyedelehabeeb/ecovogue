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
              placeholder="blur"
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
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
