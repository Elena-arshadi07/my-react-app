import Header from './_components/Header.jsx';
import Hero from './_components/Hero.jsx';
import Offer from './_components/Offer.jsx';
import Claim from './_components/Claim.jsx';
import MoreReasons from './_components/MoreReasons.jsx';
import RegulatedBrokerSection from '../RegulatedBrokerSection.jsx';
import AwardsSection from '../AwardsSection.jsx';
import Acoount from './_componenst/Account.jsx';
import PlatformSection from './_components/PlatformSection.jsx';
import Faq from './_components/Faq.jsx';
import Final from './_components/Final.jsx';
import Footer from './_components/Footer.jsx';
export default function Home(){
    return(
        <main className="min-h-screen bg-[#101216]">
            <Header />
            < Hero />
            <Offer />
            <Claim />
            <MoreReasons />
            <Acoount />
            <PlatformSection />
            <GettingStarted />
            <MobileApp />
            <Faq />
            <Final />
            <Footer />
            <RegulatedBrokerSection />
            <AwardsSection />
        </main>
    )}