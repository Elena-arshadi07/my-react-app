import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Account from "./_components/Account";
import Execution from "./_components/Execution";
import Market from "./_components/Market";
import Costs from "./_components/Costs";
import Platform from "./_components/Platform";
import AwardsSection from "./_components/AwardsSection";
import RegulatedBrokerSection from "./_components/RegulatedBrokerSection";
import GettingStarted from "./_components/GettingStarted";
import AppPromo from "./_components/AppPromo";
import Faq from "./_components/Faq";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export const metadata = {
  title: "xChief — Spreads",
  description: "Competitive spreads and transparent trading costs.",
};

export default function SpreadsPage() {
  return (
    <main className="min-h-screen bg-[#101216]">
      <Header />
      <Hero />
      <Account />
      <Execution />
      <Market />
      <Costs />
      <Platform />
      <AwardsSection />
      <RegulatedBrokerSection />
      <GettingStarted />
      <AppPromo />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
