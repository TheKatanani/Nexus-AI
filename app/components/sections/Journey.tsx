"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const t = useTranslations("Journey");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".stat-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  const stats = [
    { value: "9", label: t("stats.years") },
    { value: "200+", label: t("stats.professionals") },
    { value: "$6.5T", label: t("stats.marketValue") },
    { value: "4", label: t("stats.programs") },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Content */}
        <div className="mb-12 space-y-6 text-lg leading-relaxed">
          <p>{t("content.intro")}</p>
          <p>{t("content.gap")}</p>
          <p>{t("content.solution")}</p>
        </div>

        {/* Promise */}
        <div className="bg-brand-primary/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span> {t("promise.title")}
          </h3>
          <p className="text-lg">{t("promise.content")}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-card border border-border rounded-xl p-6 text-center hover:border-brand-primary transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
