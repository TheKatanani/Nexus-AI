"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Title from "../common/title";
import { CirclesBg } from "../ui/CirclesBg";

const MEMBER_IMAGES = [
  "/car-1.jpg",
  "/car-2.jpg",
  "/car-3.jpg",
  "/car-4.jpg",
  "/car-5.jpg",
  "/car-6.jpg",
  "/car-1.jpg",
];

export default function JoinCommunitySection() {
  const t = useTranslations("Community");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const members = t.raw("members") as Array<{ name: string; text: string }>;

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-24 overflow-hidden bg-white md:px-10"
    >
      {/*START — TEXT */}
      <div className="max-w-xl mx-auto lg:mx-0 px-6 text-center lg:text-start relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-sm mb-4 border border-brand-gold/20">
          {t("badge")}
        </span>
        <Title
          title={t("title")}
          color="brand-gold"
          className="justify-center lg:justify-start mb-6"
        />

        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          {t("description")}
        </p>

        <button className="btn-goald">{t("cta")}</button>
      </div>
      {/* END — CIRCLES + MEMBERS */}
      <div className="relative flex justify-center items-center h-[500px] sm:h-[600px] lg:h-[700px] scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
        <div className="w-[520px] h-[520px] sm:w-[600px] sm:h-[600px] lg:w-[680px] lg:h-[680px] opacity-80">
          <CirclesBg />
        </div>

        {/* CENTER DOLLAR with Glow/Mask Effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[220px] lg:w-[280px] h-[180px] sm:h-[220px] lg:h-[280px] animate-pulse">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-brand-gold blur-3xl opacity-20 rounded-full scale-110"></div>

          {/* SVG Version */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3840 2160"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full relative z-10 drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF6C7" />
                <stop offset="20%" stopColor="#FFD66B" />
                <stop offset="45%" stopColor="#E6B84A" />
                <stop offset="70%" stopColor="#C9972E" />
                <stop offset="100%" stopColor="#FFF1A8" />
              </linearGradient>

              <linearGradient id="goldDepth" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8A5A00" />
                <stop offset="100%" stopColor="#D4A037" />
              </linearGradient>

              <linearGradient id="goldHighlight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#goldGradient)"
              fontSize="1600"
              fontWeight="bold"
              fontFamily="serif"
              className="text-[3500px] translate-y-80 select-none"
              style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))" }}
            >
              $
            </text>
          </svg>
          {/* <Image
            src="/dollar1.png"
            alt="dollar"
            width={100}
            height={100}
            className="w-auto h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-2xl"
          /> */}
          {/* Mask Image Version (Commented) */}
          {/* <div
            role="img"
            aria-label="dollar"
            className="w-full h-full relative z-10 drop-shadow-2xl"
            style={{
              background:
                "linear-gradient(180deg, #FFF6C7 0%, #FFD66B 20%, #E6B84A 45%, #C9972E 70%, #FFF1A8 100%)",
              maskImage: "url(/dollar.png)",
              WebkitMaskImage: "url(/dollar1.png)",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          /> */}
        </div>

        {/* MEMBER CARDS */}
        {members.map((m, i) => {
          const angle = (i / members.length) * 2 * Math.PI;
          const radius = 260; // Slightly larger radius

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const img = MEMBER_IMAGES[i % MEMBER_IMAGES.length];

          return (
            <div
              key={i}
              className="absolute transition-all hover:z-10 hover:scale-110 duration-300 group"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg border border-brand-gold/20 group-hover:border-brand-gold group-hover:shadow-brand-gold/20 w-max max-w-[220px]">
                <div className="relative w-10 h-10 shrink-0 border-2 border-white rounded-full shadow-sm overflow-hidden">
                  <Image src={img} alt={m.name} fill className="object-cover" />
                </div>
                <div className="text-sm leading-tight">
                  <p className="font-bold text-gray-900">{m.name}</p>
                  <p className="text-gray-600 text-xs truncate max-w-[120px] font-medium">
                    {m.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
