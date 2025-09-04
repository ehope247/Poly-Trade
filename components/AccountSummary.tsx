import { useState, useEffect } from 'react';
import styles from './AccountSummary.module.css';
import { useUser } from '../lib/UserContext';
import { supabase } from '../lib/supabaseClient';
import WithdrawModal from './WithdrawModal';
import DepositModal from './DepositModal';

const AccountSummary = () => {
  const { session } = useUser();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  // --- State for REAL data ---
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session) return;
      setLoading(true);

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single(); // We expect only one row

      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [session]);

  const username = profile?.username || 'Investor';

  // Function to re-fetch data after a withdrawal is made
  const onWithdrawalSuccess = () => {
    // A simple way to re-fetch is to just reload the page for now
    window.location.reload();
  };

  return (
    <>
      <div className={styles.summaryContainer}>
        <div className={styles.welcomeHeader}>
          <h1 className={styles.welcomeTitle}>Welcome, {username}!</h1>
          <p className={styles.welcomeSubtitle}>Here is your account summary.</p>
        </div>
        <div className={styles.card}>
          {loading ? <p style={{textAlign: 'center', padding: '40px'}}>Loading Account...</p> : (
            <>
              <div className={styles.balanceSection}>
                <span className={styles.balanceLabel}>Total Balance</span>
                <span className={styles.balanceAmount}>${parseFloat(profile?.total_balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.detailsSection}>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Withdrawable Balance</span>
                    <span className={styles.metricValue}>${parseFloat(profile?.withdrawable_balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Pending Funds</span>
                    <span className={styles.metricValue} style={{ color: '#ffa500' }}>${parseFloat(profile?.pending_funds || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.depositButton} onClick={() => setIsDepositModalOpen(true)}>Deposit Funds</button>
                  <button className={styles.withdrawButton} onClick={() => setIsWithdrawModalOpen(true)}>Withdraw Funds</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} onWithdrawalSuccess={onWithdrawalSuccess} />
      <DepositModal isOpen={isDepositModalOpen} onClose={() => setIsDepositModalOpen(false)} />
    </>
  );
};

export default AccountSummary;