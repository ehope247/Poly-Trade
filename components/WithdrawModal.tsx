import { useState } from 'react';
import styles from './WithdrawModal.module.css';
import { supabase } from '../lib/supabaseClient'; // Make sure you have this client
import { useUser } from '../lib/UserContext';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WithdrawModal = ({ isOpen, onClose }: WithdrawModalProps) => {
  const { session } = useUser();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('BTC');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!session) return;

    // --- NEW LOGIC: Save to Supabase ---
    const { error } = await supabase
      .from('withdrawals')
      .insert({ 
        user_id: session.user.id,
        amount: parseFloat(amount),
        network: network,
        wallet_address: address,
        // status is 'pending' by default
      });

    if (error) {
      setError('An error occurred. Please try again.');
      console.error('Withdrawal Error:', error);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
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

        {isSubmitted ? (
          <div className={styles.successView}>
            <div className={styles.successIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#00ff9d" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
            </div>
            <h2>Request Submitted</h2>
            <p>Your withdrawal request for <strong>${parseFloat(amount).toLocaleString()}</strong> is now pending. It will be processed within 24 hours.</p>
            <button onClick={handleClose} className={styles.doneButton}>Done</button>
          </div>
        ) : (
          <>
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
              <button type="submit" className={styles.submitButton}>
                Confirm Withdrawal
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default WithdrawModal;