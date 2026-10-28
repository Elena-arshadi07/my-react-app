import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Offer from "./_components/Offer";
import Claim from "./_components/Claim";
import MoreReasons from "./_components/MoreReasons";
import PlatformSection from "./_components/PlatformSection";
import FaqSection from "./_components/FaqSection";
import Final from "./_components/Final";
import Footer from "./_components/Footer";
import RegulatedBrokerSection from "./_components/RegulatedBrokerSection";
import AwardsSection from "./_components/AwardsSection";

export const metadata = {
  title: "xChief — Welcome",
  description: "Welcome offers and getting started with xChief.",
};

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#101216]">
      <Header />
      <Hero />
      <Offer />
      <Claim />
      <MoreReasons />
      <PlatformSection />
      <FaqSection />
      <Final />
      <Footer />
      <RegulatedBrokerSection />
      <AwardsSection />
    </main>
  );
}
