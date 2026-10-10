"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import { useTranslations } from "next-intl";

const logos = [
  { src: "/car-1.jpg", alt: "Mercedes" },
  { src: "/car-2.jpg", alt: "Audi" },
  { src: "/car-3.jpg", alt: "Porsche" },
  { src: "/car-4.jpg", alt: "Cadillac" },
  { src: "/car-5.jpg", alt: "BMW" },
  { src: "/car-6.jpg", alt: "BMW" },
];

const AUTO_SLIDE_INTERVAL = 4000;

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // default desktop
  const t = useTranslations("Partners");

  // Handle responsiveness
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerSlide(1); // mobile
      else if (width < 768) setItemsPerSlide(2); // small tablets
      else if (width < 1024) setItemsPerSlide(3); // tablets
      else setItemsPerSlide(4); // desktop
    };

    updateItemsPerSlide(); // initial
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(logos.length / itemsPerSlide)
      );
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  const visibleLogos = logos.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="container m-auto py-10 px-4 md:px-12 lg:px-24 min-h-screen bg-white text-center">
      <Title title={t("sectionTitle")} />
        <SubTitle
          fTitle={t("fTitle")}
          sTitle={""}
          subTitle={t("subTitle")}
        />

      <div className="flex flex-wrap justify-center gap-4 mb-6 transition-all duration-500">
        {visibleLogos.map((logo, i) => (
          <div
            key={i}
            className="rounded-xl bg-white shadow-md flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="object-cover w-[16rem] h-[16rem] rounded-xl"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({
          length: Math.ceil(logos.length / itemsPerSlide),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-4 h-4 cursor-pointer rounded-full ${
              currentSlide === i ? "bg-[color:var(--color-brand-primary)]" : "bg-gray-300"
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
}

