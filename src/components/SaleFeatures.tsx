"use client";

import React from "react";
import { Check, Truck, Shield, Heart } from "lucide-react";

const SaleFeatures: React.FC = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "On orders over $75"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "100% authentic Gotland wool"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sustainably Sourced",
      description: "Ethically produced yarn"
    }
  ];

  return (
    <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full mb-4 text-amber-600 dark:text-amber-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleFeatures;