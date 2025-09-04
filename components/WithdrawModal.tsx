import { useState } from 'react';
import styles from './WithdrawModal.module.css';
import { supabase } from '../lib/supabaseClient';

// Update props to include the success callback
interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWithdrawalSuccess: () => void;
}

const WithdrawModal = ({ isOpen, onClose, onWithdrawalSuccess }: WithdrawModalProps) => {
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('BTC');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // --- NEW LOGIC: Call the secure Supabase function ---
    const { error } = await supabase.rpc('request_withdrawal', {
      amount_requested: parseFloat(amount),
      network_selected: network,
      address_provided: address,
    });

    if (error) {
      setError(error.message || 'An error occurred. Please try again.');
      console.error('Withdrawal RPC Error:', error);
    } else {
      // Don't show the success screen, just close and let the parent handle the update
      onWithdrawalSuccess();
    }
    setLoading(false);
  };

  const handleClose = () => {
    setAmount('');
    setNetwork('BTC');
    setAddress('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={handleClose} className={styles.closeButton}>×</button>
        <h2>Withdraw Funds</h2>
        <p>Select your preferred network and enter the destination address.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="amount">Amount (USD)</label>
            <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="1000.00" step="0.01" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="network">Withdrawal Method</label>
            <select id="network" value={network} onChange={(e) => setNetwork(e.target.value)} className={styles.select}>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ERC20)</option>
              <option value="USDT">Tether (USDT)</option>
              <option value="BNB">Binance Coin (BNB)</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="address">Destination Address</label>
            <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Enter your wallet address" />
          </div>
          {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Withdrawal'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawModal;