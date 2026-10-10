"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import { Partner } from "./types";
import { PartnerCard } from "./PartnerCard";
import { useCarousel3D } from "./useCarousel3D";

type Props = {
  partners?: Partner[];
};

export default function PartnersCarousel({ partners }: Props) {
  const rawLocale = useLocale();
  const locale = (rawLocale === "ar" ? "ar" : "en") as "ar" | "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  const data: Partner[] = useMemo(
    () =>
      partners ?? [
        {
          id: "1",
          logo: "/logo.svg",
          name: { ar: "الشريك الاستراتيجي", en: "Strategic Partner" },
          description: {
            ar: "شريك رئيسي في تطوير حلول الطيران.",
            en: "A key partner in developing aviation solutions.",
          },
        },
        {
          id: "2",
          // replaced missing logoOld.png with existing /logo.png
          logo: "/logo.png",
          name: { ar: "أكاديمية التدريب", en: "Training Academy" },
          description: {
            ar: "نقدم برامج تدريبية معتمدة عالمياً.",
            en: "Providing globally accredited training programs.",
          },
        },
        {
          id: "3",
          // replaced missing smallLogoMarwan.PNG with existing /logo.svg
          logo: "/logo.svg",
          name: { ar: "خدمات المطار", en: "Airport Services" },
          description: {
            ar: "دعم لوجستي وتشغيلي متكامل.",
            en: "Integrated logistical and operational support.",
          },
        },
        {
          id: "4",
          logo: "/vercel.svg",
          name: { ar: "التقنية الحديثة", en: "Modern Tech" },
          description: {
            ar: "حلول تقنية مبتكرة لقطاع الطيران.",
            en: "Innovative tech solutions for the aviation sector.",
          },
        },
        {
          id: "5",
          logo: "/next.svg",
          name: { ar: "تطوير المستقبل", en: "Future Development" },
          description: {
            ar: "رؤية مستقبلية لتطوير الكوادر.",
            en: "Future vision for workforce development.",
          },
        },
        {
          id: "6",
          // replaced missing plane.png with existing /redCar.png
          logo: "/redCar.png",
          name: { ar: "النقل الجوي", en: "Air Transport" },
          description: {
            ar: "خدمات نقل جوي آمنة وموثوقة.",
            en: "Safe and reliable air transport services.",
          },
        },
      ],
    [partners]
  );

  const totalCards = data.length;

  const {
    carouselRef,
    activeIndex,
    step,
    nextCard,
    prevCard,
    goToIndex,
    bindPauseHandlers,
    bindDragHandlers,
  } = useCarousel3D({
    totalCards,
    autoplayMs: 4500,
    enableKeyboardOnDesktop: true,
  });

  const t = useTranslations("Partners");

  return (
    <section dir={dir} className="relative overflow-hidden bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center">
          <Title title={t("sectionTitle")} />
          <SubTitle
            fTitle={t("fTitle")}
            sTitle={""}
            subTitle={t("subTitle")}
          />
        </div>

        <div className="relative mt-14">
          {/* Static floor */}
          <div className="pointer-events-none absolute left-1/2 top-[62%] h-[520px] w-[1200px] -translate-x-1/2">
            <div className="floor-perspective h-full w-full opacity-60">
              <div className="grid-floor h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-white via-white/70 to-white" />
          </div>

          {/* Arrows (desktop only) */}
          <button
            type="button"
            aria-label="Previous"
            onClick={dir === "rtl" ? nextCard : prevCard}
            className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-md ring-1 ring-black/5 hover:bg-white lg:block"
          >
            <span className="text-gray-500">‹</span>
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={dir === "rtl" ? prevCard : nextCard}
            className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-4 shadow-md ring-1 ring-black/5 hover:bg-white lg:block"
          >
            <span className="text-gray-500">›</span>
          </button>

          {/* 3D scene */}
          <div
            className="carousel-wrap mx-auto h-[440px] w-full max-w-6xl"
            {...bindPauseHandlers}
            {...bindDragHandlers}
          >
            <div className="carousel-container">
              <div ref={carouselRef} className="carousel">
                {data.map((partner, i) => {
                  const dist = Math.abs(
                    (i - activeIndex + totalCards) % totalCards
                  );
                  const depth = Math.min(dist, totalCards - dist);

                  const opacity = depth === 0 ? 1 : depth === 1 ? 0.85 : 0.75;
                  const brightness = depth === 0 ? 1 : depth === 1 ? 0.95 : 0.9;
                  const blur =
                    depth === 0
                      ? "none"
                      : depth === 1
                      ? "blur(0.2px)"
                      : "blur(0.5px)";

                  return (
                    <div
                      key={partner.id}
                      className={`carousel-item ${
                        i === activeIndex ? "active" : ""
                      }`}
                      style={{
                        transform: `rotateY(${
                          i * step
                        }deg) translateZ(var(--carousel-radius))`,
                        opacity,
                        filter: `brightness(${brightness}) ${blur}`,
                      }}
                    >
                      <PartnerCard
                        partner={partner}
                        locale={locale}
                        isActive={i === activeIndex}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pagination (dots behavior, line UI) */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {data.map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isActive ? "true" : "false"}
                  onClick={() => goToIndex(idx)}
                  className={[
                    "h-[3px] rounded-full transition-all",
                    isActive
                      ? "w-12 bg-[#F2B200]"
                      : "w-6 bg-[#E6E6E6] hover:bg-[#DADADA]",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
