import Shero from "./_components/Shero";
import Execution from "./_components/Execution";
import Fee from "./_components/Fee";
import Platform from "./_components/Platform";
import Account from "./_components/Account";
import Support from "./_components/Support";
import GettingStarted from "./_components/GettingStarted";
import MobileApp from "./_components/MobileApp";
import Faq from "./_components/Faq";
import Final from "./_components/Final";
import Footer from "./_components/Footer";
import RegulatedBrokerSection from "./_components/RegulatedBrokerSection";
import AwardsSection from "./_components/AwardsSection";

export const metadata = {
  title: "xChief — Trust",
  description: "Security, regulation, and support you can rely on.",
};

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-[#101216]">
      <Shero />
      <Execution />
      <Fee />
      <Platform />
      <Account />
      <Support />
      <GettingStarted />
      <MobileApp />
      <Faq />
      <Final />
      <Footer />
      <RegulatedBrokerSection />
      <AwardsSection />
    </main>
  );
}
