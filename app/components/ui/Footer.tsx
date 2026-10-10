"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black text-xl text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start p-10">
        {/* Left Section */}
        <div>
          <div className="mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[color:var(--color-brand-primary)] to-gray-950 rounded" />
          </div>
          <p className="font-bold mb-4">{t("description")}</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-bold mb-4">{t("quickLinks.title")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                {t("quickLinks.home")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("quickLinks.services")}
              </a>
            </li>
            {/* <li><a href="#" className="hover:underline">{t("quickLinks.partners")}</a></li>
            <li><a href="#" className="hover:underline">{t("quickLinks.testimonials")}</a></li> */}
            <li>
              <a href="#" className="hover:underline">
                {t("quickLinks.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <div>
            <h3 className="font-bold mb-4">{t("socialTitle")}</h3>
            <div className="flex gap-3 mb-4 flex-wrap">
              {/* <Image src="/facebook.svg" alt="Facebook" width={42} height={42} className="h-auto w-auto" />
            <Image src="/whatsapp.svg" alt="WhatsApp" width={42} height={42}  className="h-auto w-auto"/>
            <Image src="/twitter.svg" alt="Twitter" width={42} height={42}  className="h-auto w-auto"/>
            <Image src="/linkedin.svg" alt="LinkedIn" width={42} height={42}  className="h-auto w-auto"/> */}
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={42}
                height={42}
                className="h-auto w-auto"
              />
              <Image
                src="/tiktok.svg"
                alt="TikTok"
                width={42}
                height={42}
                className="h-auto w-auto"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail /> {t("contact.email")}
            </p>
            {/* <p className="flex items-center gap-2">
              <Phone/> {t("contact.phone")}
            </p> */}
            <p className="flex items-center gap-2">
              <MapPin /> {t("contact.location")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[-50] flex justify-between items-center flex-wrap">
        <Image
          width={200}
          height={200}
          src="/redCar.png"
          alt="Red Car"
          className="w-52"
        />
        <Image
          width={200}
          height={200}
          src="/whiteCar.png"
          alt="White Car"
          className="w-72"
        />
      </div>
    </footer>
  );
}
