/** @format */

"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation"; // your custom i18n-aware Link
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { sections } from "@/enum";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const otherLocale = locale === "en" ? "ar" : "en";

  const navLinks = [
    { href: "/", label: t("home"), id: "" },
    {
      href: `#${sections.whyChooseBabylon}`,
      label: t("about"),
      id: sections.whyChooseBabylon,
    },
    {
      href: `#${sections.services}`,
      label: t("services"),
      id: sections.services,
    },
    {
      href: `#${sections.portfolio}`,
      label: t("portfolio"),
      id: sections.portfolio,
    },
    // {
    //   href: `#${sections.testimonials}`,
    //   label: t("testimonials"),
    //   id: sections.testimonials,
    // },
    { href: `#${sections.contact}`, label: t("contact"), id: sections.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollY = window.scrollY + 100;
      for (const { id } of navLinks) {
        if (!id) continue;
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollY &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          return;
        }
      }
      if (window.scrollY < 200) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, id?: string) => {
    if (href === "/" && pathname === "/") return activeSection === "" || !id;
    return activeSection === id;
  };

  const handleLocaleToggle = () => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");
    router.push(`/${otherLocale}${pathWithoutLocale}`);
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur shadow-md text-white" : "bg-transparent text-black"
      }`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className=" font-bold tracking-wide">
          <span className="text-2xl font-black text-brand-primary tracking-tighter">NEXUS AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileOpen(false)}
              className={`relative text-xl font-medium transition-all hover:text-[color:var(--color-brand-primary)] ${
                isActive(href, id) 
                  ? "text-[color:var(--color-brand-primary)]" 
                  : (scrolled ? "text-gray-300" : "text-gray-600")
              }`}
            >
              {label}
              {isActive(href, id) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[color:var(--color-brand-primary)] rounded" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="btn-primary">{t("cta")}</button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={`md:hidden ${scrolled ? "text-white" : "text-black"}`}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden px-6 pb-6 bg-black/90 backdrop-blur text-white">
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileOpen(false)}
                className={`relative text-lg font-medium transition-all hover:text-[color:var(--color-brand-primary)] ${
                  isActive(href, id) 
                    ? "text-[color:var(--color-brand-primary)]" 
                    : "text-gray-300"
                }`}
              >
                {label}
                {isActive(href, id) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[color:var(--color-brand-primary)] rounded" />
                )}
              </Link>
            ))}

            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
              <button
                onClick={handleLocaleToggle}
                className="flex items-center text-sm space-x-1 hover:text-[color:var(--color-brand-primary)]"
              >
                <span>{otherLocale.toUpperCase()}</span>
                <ChevronDown />
              </button>
              <button className="btn-primary">{t("ctaMobile")}</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

