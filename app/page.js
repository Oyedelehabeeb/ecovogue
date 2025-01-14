// import ecovogue from "@/public/ecovoguee.png";
// import Image from "next/image";
// import Button from "./_components/Button";
// import {
//   getCategories,
//   getFeatured,
//   getSpecials,
//   getTrending,
// } from "./_lib/data-service";
// import Link from "next/link";
// import CategoriesPagination from "./_components/CategoriesPagination";
// import FeaturedPagination from "./_components/FeaturedPagination";
// import TrendingPagination from "./_components/TrendingPagination";
// import Spinner from "./_components/Spinner";
// import { Suspense } from "react";
// import Footer from "./_components/Footer";

// export const revalidate = 20;

// export default async function Home() {
//   const [categories, featured, trending, specials] = await Promise.all([
//     getCategories(),
//     getFeatured(),
//     getTrending(),
//     getSpecials(),
//   ]);

//   return (
//     <>
//       <div className="mt-0 sm:mt-10">
//          <div className="relative">
//           <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen">
//             <Image
//               src={ecovogue}
//               alt="Mountains and forests with two cabins"
//               fill
//               priority
//               quality={100}
//               className="object-cover"
//               sizes="100vw"
//               placeholder="blur"
//             />
//             {/* Optional: Add overlay for better text contrast */}
//             <div className="absolute inset-0 bg-black/30" />
//           </div>

//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
//             <h1 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
//               Timeless Styles, Made for You
//             </h1>
//             <p className="text-gray-300 mb-8 text-lg sm:text-xl">
//               Redefine Your Style This Season
//             </p>
//             <div className="flex justify-center space-x-4">
//               <Link
//                 href="/women"
//                 className="bg-white border border-green-50 text-customGreen px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
//               >
//                 Shop women
//               </Link>
//               <Link
//                 href="/men"
//                 className="bg-white border border-green-50 text-customGreen px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
//               >
//                 Shop men
//               </Link>
//               <Link
//                 href="/babies"
//                 className="bg-white border border-green-50 text-customGreen px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
//               >
//                 Shop babies
//               </Link>
//             </div>
//           </div>
//         </div>

//         <Suspense fallback={<Spinner />}>
//           {/* Categories */}
//           <section className="p-4 bg-white relative">
//             <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 capitalize">
//               Shop from categories
//             </h2>

//             <CategoriesPagination categories={categories} />
//           </section>
//           {/* Featured */}
//           <section className="p-4 bg-white relative">
//             <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 capitalize">
//               Featured Products
//             </h2>

//             <FeaturedPagination featured={featured} />
//           </section>
//           {/* Trending picks */}
//           <section className="p-4 bg-white relative">
//             <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 capitalize">
//               Trending Products
//             </h2>

//             <TrendingPagination trending={trending} />
//           </section>
//           {/* Special for you */}
//           <section className="px-20 pb-6 bg-white relative">
//             <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 capitalize">
//               Specials for you
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3: lg:grid-cols-2 px-10 gap-6">
//               {specials.map((product, index) => (
//                 <Link href={`/${product.productId}`} key={index}>
//                   <div>
//                     <img
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-lg mb-2"
//                     />
//                   </div>
//                   <h2 className="font-semibold">{product.name}</h2>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         </Suspense>
//         <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-customGreen to-green-600">
//           <div className="relative w-full h-40 sm:h-64 md:h-80">
//             <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white capitalize tracking-widest">
//                 Committed to sustainable fashion
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-gray-300 capitalize max-w-2xl">
//                 Crafted with care, designed for a greener tomorrow
//               </p>
//               <Button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
//                 Learn more
//               </Button>
//             </div>
//           </div>
//         </section>
//         <footer className="w-full hidden md:block">
//           <Footer />
//         </footer>
//       </div>
//     </>
//   );
// }

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
