import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ConsentBanner.module.css';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage to see if the user has already consented
    const hasConsented = localStorage.getItem('poly-trade-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Save the consent to localStorage so it doesn't show again
    localStorage.setItem('poly-trade-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Don't render anything if consent has been given
  }

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        By using our site, you acknowledge that you have read and understand our 
        <Link href="/terms-of-service"> Terms of Service</Link> and 
        <Link href="/privacy-policy"> Privacy Policy</Link>.
      </p>
      <button onClick={handleAccept} className={styles.button}>
        Accept
      </button>
    </div>
  );
};

export default ConsentBanner;