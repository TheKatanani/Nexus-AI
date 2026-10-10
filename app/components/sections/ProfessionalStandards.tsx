"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProfessionalStandards() {
  const t = useTranslations("ProfessionalStandards");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelector(".content"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-brand-primary font-semibold">
            {t("subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="content space-y-6 text-lg leading-relaxed mb-12">
          <p>{t("content.intro")}</p>
          <p>{t("content.certification")}</p>
        </div>

        {/* Guarantee Box */}
        <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border-2 border-brand-primary rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🛡️</span> {t("guarantee.title")}
          </h3>
          <p className="text-lg leading-relaxed">{t("guarantee.content")}</p>
        </div>
      </div>
    </section>
  );
}
