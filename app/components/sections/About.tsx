import Title from "../common/title";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t =await getTranslations("About");

  return (
    <section className="container m-auto pt-20 pb-10 px-4 md:px-12 lg:px-24 bg-white text-center">
      <div className="mx-auto max-w-5xl">
        <Title title={t("title")} />
        <p className="text-gray-700 text-lg leading-8 mb-8 mt-5">
          {t("description")}
        </p>
        {/* <button className="btn-primary">{t("cta")}</button> */}
      </div>
    </section>
  );
}
