import Image from "next/image";

export default function FeaturedSections() {
  return (
    <div className="bg-[#f5e6d3] py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-16">
          <div className="flex items-center gap-12 flex-row-reverse">
            <div className="relative w-96 h-96">
              <Image
                src="/assets/100gmGold.png"
                height={400}
                width={200}
                alt="Coffee preparation"
                className="w-full h-full object-contain rounded-lg transform rotate-6 relative z-10"
              />
              <div className="absolute inset-0 border-2 border-[#1a1a1a] rounded-lg transform -rotate-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                PREMIUM Instant Pure Granulated Coffee
              </h2>
              <p className="text-gray-700 mb-6">
                Taste Premium, smell local! Experience the rich flavor of our
                Instant Pure Granulated Coffee,crafted from the finest
                beans,handpicked from renowned Indian coffee regions,Every cup
                delivers exceptional quality.Enjoy coffee in its purest form.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="relative w-66 h-66">
              <Image
                src="/assets/100gmSilver.png"
                alt="Latte art"
                height={400}
                width={200}
                className="w-full h-full object-cover rounded-lg transform -rotate-6 relative z-10`"
              />
              <div className="absolute inset-0 border-2 border-[#1a1a1a] rounded-lg transform rotate-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                COFFEE STRONG Instant Strong Granulated Chicory Mix
              </h2>
              <p className="text-gray-700 mb-6">
                Wake Up to a Chicory Twist! Rich, Strong , and infused with
                Chicory Goodness,Try our Instant Strong Chicory Coffee for a
                robust, well-balanced brew.This instant coffee has a
                sophisticated flavor that is healthy and smooth ,thanks to the
                natural richness of chicory,
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12 flex-row-reverse">
            <div className="relative w-96 h-96">
              <Image
                src="/assets/100gmCopper.png"
                height={400}
                width={200}
                alt="Coffee preparation"
                className="w-full h-full object-contain rounded-lg transform rotate-6 relative z-10"
              />
              <div className="absolute inset-0 border-2 border-[#1a1a1a] rounded-lg transform -rotate-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                EXTRA BOLD Instant Chicory Mix
              </h2>
              <p className="text-gray-700 mb-6">
                A rich and bold mix of coffee and chicory that delivers
                adeep,satisfying strength. Expertly designed for those who seek
                apowerful,full-bodied coffee experience. Embrace instant
                boldness with every sip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
