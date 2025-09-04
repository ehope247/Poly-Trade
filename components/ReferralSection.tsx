import { useState } from 'react';
import styles from './ReferralSection.module.css';
import { useUser } from '../lib/UserContext';

const ReferralSection = () => {
  const { session } = useUser();
  const [copySuccess, setCopySuccess] = useState(''); // To show a "Copied!" message

  // Construct the referral link using the user's username.
  // We use a placeholder for the website URL that would be replaced with your real domain.
  const username = session?.user?.user_metadata?.username;
  const referralLink = `https://poly-trade.com/signup?ref=${username}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
    }, () => {
      setCopySuccess('Failed');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  // Don't render the component if we don't have a username yet
  if (!username) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><path d="M240,88a16,16,0,0,1-16,16H135.61l58.3,58.3a16,16,0,0,1-22.62,22.62L112,125.61V216a16,16,0,0,1-32,0V125.61L20.69,184.91a16,16,0,0,1-22.62-22.62l58.3-58.3H16A16,16,0,0,1,0,88V40A16,16,0,0,1,16,24H88a16,16,0,0,1,16,16V80h48V40a16,16,0,0,1,16-16h72a16,16,0,0,1,16,16Z"></path></svg>
      </div>
      <h2 className={styles.title}>Invite Friends, Earn Rewards</h2>
      <p className={styles.subtitle}>
        Share your unique referral link with friends. When they sign up, you'll be credited for the introduction.
      </p>
      <div className={styles.linkContainer}>
        <input type="text" value={referralLink} readOnly className={styles.linkInput} />
        <button onClick={handleCopy} className={styles.copyButton}>
          {copySuccess || 'Copy'}
        </button>
      </div>
    </section>
  );
};

export default ReferralSection;