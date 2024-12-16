import placeholderImage from "@/public/placeholder-image.png";
import placeholder from "@/public/placeholder.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "./_components/Button";

export default function Home() {
  const products = [
    {
      name: "High-Waisted Recycled Jeans",
      image: "https://via.placeholder.com/300",
      buttonText: "Add to Cart +",
    },
    {
      name: "Organic Cotton Oversized Shirt",
      image: "https://via.placeholder.com/300",
      buttonText: "Add to Cart +",
    },
    {
      name: "Recycled Denim Jacket",
      image: "https://via.placeholder.com/300",
      buttonText: "Add to Cart +",
    },
    {
      name: "Eco-Friendly Knit Sweater",
      image: "https://via.placeholder.com/300",
      buttonText: "Add to Cart +",
    },
    // {
    //   name: "Sustainable Linen Dress",
    //   image: "https://via.placeholder.com/300",
    //   buttonText: "Add to Cart +",
    // },
    // {
    //   name: "Organic Wool Cardigan",
    //   image: "https://via.placeholder.com/300",
    //   buttonText: "Add to Cart +",
    // },
  ];

  const specials = [
    {
      name: "In the Season",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "For occassions",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <>
      <div>
        <div className="relative w-full h-screen">
          {/* Background Image */}
          <Image
            src={placeholderImage}
            className="object-cover"
            placeholder="blur"
            quality={80}
            alt="Mountains and forests with two cabins"
            fill
            priority
          />

          {/* Content on Top of the Image */}
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

          <div className="relative flex items-center justify-center">
            <button className="bg-stone-400 absolute left-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition">
              <ChevronLeft size={30} className="text-white" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
              {products.map((product, index) => (
                <div key={index} className="">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-medium mt-3">{product.name}</h3>
                  <button className="text-yellow-500 mt-2">
                    Add to Cart +
                  </button>
                </div>
              ))}
            </div>

            <button className="bg-stone-400  absolute right-0 z-10  rounded-full shadow-md p-2 hover:scale-110 transition">
              <ChevronRight size={30} className="text-white" />
            </button>
          </div>
        </section>
        {/* Featured */}
        <section className="p-6 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Featured Products
          </h2>

          <div className="relative flex items-center justify-center">
            <button className="bg-stone-400 absolute left-0 z-10  rounded-full shadow-md p-2 hover:scale-110 transition">
              <ChevronLeft size={30} className="text-white" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
              {products.map((product, index) => (
                <div key={index} className="">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-medium mt-3">{product.name}</h3>
                  <button className="text-yellow-500 mt-2">
                    Add to Cart +
                  </button>
                </div>
              ))}
            </div>

            <button className="bg-stone-400 absolute right-0 z-10  rounded-full shadow-md p-2 hover:scale-110 transition">
              <ChevronRight size={30} className="text-white" />
            </button>
          </div>
        </section>
        {/* Trending picks */}
        <section className="p-6 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Trending picks
          </h2>

          <div className="relative flex items-center justify-center">
            <button className="bg-stone-400 absolute left-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition">
              <ChevronLeft size={30} className="text-white" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
              {products.map((product, index) => (
                <div key={index} className="">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-medium mt-3">{product.name}</h3>
                  <button className="text-yellow-500 mt-2">
                    Add to Cart +
                  </button>
                </div>
              ))}
            </div>

            <button className="bg-stone-400 absolute right-0 z-10 rounded-full shadow-md p-2 hover:scale-110 transition">
              <ChevronRight size={30} className="text-white" />
            </button>
          </div>
        </section>
        {/* Special for you */}
        <section className="px-20 pb-6 bg-white relative">
          <h2 className="text-2xl font-bold text-center mb-3 capitalize">
            Specials for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3: lg:grid-cols-2 px-10 gap-6">
            {specials.map((special, index) => (
              <div className="" key={index}>
                <img
                  src={special.image}
                  alt={special.name}
                  className="w-full h-64 object-cover rounded-lg mb-2"
                />
                <h2>{special.name}</h2>
              </div>
            ))}
          </div>
        </section>
        <section className="pt-6">
          <div className="relative w-full h-32 sm:h-64">
            <Image
              src={placeholder}
              alt="cta-section"
              className="object-cover"
              fill
            />
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
