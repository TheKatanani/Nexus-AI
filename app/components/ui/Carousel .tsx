/** @format */

"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const ITEMS_PER_PAGE = 3;
type Card = {
  id: number | string;
  image: string;
  quote: string;
  author: {
    name: string;
    jobTitle: string;
    image: string;
  };
};
export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const t = useTranslations("testimonials");

  const cards = t.raw("cards");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const visibleCards: Card[] = cards.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < cards.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
      setExpandedIndex(null);
    }
  };

  const handlePrev = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
      setExpandedIndex(null);
    }
  };

  return (
    <div className="relative w-full px-4 py-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCards.map((card, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={card.id}
              className={`group transition-all duration-500 ease-in-out transform hover:scale-[1.02] cursor-pointer flex justify-center items-center bg-white rounded-xl shadow-md overflow-hidden`}
              onClick={() => setExpandedIndex(i)}
            >
              <div
                className={`relative h-80 bg-cover bg-center flex-1 transition-all duration-1000 ease-in-out`}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-40 bg-black transition-opacity duration-500">
                  <div className="w-14 h-14 bg-[color:var(--color-brand-primary)] rounded-full flex items-center justify-center relative">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {isExpanded && (
                <div className="p-4 h-80 flex-1 animate-fade-in">
                  <div className="flex justify-start gap-1">
                    <Image
                      alt="coma image"
                      src={"/coma.svg"}
                      width={40}
                      height={40}
                      className="h-5 w-5"
                    />
                    <Image
                      alt="coma image"
                      src={"/coma.svg"}
                      width={40}
                      height={40}
                      className="h-5 w-5"
                    />
                  </div>
                  <p className="text-sm text-gray-700 italic pt-5 transition-opacity duration-500 ease-in">
                    â€œ{card.quote}â€
                  </p>
                  <div className="mt-2 font-bold flex justify-center gap-4 items-center">
                    <Image
                      alt="author image"
                      src={card.author.image}
                      width={40}
                      height={40}
                      className="rounded-full bg-cover h-10 w-10"
                    />
                    <div>
                      <h3 className="text-gray-800 text-sm">
                        {card.author.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {card.author.jobTitle}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end mt-4 gap-2 text-gray-800">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-2 border rounded-full ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isRTL ? <ChevronRight /> : <ChevronLeft />}
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + ITEMS_PER_PAGE >= cards.length}
          className={`p-2 border rounded-full ${
            startIndex + ITEMS_PER_PAGE >= cards.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isRTL ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
    </div>
  );
}

