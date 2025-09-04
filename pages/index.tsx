import { useRouter } from 'next/router';
import { useUser } from '../lib/UserContext';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LiveActivity from '../components/LiveActivity';
import CoreBenefitsSection from '../components/CoreBenefitsSection';
import VideoFeaturesSection from '../components/VideoFeaturesSection'; // 1. Import the NEW component
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/TeamSection';
import PortfolioSection from '../components/PortfolioSection';
import PortfolioList from '../components/PortfolioList';
import PortfolioItemBody from '../components/PortfolioItemBody';
import PortfolioCTA from '../components/PortfolioCTA';
import FAQSection from '../components/FAQSection';
import NewsTicker from '../components/NewsTicker';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  const { session } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/?signup=true');
    }
  };

  return (
    <div>
      <Header />
      <main>
        <HeroSection onGetStartedClick={handleGetStarted} />
        <LiveActivity />
        <CoreBenefitsSection />
        <VideoFeaturesSection /> {/* 2. Replace the old FeaturesList here */}
        <AboutSection />
        <TestimonialSection />
        <TeamSection />
        <PortfolioSection />
        <PortfolioList />
        <PortfolioItemBody />
        <PortfolioCTA />
        <FAQSection />
        <NewsTicker />
        <CTASection onCTAClick={handleGetStarted} />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;