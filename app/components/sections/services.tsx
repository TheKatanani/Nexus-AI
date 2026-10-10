import { useTranslations } from "next-intl";
import ServicesCard from "../ui/ServicesCard";
import Title from "../common/title";
import SubTitle from "../common/SubTitle";
import { sections } from "@/enum";
import { Package } from "@/types";

const colors = ["#dc0205", "#261f0c", "#C9A227"];

export default function Services() {
  const t = useTranslations("services");

  const servicePackages = (t.raw("packages") as Package[]) || [];

  return (
    <section
      id={sections.services}
      className="container m-auto py-10 px-4 md:px-12 lg:px-24 bg-white text-gray-800 min-h-screen"
    >
      <div className="container mx-auto space-y-10">
        <Title title={t("sectionTitle")} />
        <SubTitle fTitle={t("fTitle")} sTitle="" subTitle={t("subTitle")} />
        <div className="flex flex-wrap justify-center items-stretch gap-2 pt-10">
          {servicePackages.map((service, index) =>
            service ? (
              <ServicesCard
                key={index}
                {...service}
                showMore={t("showMore")}
                showLess={t("showLess")}
                color={colors[index % colors.length]}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
