import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSummary from '../components/AccountSummary';
import InvestmentPlans from '../components/InvestmentPlans';
import DepositModal from '../components/DepositModal';
import ReferralSection from '../components/ReferralSection'; // 1. Import the new component
import { useUser } from '../lib/UserContext';

const DashboardPage = () => {
  const { session } = useUser();
  const router = useRouter();

  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (!session) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  const handleOpenDepositModal = () => {
    setIsDepositModalOpen(true);
  };

  return (
    <div>
      <Header />
      <main style={{ minHeight: '80vh', paddingTop: '120px', padding: '20px' }}>
        <AccountSummary onDepositClick={handleOpenDepositModal} />
        <InvestmentPlans onChoosePlan={handleOpenDepositModal} />
        <ReferralSection /> {/* 2. Add the component here */}
      </main>

      <DepositModal isOpen={isDepositModalOpen} onClose={() => setIsDepositModalOpen(false)} />

      <Footer />
    </div>
  );
};

export default DashboardPage;