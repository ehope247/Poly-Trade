import { useState } from 'react';
import styles from './DepositModal.module.css';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const companyWallets = {
  BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  ETH: '0x1234567890123456789012345678901234567890',
  USDT: 'TABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
};

const DepositModal = ({ isOpen, onClose }: DepositModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('BTC');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setAmount('');
    setNetwork('BTC');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={handleClose} className={styles.closeButton}>×</button>

        {isSubmitted ? (
          <div className={styles.confirmationView}>
            <h2>Request Logged</h2>
            <p>To complete your deposit, please send exactly <strong>${parseFloat(amount).toLocaleString()}</strong> of <strong>{network}</strong> to the address below.</p>
            <div className={styles.walletInfo}>
              <span className={styles.walletAddress}>{companyWallets[network]}</span>
              <button onClick={() => navigator.clipboard.writeText(companyWallets[network])} className={styles.copyButton}>
                Copy Address
              </button>
            </div>
            {/* THE FIX IS HERE */}
            <p className={styles.warning}>Your account will be credited once the transaction is confirmed on the network. This request will be marked as &apos;pending&apos;.</p>
            <button onClick={handleClose} className={styles.doneButton}>Done</button>
          </div>
        ) : (
          <>
            <h2>Request a Deposit</h2>
            <p>Select a wallet and specify the amount you wish to deposit.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="network">Wallet Method</label>
                <select id="network" value={network} onChange={(e) => setNetwork(e.target.value)} className={styles.select}>
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ERC20)</option>
                  <option value="USDT">Tether (USDT)</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="amount">Amount (USD)</label>
                <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="1000.00" step="0.01" />
              </div>
              <button type="submit" className={styles.submitButton}>
                Generate Deposit Address
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DepositModal;