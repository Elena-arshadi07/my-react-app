import Header from './_components/Header.jsx';
import Hero from '../Hero.jsx';
import Account from '../Account.jsx';
import Execution from './_components/Execution';
import Market from './_components/Market.jsx';
import Costs from './_components/Costs.jsx';
import Platform from './_componenst/Platform.jsx';
import AwardsSection from './AwardsSection.jsx';
import RegulatedBrokerSection from './_components/RegulatedBrokerSection.jsx';
import GettingStarted from './_components/GettingStarted.jsx';
import AppPromo from './_components/AppPromo.jsx';
import Faq from './_components/Faq.jsx';
import CTA from './_components/CTA.jsx';
import Final from './_components/Final.jsx';
import Footer from './_components/Footer.jsx';

export default function Home(){
    return(
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
    );}