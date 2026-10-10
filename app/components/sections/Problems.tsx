import { ReasonIcon } from "@/app/Icons";
import Link from "next/link";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import { sections } from "@/enum";
import { getTranslations } from "next-intl/server";

export default async function Problems() {
  const t = await getTranslations("Problems");
  const t2 = await getTranslations("About");
  const items = t.raw("items") as { question: string; solution: string }[];

  return (
    <section
      dir="ltr"
      className="bg-white container m-auto py-10 px-4 md:px-12 lg:px-24"
      id={sections.whyChooseBabylon}
    >
      <Title title={t("title")} />
      {/* <SubTitle fTitle={t("subTitle.fTitle")} sTitle="" subTitle="" /> */}
      {/* <SubTitle fTitle="" sTitle="" subTitle={t2("description")} /> */}

      <p
        data-aos="fade-up"
        className="text-gray-600 text-lg text-center my-8 max-w-4xl mx-auto"
      >
        {t2("description")}
      </p>
      <div data-aos="fade-up" className="relative">
        <div
          className="z-10 bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/Group-2.png')",
          }}
        >
          <div className="w-full lg:w-[50%] p-6 md:p-20">
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0">
                    <ReasonIcon className="w-full h-full" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base whitespace-pre-line">
                    <strong>{`${idx + 1}. "${item.question}"`}</strong>
                    <br />→ {item.solution}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href={`#${sections.contact}`}
              className="btn-primary mt-8 inline-block"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
