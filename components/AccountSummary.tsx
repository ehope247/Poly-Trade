import { useState, useEffect } from 'react';
import styles from './AccountSummary.module.css';
import { useUser } from '../lib/UserContext';
import { supabase } from '../lib/supabaseClient';
import WithdrawModal from './WithdrawModal';
import DepositModal from './DepositModal';

// --- THIS IS THE FIX ---
// We define the props that this component will accept
interface AccountSummaryProps {
  onDepositClick: () => void;
}

const AccountSummary = ({ onDepositClick }: AccountSummaryProps) => { // And we receive them here
  const { session } = useUser();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  // The Deposit Modal state is now managed by the parent page (dashboard.tsx)

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    if (!session) return;
    setLoading(true);

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (error && error.code === 'PGRST116') {
      // Profile doesn't exist, this can happen for users created before the profiles table
      console.log('No profile found for user, showing defaults.');
      setProfile({ total_balance: 0, withdrawable_balance: 0, pending_funds: 0, username: session.user.user_metadata.username });
    } else if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, [session]);

  const onWithdrawalSuccess = () => {
    // Re-fetch the profile data after a successful withdrawal
    fetchProfile();
    setIsWithdrawModalOpen(false); // Close the modal
  };

  const username = profile?.username || 'Investor';

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
                  <button className={styles.depositButton} onClick={onDepositClick}>Deposit Funds</button>
                  <button className={styles.withdrawButton} onClick={() => setIsWithdrawModalOpen(true)}>Withdraw Funds</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} onWithdrawalSuccess={onWithdrawalSuccess} />
      {/* DepositModal is now controlled by the dashboard page */}
    </>
  );
};

export default AccountSummary;