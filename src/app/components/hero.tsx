import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-[#1a1a1a] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0  z-10" />
        <Image
          src="/assets/Banner.jpg"
          alt="Coffee splash"
          height={200}
          width={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* <Image
            src="/assets/goldlogo.png"
            alt="Logo"
            height={400}
            width={400}
            className="mb-6 pt-12"
          />
          <h1 className="text-5xl font-bold mb-6">UNITED BY COFFEE</h1>
          <p className="text-lg mb-8 text-gray-200">
            Experience The Rich And Bold Flavors Of Our Signature
            <br />
            Coffee Blends, Crafted To Awaken Your Senses.
          </p> */}
          {/* <div className="flex gap-4">
            <Button className="bg-[#c4a484] hover:bg-[#b39476] text-white">
              Order Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white bg-white/10 hover:border-white"
            >
              Explore More
            </Button>
          </div> */}
          {/* <div className="flex gap-12 mt-2">
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-gray-300">COUNTRIES</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm text-gray-300">YEARS BREWING</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1000's</p>
              <p className="text-sm text-gray-300">HAPPY CUSTOMER</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
