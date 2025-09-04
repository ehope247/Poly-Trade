import { useState } from 'react';
import styles from './AccountSummary.module.css';
import { useUser } from '../lib/UserContext';
import WithdrawModal from './WithdrawModal';
// We no longer import or manage the DepositModal from here.

// 1. Define the props
interface AccountSummaryProps {
  onDepositClick: () => void;
}

const AccountSummary = ({ onDepositClick }: AccountSummaryProps) => { // 2. Receive the prop
  const { session } = useUser();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const balance = 12500.75;
  const withdrawable = 8250.00;
  const pending = 1500.00;
  const username = session?.user?.user_metadata?.username || 'Investor';

  return (
    <>
      <div className={styles.summaryContainer}>
        <div className={styles.welcomeHeader}>
          <h1 className={styles.welcomeTitle}>Welcome, {username}!</h1>
          <p className={styles.welcomeSubtitle}>Here is your account summary.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.balanceSection}>
            <span className={styles.balanceLabel}>Total Balance</span>
            <span className={styles.balanceAmount}>${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.detailsSection}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Withdrawable Balance</span>
                <span className={styles.metricValue}>${withdrawable.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Pending Funds</span>
                <span className={styles.metricValue} style={{ color: '#ffa500' }}>${pending.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              {/* 3. Call the passed-in function on click */}
              <button className={styles.depositButton} onClick={onDepositClick}>
                Deposit Funds
              </button>
              <button className={styles.withdrawButton} onClick={() => setIsWithdrawModalOpen(true)}>
                Withdraw Funds
              </button>
            </div>
          </div>
        </div>
      </div>

      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} />
      {/* The DepositModal is no longer rendered here */}
    </>
  );
};

export default AccountSummary;