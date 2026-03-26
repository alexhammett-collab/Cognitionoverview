import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EnterpriseShift from "@/components/EnterpriseShift";
import PlatformOverview from "@/components/PlatformOverview";
import RegulatedEnterprises from "@/components/RegulatedEnterprises";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import EnterpriseScenarios from "@/components/EnterpriseScenarios";
import DetailBlocks from "@/components/DetailBlocks";
import ClosingSection from "@/components/ClosingSection";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <EnterpriseShift />
        <SectionDivider />
        <PlatformOverview />
        <SectionDivider />
        <RegulatedEnterprises />
        <SectionDivider />
        <UseCases />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <DetailBlocks />
        <SectionDivider />
        <EnterpriseScenarios />
        <SectionDivider />
        <ClosingSection />
      </main>
    </>
  );
}
