/** @format */
"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Title from "../common/title";
import ContactForm from "../common/ContactForm";
import { sections } from "@/enum";
import { useLocale, useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <section
      id={`${sections.contact}`}
      className="relative container m-auto py-10 px-4 md:px-12 lg:px-24 min-h-screen bg-white text-gray-800 grid"
    >
      <div className="mb-4">
        <Title title={t("title")} />
      </div>

      <p className="text-gray-600 text-base md:text-lg pb-30">
        {t("description")}
      </p>
      {/* Background Image */}
      <div
        data-aos="fade-up"
        className="absolute top-40 bottom-10 left-20 right-20 w-6/11 hidden md:block z-0"
      >
        <Image
          src="/contactImage.jpg"
          alt="Car Photography"
          fill
          className="object-cover rounded-r-lg opacity-80"
          style={{ objectPosition: isRTL ? "center right" : "center left" }}
        />
        <div className="bg-black opacity-60 inset-0 z-10 absolute"></div>
      </div>

      {/* Content Section */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Info Box */}
        <div className="bg-transparent p-8 md:p-12 rounded-xl shadow-md w-full md:w-1/2"></div>

        {/* Form Box */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>

      {/* Mobile Image */}
      <div data-aos="fade-up" className="md:hidden mt-10">
        <Image
          src="/car-1.jpg"
          alt="Car Photography"
          width={800}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </section>
  );
}
