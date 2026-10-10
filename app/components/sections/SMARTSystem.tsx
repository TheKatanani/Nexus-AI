"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SMARTSystem() {
  const t = useTranslations("SMARTSystem");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".smart-card");

    gsap.fromTo(
      cards,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  const smartItems = [
    { letter: "S", key: "specific" },
    { letter: "M", key: "measurable" },
    { letter: "A", key: "authentic" },
    { letter: "R", key: "relevant" },
    { letter: "T", key: "timeBound" },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8" dir="ltr">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground mb-6">{t("subtitle")}</p>
          <p className="text-lg max-w-4xl mx-auto">{t("intro")}</p>
        </div>

        {/* SMART Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {smartItems.map((item) => (
            <div
              key={item.letter}
              className="smart-card bg-card border border-border rounded-xl p-6 hover:border-brand-primary transition-all hover:shadow-lg items-center flex flex-col text-center"
            >
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold">
                  {item.letter}
                </div>
                <h3 className="text-lg md:text-xl font-bold">
                  {t(`items.${item.key}.name`)}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {t(`items.${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl p-8 text-center">
          <p className="text-lg md:text-xl italic">{t("quote")}</p>
        </div>
      </div>
    </section>
  );
}
