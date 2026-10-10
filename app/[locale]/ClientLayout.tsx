"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "../components/ui/Nav";
import Footer from "../components/ui/Footer";
export default function ClientLayout({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
