"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shalima Hayden",
    avatar: "/placeholder.svg?height=50&width=50",
    text: "I Have Trusted Koffelo Coffee For Many Years. Really Amazing To See The Combination Was Very Good. One Thing Is To Serve Extraordinary Coffee With Caffeine. I Will Order From Caffeine For Any Of My Coffee Needs.",
    rating: 5,
  },
  // Add more testimonials here
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="bg-[#f5e6d3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customer Says
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1a1a1a] p-8 rounded-lg text-white text-center relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              {/* <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-12 h-12 rounded-full border-4 border-[#f5e6d3]"
              /> */}
            </div>

            <p className="mt-6 mb-4 text-gray-300">
              {testimonials[currentTestimonial].text}
            </p>

            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonials[currentTestimonial].rating
                      ? "fill-[#c4a484] text-[#c4a484]"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>

            <p className="font-semibold">
              {testimonials[currentTestimonial].name}
            </p>
          </div>

          {/* <div className="flex justify-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
