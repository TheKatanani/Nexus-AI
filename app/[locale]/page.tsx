import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { SectionLink } from "../components/ui/SectionLink";

// Dynamically import sections
const Hero = dynamic(() => import("../components/sections/hero"));
const BrandLogos = dynamic(() => import("../components/sections/BrandLogos"));
const WhyChooseBabylon = dynamic(
  () => import("../components/sections/WhyChooseBabylon"),
);
const Journey = dynamic(() => import("../components/sections/Journey"));
const SMARTSystem = dynamic(() => import("../components/sections/SMARTSystem"));
const Programs = dynamic(() => import("../components/sections/Programs"));
const Portfolio = dynamic(() => import("../components/sections/Portfolio"));
const ProfessionalStandards = dynamic(
  () => import("../components/sections/ProfessionalStandards"),
);
const FAQSection = dynamic(() => import("../components/sections/FAQ"));
const CallToAction = dynamic(
  () => import("../components/sections/CallToAction"),
);
const ContactSection = dynamic(() => import("../components/sections/Contact"));

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Animated Brand Logos */}
      <BrandLogos />

      {/* Certifications Section */}
      <WhyChooseBabylon />

      {/* Section Link 1 */}
      <SectionLinkWrapper translationKey="SectionLink1" />

      {/* Journey Section - The Opportunity */}
      <Journey />

      {/* Section Link 2 */}
      <SectionLinkWrapper translationKey="SectionLink2" />

      {/* SMART System Section */}
      <SMARTSystem />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Programs Section - 4 Diplomas */}
      <Programs />

      {/* Section Link 3 */}
      <SectionLinkWrapper translationKey="SectionLink3" />

      {/* Professional Standards */}
      <ProfessionalStandards />

      {/* Section Link 4 */}
      <SectionLinkWrapper translationKey="SectionLink4" />

      {/* FAQs */}
      <FAQSection />

      {/* Call To Action */}
      <CallToAction />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}

// Helper component to use translations with SectionLink
function SectionLinkWrapper({ translationKey }: { translationKey: string }) {
  const t = useTranslations(translationKey);
  return <SectionLink>{t("text")}</SectionLink>;
}
