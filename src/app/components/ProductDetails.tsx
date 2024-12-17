"use client";

import { useState } from "react";
import { ArrowLeft, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ProductDetail({ product }: any) {
  const [quantity, setQuantity] = useState(1);

  const [cartItem, setCartItem] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const addToCart = (product: any) => {
    setCartItem((prev: any) => {
      return [...prev, { ...product, quantity: quantity }];
    });
  };
  console.log(selectedProduct?.image, "dc");
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#342b27] to-[#6d5043] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#e9703c] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#f4672a] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          {/* <img
            src="/placeholder.svg?height=40&width=40"
            alt="Xefag Logo"
            className="h-10"
          /> */}
          {/* <span className="font-bold text-2xl">Koffelo</span> */}
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/80">
            Products
          </Button>

          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-white text-[#8B1538] rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItem.length}
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-white/80 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Categories */}
        <div className="flex items-center gap-4 mb-12"></div>

        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl mb-8">{product.description}</p>
            <div className="flex gap-4 items-center">
              {product.quantity.map((item: any, index: number) => {
                return (
                  <Badge
                    onClick={() => {
                      setSelectedProduct(item);
                    }}
                    className={cn(
                      "cursor-pointer bg-white text-black",
                      selectedProduct?.label === item.label &&
                        "text-white bg-black"
                    )}
                    key={index}
                  >
                    {item.label}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div className="relative w-[500px] h-[500px]">
            <img
              src={selectedProduct?.images || product.image}
              alt="Sleep 30 Wafers Bottle"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Pill Count Selection */}
        {/* <div className="flex justify-end gap-4 mt-8">
          {[30, 60, 90].map((count) => (
            <Button
              key={count}
              variant={selectedCount === count ? "default" : "ghost"}
              className={`rounded-full w-12 h-12 p-0 ${
                selectedCount === count
                  ? "bg-white text-[#8B1538]"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setSelectedCount(count)}
            >
              {count}
            </Button>
          ))}
          <Button
            variant="ghost"
            className="text-white hover:text-white/80"
            size="icon"
          >
            <Info className="w-5 h-5" />
          </Button>
        </div> */}

        {/* Purchase Section */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#342b27] backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-3xl font-bold">$25.50</span>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-white/80"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-xl w-8 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-white/80"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button
              onClick={() => addToCart(product)}
              className="bg-white text-[#8B1538] hover:bg-white/90"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
