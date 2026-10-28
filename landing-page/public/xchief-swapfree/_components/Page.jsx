"use client";
import Header from './_components/Header';
import Hero from './_components/Hero';
import Sharia from './_components/Sharia';
import Account from './_components/Account';
import Rules from './_components/Rules';
import AwardsSection from './_components/AwardsSection';
import GettingStarted from './_components/GettingStarted';
import RegulatedBrokerSection from './_components/RegulatedBrokerSection';
import PlatformSection from './_components/PlatformSection';
import FaqSection from './_components/FaqSection';
import Final from './_components/CTABanner';
import Footer from './_components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1210] text-white">
      <Header />
      <Hero />
      <Sharia />
      <Account />
      <Rules />
      <AwardsSection />
      <RegulatedBrokerSection />
      <GettingStarted />
      <PlatformSection />
      <FaqSection />
      <Final />
      <Footer />
    
 
    
    </main>
  );
}