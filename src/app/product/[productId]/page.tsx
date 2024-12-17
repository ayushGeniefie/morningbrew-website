import { notFound } from "next/navigation";
import ProductDetail from "../../components/ProductDetails";

const products = [
  {
    id: 1,
    name: "Premium",
    image: "/assets/2GmGold.png",
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
    image: "/assets/100gmCopper.png",
    description:
      "A rich and bold mix of coffee and chicory that delivers adeep,satisfying strength. Expertly designed for those who seek apowerful,full-bodied coffee experience. Embrace instant boldness with every sip.",
    quantity: [
      { label: "2gm", images: "/assets/2Gmcopper.png" },
      { label: "50gm", images: "/assets/50gmCopper.png" },
      { label: "100gm", images: "/assets/100gmCopper.png" },
    ],
  },
];

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === parseInt(params.productId));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
