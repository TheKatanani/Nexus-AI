/** @format */

"use client";
// import VideoPlayer from "@/app/components/VideoPlayer";
import type { Gallery } from "@/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

import { useTranslations } from "next-intl";

type Show = "videos" | "images" | "reviews";

function Gallery({ gallery }: { gallery: Gallery }) {
  const t = useTranslations("portfolio");
  const [show, setShow] = useState<Show>("images");
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const imagesLength = gallery.images.length;

  useEffect(() => {
    setLoading(true);
    setLoadedCount(0);
  }, [show]);

  const handleImageLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === imagesLength) {
        setLoading(false);
      }
      return newCount;
    });
  };

  return (
    <div data-aos="fade-up" className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-10">
        <div className="flex bg-brand-primary/5 p-1.5 rounded-2xl border border-brand-primary/10 overflow-hidden">
          <button
            onClick={() => setShow("images")}
            className={`px-8 md:px-12 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              show === "images"
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                : "text-gray-500 hover:text-brand-primary"
            }`}
          >
            {t("photos")}
          </button>
          <button
            onClick={() => setShow("videos")}
            className={`px-8 md:px-12 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              show === "videos"
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                : "text-gray-500 hover:text-brand-primary"
            }`}
          >
            {t("videos")}
          </button>
          <button
            onClick={() => setShow("reviews")}
            className={`px-8 md:px-12 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              show === "reviews"
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                : "text-gray-500 hover:text-brand-primary"
            }`}
          >
            {t("reviews")}
          </button>
        </div>
      </div>

      <div
        className={`grid gap-6 justify-center ${
          show === "reviews"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {show === "images" &&
          gallery.images.map((src, idx) => (
            <div
              key={idx}
              className="group relative w-full h-40 md:h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              {loading && (
                <div className="absolute inset-0 bg-brand-primary/5 animate-pulse rounded-3xl z-0" />
              )}

              <Image
                src={src}
                onError={(e) => (e.currentTarget.src = "/test2.jpg")}
                onLoad={handleImageLoad}
                alt={`Gallery image ${idx}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl z-10"
              />
            </div>
          ))}

        {show === "videos" &&
          gallery?.videos?.map((src, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-md h-40 md:h-72"
            >
              <video
                src={src}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        {show === "reviews" &&
          gallery?.reviews?.map((review, idx) => (
            <div key={idx} className="h-full">
              <ReviewCard {...review} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gallery;
