"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  originalPrice: number;
  salePrice: number;
  color: string;
  weight: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Gotland DK",
    originalPrice: 24.99,
    salePrice: 17.49,
    color: "Natural Grey",
    weight: "100g",
    image: "/placeholder.svg"
  },
  {
    name: "Gotland Aran",
    originalPrice: 26.99,
    salePrice: 18.89,
    color: "Silver Mist",
    weight: "100g",
    image: "/placeholder.svg"
  },
  {
    name: "Gotland Lace",
    originalPrice: 22.99,
    salePrice: 16.09,
    color: "Pearl White",
    weight: "50g",
    image: "/placeholder.svg"
  },
  {
    name: "Gotland Chunky",
    originalPrice: 28.99,
    salePrice: 20.29,
    color: "Charcoal",
    weight: "100g",
    image: "/placeholder.svg"
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Sale Items
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hand-selected Gotland wool in beautiful natural colors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-t-lg flex items-center justify-center">
                  <div className="text-6xl">🧶</div>
                </div>
                <Badge className="absolute top-2 right-2 bg-red-500">
                  -30%
                </Badge>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {product.color} • {product.weight}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    ${product.salePrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;