import Header from "./xchief-demo/_components/Header";
import HeroSection from "./xchief-demo/_components/HeroSection";
import ChartSection from "./xchief-demo/_components/ChartSection";
import SafeSection from "./xchief-demo/_components/SafeSection";
import BuildSkill from "./xchief-demo/_components/BuildSkill";
import AcademyGuide from "./xchief-demo/_components/AcademyGuide";
import CopyTrading from "./xchief-demo/_components/CopyTrading";
import AwardsSection from "./xchief-demo/_components/AwardsSection";
import RegulatedBrokerSection from "./xchief-demo/_components/RegulatedBrokerSection";
import TradesSection from "./xchief-demo/_components/TradesSection";
import PlatformSection from "./xchief-demo/_components/PlatformSection";
import DemoSteps from "./xchief-demo/_components/DemoSteps";
import FaqSection from "./xchief-demo/_components/FaqSection";
import CTABanner from "./xchief-demo/_components/CTABanner";
import Footer from "./xchief-demo/_components/Footer";

export default function Home() {
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
