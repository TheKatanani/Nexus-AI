"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseBabylon() {
  const t = useTranslations("WhyChooseBabylon");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".cert-card");

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  const certifications = [
    { code: "CPSP", name: t("certifications.0.name") },
    { code: "ASC", name: t("certifications.1.name") },
    { code: "AMA", name: t("certifications.2.name") },
    { code: "NADA", name: t("certifications.3.name") },
    { code: "KHDA", name: t("certifications.4.name") },
    { code: "AME", name: t("certifications.5.name") },
    { code: "IATA", name: t("certifications.6.name") },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card bg-card border border-border rounded-xl p-6 text-center hover:border-brand-primary transition-all hover:shadow-lg group"
            >
              <div className="text-3xl font-bold text-brand-primary mb-3 group-hover:scale-110 transition-transform">
                {cert.code}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">
                {cert.name}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
