"use client";
/** @format */

import React from "react";
import Gallery from "../ui/Gallery";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import { sections } from "@/enum";
import { useTranslations } from "next-intl";

function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section
      id={`${sections.portfolio}`}
      className="container mx-auto bg-background text-foreground py-10 px-4 md:px-12 lg:px-24 min-h-screen"
    >
      <Title title={t("sectionTitle")} />
      <SubTitle
        fTitle={t("fTitle")}
        sTitle={t("sTitle")}
        subTitle={t("subTitle")}
      />
      <Gallery
        gallery={{
          images: [
            "/car-1.jpg",
            "/car-2.jpg",
            "/car-3.jpg",
            "/car-4.jpg",
            "/car-5.jpg",
            "/car-6.jpg",
          ],
          videos: ["/animationLogo.mp4"],
          reviews: [
            {
              text: "The professional photography really made our showroom stand out! We sold three cars in the first week after updating our online listings.",
              name: "Michael Chen",
              country: "Dubai, UAE",
              avatar: "/car-1.jpg",
              rating: 5,
            },
            {
              text: "Babylon's digital marketing strategy is top-notch. They understand the car industry better than any other agency we've worked with.",
              name: "David Ross",
              country: "Abu Dhabi, UAE",
              avatar: "/car-2.jpg",
              rating: 5,
            },
            {
              text: "Exceptional quality in both photos and videos. The drone shots of our luxury convoy were breathtaking and got viral engagement.",
              name: "Fahad Al-Maktoum",
              country: "Sharjah, UAE",
              avatar: "/car-3.jpg",
              rating: 5,
            },
          ],
        }}
      />
    </section>
  );
}

export default Portfolio;
