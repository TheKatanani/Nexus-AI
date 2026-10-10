"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-brand-primary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Trophy Badge */}
          <div className="inline-block bg-brand-primary/10 border border-brand-primary rounded-full px-6 py-3 text-sm md:text-base font-semibold text-brand-primary animate-pulse">
            {t("headline.trophy")}
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-brand-primary">
              {t("headline.name").split(" ")[0]}
            </span>
            <span className="block">{t("headline.name").split(" ")[1]}</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            {t("headline.tagline")}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="space-y-4">
            <Link
              href="#contact"
              className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("cta.primary")}
            </Link>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-muted-foreground">
              <span>{t("cta.benefits.noCard")}</span>
              <span>{t("cta.benefits.instant")}</span>
              <span>{t("cta.benefits.booklets")}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-brand-primary">
                {t("stats.professionals")}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {t("stats.professionalsLabel")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-brand-primary">
                {t("stats.years")}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {t("stats.yearsLabel")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-brand-primary">
                {t("stats.diplomas")}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {t("stats.diplomasLabel")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full bg-brand-primary/20 border-2 border-brand-primary flex items-center justify-center">
          <svg
            className="w-6 h-6 text-brand-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
