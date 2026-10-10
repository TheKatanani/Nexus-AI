"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("CallToAction");

  return (
    <section className="py-20 px-4 md:px-8 bg-brand-primary-light/10 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-primary">
          {t("title")}
        </h2>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-800">
          {t("description")}
        </p>
        <button className="bg-white text-brand-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          {t("cta")}
        </button>
      </div>
    </section>
  );
}
