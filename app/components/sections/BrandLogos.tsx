"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const brands = [
  { src: "/brands/mercedes.png", name: "Mercedes" },
  { src: "/brands/lamborghini.png", name: "Lamborghini" },
  { src: "/brands/bentley.png", name: "Bentley" },
  { src: "/brands/ferrari.png", name: "Ferrari" },
  { src: "/brands/rollsroyce.png", name: "Rolls Royce" },
  { src: "/brands/porsche.png", name: "Porsche" },
];

export default function BrandLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        marquee,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 25,
          ease: "linear",
          repeat: -1,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-12 bg-background border-y border-border"
    >
      <div
        ref={marqueeRef}
        className="flex w-max items-center space-x-16 md:space-x-24"
        style={{ willChange: "transform" }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
          >
            <div className="h-16 w-32 relative">
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
