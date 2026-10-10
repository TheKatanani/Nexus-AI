"use client";

import { useState } from "react";
import Image from "next/image";
import { Partner } from "./types";

type Props = {
  partner: Partner;
  locale: "ar" | "en";
  isActive: boolean;
};

export function PartnerCard({ partner, locale, isActive }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 🔥 Prevent drag/carousel rotation
    if (!isActive) return; // 🔒 Only active card can flip
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`partner-card ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        {/* FRONT FACE - Logo + Name */}
        <div
          className="card-face card-front bg-linear-to-b from-[color:var(--color-brand-primary-light)] via-[color:var(--color-brand-primary)] to-[color:var(--color-brand-primary-dark)]
                     shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
        >
          {/* Logo chip */}
          <div className="absolute top-7 right-7 rounded-2xl bg-white px-5 py-4 shadow-sm">
            <div className="relative h-8 w-16">
              <Image
                src={partner.logo}
                alt={partner.name[locale]}
                fill
                sizes="(max-width: 640px) 64px, 128px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Vertical strip (decorative) */}
          <div className="absolute inset-y-0 left-[36%] w-[64px] bg-white/10 blur-[0.2px]" />
          <div className="absolute inset-y-0 left-[36%] w-[64px] bg-linear-to-b from-white/0 via-white/12 to-white/0" />

          {/* Name */}
          <div className="absolute inset-x-8 bottom-12 text-center">
            <h3 className="text-[34px] font-semibold leading-tight text-white">
              {partner.name[locale]}
            </h3>
          </div>

          {/* Soft highlight */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.22),transparent_55%)]" />
        </div>

        {/* BACK FACE - Description */}
        <div
          className="card-face card-back bg-linear-to-b from-brand-primary via-brand-primary-dark to-brand-primary-dark
                     shadow-[0_40px_80px_rgba(0,0,0,0.18)] flex items-center justify-center p-8"
        >
          <div className="text-center">
            {/* Small logo on back */}
            <div className="mx-auto mb-6 h-12 w-20 relative">
              <Image
                src={partner.logo}
                alt=""
                fill
                sizes="(max-width: 640px) 80px, 160px"
                className="object-contain opacity-60"
                loading="lazy"
              />
            </div>

            {/* Description */}
            <p className="text-[15px] leading-relaxed text-white/95">
              {partner.description[locale]}
            </p>

            {/* Optional: Partner name in smaller text */}
            <p className="mt-6 text-sm font-semibold text-white/70">
              {partner.name[locale]}
            </p>
          </div>

          {/* Soft highlight on back too */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(255,255,255,0.15),transparent_55%)]" />
        </div>
      </div>
    </div>
  );
}
