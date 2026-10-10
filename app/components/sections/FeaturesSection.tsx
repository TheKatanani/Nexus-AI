import { ServiceFeature } from "@/types";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SubTitle from "../common/SubTitle";
import Title from "../common/title";

export default async function FeaturesSection() {
  const t = await getTranslations("features");
  const services = (t.raw("services") as ServiceFeature[]) || [];

  return (
    <section className="py-16 bg-white text-gray-800 px-4 md:px-8 lg:px-16"> 
      <Title title={t("title")} />
      <SubTitle fTitle={t("title")} sTitle="" subTitle={t("subtitle")} />

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
          data-aos="fade-up"
            key={idx}
            className="bg-gray-50 rounded-xl shadow-sm p-6 text-center flex flex-col justify-between"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700 mb-6">{service.description}</p>
            <button className="btn-primary">
              {service.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
