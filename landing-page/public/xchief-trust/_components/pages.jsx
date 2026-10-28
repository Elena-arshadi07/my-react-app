import Shero from './_components/Shero.jsx';
import RegulatedBrokerSection from '../RegulatedBrokerSection.jsx';
import AwardsSection from '../AwardsSection.jsx';
import Execution from './_components/Execution';
import Fee from './_components/Fee.jsx';
import Platform from './_components/Platform.jsx';
import Acoount from './_componenst/Account.jsx';
import Support from './_components/Support.jsx';
import GettingStarted from './_components/GettingStarted.jsx';
import MobileApp from './_components/MobileApp.jsx';
import Faq from './_components/Faq.jsx';
import Final from './_components/Final.jsx';
import Footer from './_components/Footer.jsx';
export default function Home(){
    return(
        <main className="min-h-screen bg-[#101216]">
            <Shero />
            <Execution />
            <Fee />
            <Platform />
            <Acoount />
            <Support />
            <GettingStarted />
            <MobileApp />
            <Faq />
            <Final />
            <Footer />
            <RegulatedBrokerSection />
            <AwardsSection />
        </main>
    )
}