import React from "react";
import Image from "next/image";
import placeholderImage from "@/public/placeholder-image.png";
import Button from "../_components/Button";

export default function About() {
  const teamMembers = [
    {
      name: "Emma Rodriguez",
      role: "Founder & Creative Director",
      bio: "Passionate about sustainable fashion and environmental conservation.",
      image: "/team/emma.jpg",
    },
    {
      name: "Alex Chen",
      role: "Sustainability Lead",
      bio: "Expert in ethical sourcing and circular fashion principles.",
      image: "/team/alex.jpg",
    },
    {
      name: "Sophia Kim",
      role: "Design Director",
      bio: "Innovating fashion with eco-friendly materials and timeless designs.",
      image: "/team/sophia.jpg",
    },
  ];

  const milestones = [
    {
      year: 2018,
      event: "Founded with a mission to revolutionize sustainable fashion",
    },
    {
      year: 2020,
      event: "Achieved 100% recycled and organic material sourcing",
    },
    {
      year: 2022,
      event: "Launched carbon-neutral shipping initiative",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src={placeholderImage}
          alt="EcoVogue Sustainable Fashion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Redefining Fashion, Respecting Our Planet
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              At EcoVogue, we believe fashion can be beautiful, innovative, and
              kind to our environment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-800">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2018, EcoVogue emerged from a deep passion for
            sustainable fashion and environmental stewardship. We recognized the
            fashion industry's significant environmental impact and decided to
            create a brand that doesn't compromise between style and
            sustainability.
          </p>
          <p className="text-gray-700">
            Every piece we create is a testament to our commitment: thoughtfully
            designed, ethically produced, and created with the least possible
            harm to our planet.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={placeholderImage}
            alt="EcoVogue Workshop"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <Image
            src={placeholderImage}
            alt="Sustainable Materials"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  {milestone.year}
                </h3>
                <p className="text-gray-600">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-48 h-48 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src={placeholderImage}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Sustainable Fashion Movement
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create a more sustainable future, one garment at a
            time.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>Shop Sustainable</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
