import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import styles from './SignUpModal.module.css';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // --- NEW LOGIC TO READ THE REFERRAL CODE ---
  const [referralCode, setReferralCode] = useState<string | null>(null);

  useEffect(() => {
    // When the modal opens, check the URL for a referral code
    if (router.isReady) {
      const ref = router.query.ref as string;
      if (ref) {
        setReferralCode(ref);
      }
    }
  }, [router.isReady, router.query]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
          // If a referral code exists, save it to the user's metadata
          referred_by: referralCode,
        }
      }
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>×</button>
        <h2>Create Your Account</h2>
        <p>Join Poly-Trade and start your investment journey.</p>
        <form onSubmit={handleSignUp}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Your unique username" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
          </div>
          {error && <p className={styles.errorText}>{error}</p>}
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;