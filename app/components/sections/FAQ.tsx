/** @format */
"use client";

import { useState } from "react";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import { sections } from "@/enum";
import { useTranslations } from "next-intl";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // default open second FAQ
  const [showAll, setShowAll] = useState(false); // show more/less toggle

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const t = useTranslations("FAQS");
  const faqs = t.raw("faqs") as FAQ[];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section
      id={`${sections.FAQ}`}
      className="container m-auto py-10 px-4 md:px-12 lg:px-24 min-h-screen bg-white text-gray-800"
    >
      {/* Section Header */}
      <Title title={t("sectionTitle")} />
      <SubTitle fTitle={t("fTitle")} sTitle="" subTitle={t("subTitle")} />

      {/* FAQ List */}
      <div data-aos="fade-up" className="space-y-4">
        {visibleFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl border-2 max-w-4xl shadow mx-auto ${
                isOpen
                  ? "bg-black text-white border-black shadow-md"
                  : "border-brand-primary-light"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left px-5 py-4 font-medium text-lg"
              >
                <span className={isOpen ? "font-bold" : "font-semibold"}>
                  {faq.question}
                </span>
                <div
                  className={`flex items-center justify-center w-10 h-10 text-xl rounded-full text-white transition-transform leading-none pb-1 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(92.71deg, var(--color-brand-primary) 2.26%, var(--color-brand-primary-dark) 90.54%)",
                  }}
                >
                  {isOpen ? "-" : "+"}
                </div>
              </button>

              {/* Keep the answer in the DOM and animate height + opacity to avoid remounting (prevents retriggering AOS) */}
              <div
                className={`px-5 pb-4 pt-0 text-sm text-gray-200 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More / Less Button */}
      {faqs.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-medium text-brand-primary hover:text-brand-primary-dark cursor-pointer"
          >
            {showAll ? t("showLess") : t("showMore")}
          </button>
        </div>
      )}
    </section>
  );
}
