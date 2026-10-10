/** @format */

import { useLocale } from "next-intl";
import React from "react";

function Title({
  title,
  color = "brand-primary",
  className = "",
}: {
  title: string;
  color?: string;
  className?: string;
}) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const start = title.split(" ").slice(0, -1).join(" ");
  const hailayted = title.split(" ").slice(-1).join(" ");
  return (
    <h2
      dir={isArabic ? "rtl" : "ltr"}
      className={`text-xl text-gray-800 sm:text-2xl font-semibold flex items-center ps-7 md:p-0 gap-2 relative before:absolute  ${
        isArabic
          ? "before:md:right-[-12px] before:right-0"
          : "before:md:left-[-12px] before:left-0"
      }  before:top-3 before:bottom-[-5px] before:w-2 before:bg-[color:var(--color-${color})] after:absolute ${
        isArabic
          ? "after:right-3 after:md:right-[-22px]"
          : "after:left-3 after:md:left-[-22px]"
      } after:top-1 after:bottom-0 after:w-2 after:bg-[color:var(--color-${color})] ${className}`}
    >
      {start}
      <span className={`text-[color:var(--color-${color})] font-bold`}>
        {" "}
        {hailayted}
      </span>
    </h2>
  );
}

export default Title;
