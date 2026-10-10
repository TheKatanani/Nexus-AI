"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
  const t = useTranslations("Programs");
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedPrograms, setExpandedPrograms] = useState<
    Record<string, boolean>
  >({});

  const toggleProgram = (key: string) => {
    setExpandedPrograms((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".program-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  const programs = [
    { id: "01", key: "ecommerce" },
    { id: "02", key: "tourism" },
    { id: "03", key: "sales" },
    { id: "04", key: "wealth" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground mb-4">{t("subtitle")}</p>
          <p className="text-lg max-w-4xl mx-auto text-brand-primary font-semibold">
            {t("warning")}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="program-card bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-brand-primary transition-all hover:shadow-xl flex flex-col justify-between"
            >
              {/* Program Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="shrink-0">
                  <div className="text-6xl font-bold text-brand-primary/20">
                    {program.id}
                  </div>
                  <div className="text-sm text-muted-foreground text-center mt-2">
                    {t("programLabel")} {program.id}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {t(`${program.key}.title`)}
                  </h3>
                  <p className="text-lg text-brand-secondary mb-4 italic">
                    {t(`${program.key}.tagline`)}
                  </p>
                </div>
              </div>

              {/* Transformation */}
              <div className="mb-6">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-brand-primary">
                    {t("transformLabel")}
                  </span>{" "}
                  {t(`${program.key}.transformation`)}
                </p>
              </div>

              {/* What You'll Avoid */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <p className="text-lg">
                  <span className="font-semibold">⚠️ {t("avoidLabel")}</span>{" "}
                  {t(`${program.key}.avoid`)}
                </p>
              </div>

              {/* Modules */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-4">
                  {t("modulesLabel")}
                </h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {Array.from({
                    length: parseInt(t(`${program.key}.modulesCount`)),
                  })
                    .slice(0, expandedPrograms[program.key] ? undefined : 5)
                    .map((_, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-brand-primary">◆</span>
                        <span className="text-muted-foreground">
                          {t(`${program.key}.modules.${idx}`)}
                        </span>
                      </div>
                    ))}
                </div>
                {parseInt(t(`${program.key}.modulesCount`)) > 5 && (
                  <button
                    onClick={() => toggleProgram(program.key)}
                    className="text-brand-primary text-sm font-semibold mt-4 hover:underline"
                  >
                    {expandedPrograms[program.key]
                      ? t("showLess")
                      : t("showMore")}
                  </button>
                )}
              </div>

              {/* Certification */}
              <div className="mb-6 flex items-center gap-2 text-green-600 dark:text-green-400">
                <span className="text-xl">✓</span>
                <span className="font-semibold">
                  {t(`${program.key}.certification`)}
                </span>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between border-t border-border pt-6">
                <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  {t("downloadBrochure")}
                </button>
                <div className="text-sm text-muted-foreground">
                  📥 {t(`${program.key}.downloads`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
