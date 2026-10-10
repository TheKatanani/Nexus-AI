import { sections } from "@/enum";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const PromoSection = () => {
  const t = useTranslations("PromoSection");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section
      id={`${sections.promo}`}
      className="container m-auto py-10 px-4 md:px-12 lg:px-24 min-h-screen flex flex-col items-center bg-white text-gray-800"
    >
      <div className="text-center mb-6">
        <h2
          dir={isArabic ? "rtl" : "ltr"}
          className={`text-xl text-gray-800 sm:text-2xl font-semibold flex items-center pl-7 md:p-0 gap-2 relative 
    before:absolute ${
      isArabic
        ? "before:md:right-[-12px] before:right-0"
        : "before:md:left-[-12px] before:left-0"
    } 
    before:top-3 before:bottom-[-5px] before:w-2 before:bg-[color:var(--color-brand-primary)] 
    after:absolute ${
      isArabic
        ? "after:right-3 after:md:right-[-22px]"
        : "after:left-3 after:md:left-[-22px]"
    } 
    after:top-1 after:bottom-[-0px] after:w-2 after:bg-[color:var(--color-brand-primary)]`}
        >
          <div>
            {t("headline.leftStart")}{" "}
            <span className="text-[color:var(--color-brand-primary)] font-bold">
              {t("headline.highlight1")}
            </span>
            <span className="text-gray-800">..........</span>
          </div>
          <div className="mt-[40px] ml-[-30px]">
            <span className="text-gray-800">..........</span>{" "}
            {t("headline.rightStart")}{" "}
            <span className="text-[color:var(--color-brand-primary)] font-bold">
              {t("headline.highlight2")}
            </span>{" "}
            {t("headline.rightEnd")}
          </div>
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="my-10 max-w-4xl w-full shadow-lg rounded-xl overflow-hidden relative aspect-video bg-black"
      >
        <video className="w-full h-full relative z-10 rounded-xl" controls>
          <source src="/animationLogo.mp4" type="video/mp4" />
          {t("video.fallback")}
        </video>
      </div>
    </section>
  );
};

export default PromoSection;

