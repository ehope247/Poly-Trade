import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { supabase } from '../lib/supabaseClient';

// ... (Icon components are unchanged)

const Footer = () => {
  const [settings, setSettings] = useState({ address: '', phone: '', email: '' });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase.from('settings').select('*').single();
      if (data) {
        setSettings(data);
      }
    };
    fetchSettings();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ... (First column is unchanged) ... */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <ul className={styles.linkList}>
            {/* --- THE FIX IS HERE --- */}
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <address className={styles.address}>
            <p>{settings.address || '...'}</p>
            <p>{settings.phone || '...'}</p>
            {settings.email && (
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            )}
          </address>
        </div>
      </div>
      <div className={styles.bottomBar}><p>© {currentYear} Poly-Trade. All Rights Reserved.</p></div>
    </footer>
  );
};
export default Footer;