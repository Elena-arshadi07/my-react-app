import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ChartSection from "./_components/ChartSection";
import SafeSection from "./_components/SafeSection";
import BuildSkill from "./_components/BuildSkill";
import AcademyGuide from "./_components/AcademyGuide";
import CopyTrading from "./_components/CopyTrading";
import AwardsSection from "./_components/AwardsSection";
import RegulatedBrokerSection from "./_components/RegulatedBrokerSection";
import TradesSection from "./_components/TradesSection";
import PlatformSection from "./_components/PlatformSection";
import DemoSteps from "./_components/DemoSteps";
import FaqSection from "./_components/FaqSection";
import CTABanner from "./_components/CTABanner";
import Footer from "./_components/Footer";

export const metadata = {
  title: "xChief — Demo",
  description: "Practice trading with a free demo account.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0d1210] text-white">
      <Header />
      <HeroSection />
      <ChartSection />
      <SafeSection />
      <BuildSkill />
      <AcademyGuide />
      <CopyTrading />
      <AwardsSection />
      <RegulatedBrokerSection />
      <TradesSection />
      <PlatformSection />
      <DemoSteps />
      <FaqSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
