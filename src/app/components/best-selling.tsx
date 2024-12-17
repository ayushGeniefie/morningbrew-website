"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import CarouselProduct from "./carouselProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Description } from "@radix-ui/react-toast";

// const products = [
//   {
//     id: 1,

//     name: "Coffee Strong",
//     image: "/assets/50gmSilver.png?height=400&width=400",
//   },
//   {
//     id: 2,

//     name: "Extra Bold",
//     image: "/assets/100gmCopper.png?height=400&width=400",
//   },
//   {
//     id: 3,
//     name: "Premium",
//     image: "/assets/2GmGold.png?height=400&width=400",
//   },
//   {
//     id: 4,
//     name: "Coffee Strong",
//     image: "/assets/2GmSilver.png?height=400&width=400",
//   },
//   {
//     id: 5,
//     name: "Extra Bold",
//     image: "/assets/2GmCopper.png?height=300&width=300",
//   },
//   {
//     id: 6,
//     name: "Premium",
//     image: "/assets/50gmGold.png?height=400&width=400",
//   },
//   {
//     id: 7,
//     name: "Extra Bold",
//     image: "/assets/50gmCopper.png?height=300&width=300",
//   },
//   {
//     id: 8,
//     name: "Premium",
//     image: "/assets/100gmGold.png?height=400&width=400",
//   },
//   {
//     id: 9,
//     name: "Coffee Strong",
//     image: "/assets/100gmSilver.png?height=400&width=400",
//   },
//   {
//     id: 10,
//     name: "Premium",
//     image: "/assets/100gmGold.png?height=400&width=400",
//   },
//   {
//     id: 11,
//     name: "Extra Bold",
//     image: "/assets/100copper.png?height=400&width=400",
//   },
// ];
const products = [
  {
    id: 1,
    name: "Premium",
    image: "/assets/50gmGold.png",
    description:
      "Taste Premium ,Smell Local! Experience the rich flavor of our instant Pure Granulated Coffee,crafted from the finest beans,handpicked from renowned Indian coffee regions.Every cup delivers exceptional quality.Enjoy coffee in its purrst form ",
    quantity: [
      { label: "2gm", images: "/assets/2GmGold.png" },
      { label: "50gm", images: "/assets/50gmGold.png" },
      { label: "100gm", images: "/assets/100gmGold.png" },
    ],
  },
  {
    id: 2,
    name: "Coffee Strong",
    image: "/assets/50gmSilver.png",
    description:
      "Wake Up to a Chicory Twist! Rich, Strong , and infused with Chicory Goodness,Try our Instant Strong Chicory Coffee for a robust, well-balanced brew.This instant coffee has a sophisticated flavor that is healthy and smooth ,thanks to the natural richness of chicory",
    quantity: [
      { label: "2gm", images: "/assets/2GmSilver.png" },
      { label: "50gm", images: "/assets/50gmSilver.png" },
      { label: "100gm", images: "/assets/100gmSilver.png" },
    ],
  },
  {
    id: 3,
    name: "Extra Bold",
    image: "/assets/50gmCopper.png",
    description:
      "A rich and bold mix of coffee and chicory that delivers adeep,satisfying strength. Expertly designed for those who seek apowerful,full-bodied coffee experience. Embrace instant boldness with every sip.",
    quantity: [
      { label: "2gm", images: "/assets/2Gmcopper.png" },
      { label: "50gm", images: "/assets/50gmCopper.png" },
      { label: "100gm", images: "/assets/100gmCopper.png" },
    ],
  },
];

// const categories = ["All", "Premium", "Coffee Strong", "Extr Bold"];

export default function BestSelling() {
  const route = useRouter();

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-[#f5e6d3] py-16">
      <div className="container mx-auto px-4">
        <h2
          id={"ourphillosophy"}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Phillosophy
        </h2>
        <p className="text-center text-gray-700 mb-8">
          At Koffelo , we believe that everyone deserves a remarkable coffee
          experience.Our vision is to craft premium instant coffee that captures
          the rich essence of quality beans while making it accessible to all.
          Each cup is a reflection of our commitment to excellence, blending
          tradition with innovation. I invite you to try our coffee and discover
          the difference that quality makes. Join us in celebrating the joy of
          coffee, crafted with passion and expertise
        </p>

        {/* <div className="flex justify-center gap-8 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className={`${
                activeCategory === category
                  ? "text-[#c4a484] underline"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div> */}
        <h2
          id={"products"}
          className="text-4xl font-bold text-center mt-[20px] mb-4"
        >
          Our Products
        </h2>
        <div className="w-full   gap-5">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                onClick={() => {
                  route.push(`/product/${product.id}`);
                }}
                key={product.id}
                className="bg-[#1a1a1a] p-6 rounded-lg cursor-pointer text-center mx-2 text-white"
              >
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <Button className="bg-[#c4a484] hover:bg-[#b39476] text-white w-full">
                  Order Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
