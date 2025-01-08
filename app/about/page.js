import trad from "@/public/trad-02.jpg";
import Image from "next/image";
import { Shield, Target, Zap } from "lucide-react";

export const metadata = {
  title: "about",
};

export default function Page() {
  return (
    <div className="bg-gray-50">
      <div className="relative h-[400px] bg-gradient-to-r from-customGreen to-green-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold text-center">
            Our Journey to Sustainable Fashion
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl text-center mt-6">
            Making style sustainable, one piece at a time
          </p>
        </div>
      </div>
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] object-cover rounded-lg overflow-hidden">
            <Image
              src={trad}
              alt="Sustainable Fashion Workshop"
              className="object-cover w-full h-full"
              placeholder="blur"
              quality={100}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 text-customGreen">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Founded in 2018, EcoVogue emerged from a deep passion for
              sustainable fashion and environmental stewardship. We recognized
              the fashion industry&apos;s significant environmental impact and
              decided to create a brand that doesn&apos;t compromise between
              style and sustainability.
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-customGreen/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-customGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Using eco-friendly materials and processes to minimize our
                environmental impact.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-customGreen/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-customGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ethical Production</h3>
              <p className="text-gray-600">
                Ensuring fair wages and safe working conditions throughout our
                supply chain.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-customGreen/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-customGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-gray-600">
                Creating durable pieces that last longer and reduce waste.
              </p>
            </div>
          </div>
        </div>
      </section>
      ;{/* Impact Stats */}
      <section className="bg-customGreen/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-customGreen">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-customGreen mb-2">
                50K+
              </div>
              <p className="text-gray-600">Trees Planted</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-customGreen mb-2">
                75%
              </div>
              <p className="text-gray-600">Recycled Materials</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-customGreen mb-2">
                100K+
              </div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-customGreen mb-2">
                90%/
              </div>
              <p className="text-gray-600">Waste Reduction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
