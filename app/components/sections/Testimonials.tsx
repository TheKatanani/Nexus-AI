import React from "react";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import TestimonialCarousel from "../ui/Carousel ";
import { sections } from "@/enum";
import { useTranslations } from "next-intl";

function Testimonials() { 
  const t = useTranslations("testimonials");

 
  
  return (
    <section id={`${sections.testimonials}`} className="container m-auto py-10 px-4 md:px-12 lg:px-24 min-h-screen bg-white">
       <Title title={t("sectionTitle")} />
        <SubTitle
          fTitle={t("fTitle")}
          sTitle=""
          subTitle={t("subTitle")}
        />
      <TestimonialCarousel />
    </section>
  );
}

export default Testimonials;
