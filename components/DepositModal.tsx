import { useState } from 'react';
import styles from './DepositModal.module.css';
import { supabase } from '../lib/supabaseClient';
import { useUser } from '../lib/UserContext';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DepositModal = ({ isOpen, onClose }: DepositModalProps) => {
  const { session } = useUser();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('BTC');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session || !amount) return;

    setLoading(true);
    setError('');

    const { error } = await supabase
      .from('deposits')
      .insert({
        user_id: session.user.id,
        amount: parseFloat(amount),
        network: network,
      });

    setLoading(false);

    if (error) {
      setError('An error occurred. Please check your connection and try again.');
      console.error('Deposit Submission Error:', error);
    } else {
      setIsSubmitted(true); // Show the success screen
    }
  };

  const handleClose = () => {
    // Reset all states when the modal is closed
    setIsSubmitted(false);
    setAmount('');
    setNetwork('BTC');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={handleClose} className={styles.closeButton}>×</button>

        {isSubmitted ? (
          <div className={styles.confirmationView}>
            <h2>Request Sent</h2>
            <p>Your deposit request for <strong>${parseFloat(amount).toLocaleString()}</strong> has been sent to the admin for approval. Your balance will be updated upon confirmation.</p>
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
              {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Sending...' : 'Send Deposit Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DepositModal;