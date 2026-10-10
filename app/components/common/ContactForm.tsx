"use client";

import { useTranslations, useLocale } from "next-intl";
import CustomSelect from "./CustomSelect";
import { useState } from "react";

const ContactForm = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [serviceType, setServiceType] = useState("");

  const serviceOptions = [
    { value: "photography", label: t("serviceOptionPhotography") },
    { value: "content-marketing", label: t("serviceOptionContentMarketing") },
    { value: "growth", label: t("serviceOptionGrowth") },
  ];

  return (
    <form
      className={`space-y-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${
        isRtl ? "text-right" : "text-left"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("nameLabel")}
        </label>
        <input
          type="text"
          placeholder={t("namePlaceholder")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("emailLabel")}
        </label>
        <input
          type="email"
          placeholder="example@mail.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-left"
          dir="ltr"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("phoneLabel")}
        </label>
        <input
          type="tel"
          placeholder="+971 ..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-left"
          dir="ltr"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("serviceTypeLabel")}
        </label>
        <CustomSelect
          options={serviceOptions}
          value={serviceType}
          onChange={setServiceType}
          placeholder={t("serviceTypePlaceholder")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("messageLabel")}
        </label>
        <textarea
          rows={4}
          placeholder="..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full btn-primary py-4 text-lg font-bold"
      >
        {t("sendButton")}
      </button>
    </form>
  );
};

export default ContactForm;
