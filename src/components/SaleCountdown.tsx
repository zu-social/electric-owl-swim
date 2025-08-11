"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const SaleCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sale Ends In
          </h2>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit}>
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 uppercase">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SaleCountdown;