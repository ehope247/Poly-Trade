import Link from 'next/link'; // 1. Import the Link component
import styles from './Footer.module.css';

// Social Media Icons... (code is the same, included for completeness)
const IconLinkedIn = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm-96,160H88V112h32Zm-16-80a20,20,0,1,1,20-20A20,20,0,0,1,104,104Zm88,72H160V148c0-22.06-17.94-40-40-40s-40,17.94-40,40v36H48V112h32v16c12.2-16.4,24-24,40-24,32,0,56,25.36,56,64Z"></path></svg>;
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M245.66,77.66l-29.9,29.9C208.43,114.85,192,152.12,192,192a8,8,0,0,1-16,0c0-39.88-16.43-77.15-43.76-84.38l-29.9-29.9a8,8,0,0,0-11.32,0l-29.9,29.9C53.57,114.85,32,152.12,32,192a8,8,0,0,1-16,0c0-39.88,16.43-77.15,43.76-84.38l29.9-29.9a8,8,0,0,0,11.32,0l29.9,29.9C138.43,74.85,152,104.12,152,136a8,8,0,0,1-16,0c0-31.88-10.83-58.28-28.24-65.62l-8.08-3.37L128,40,156.28,68.28l-3.37-8.08C145.72,42.83,119.32,32,88,32a8,8,0,0,1,0-16c31.88,0,58.28,10.83,65.62,28.24l3.37,8.08L184,24l-28.28,28.28,8.08,3.37c7.34,3.15,13.2,7,18.4,11.66l29.9-29.9a8,8,0,0,1,11.32,0Z"></path></svg>;

const contactInfo = { address: "123 Financial Avenue, New York, NY 10005, USA", phone: "+1 (800) 555-0199", email: "support@poly-trade.com" };

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columnMain}>
          <h3 className={styles.brand}>Poly-Trade</h3>
          <p className={styles.tagline}>Intelligent Investing, Simplified.</p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
            <a href="#" aria-label="Twitter"><IconTwitter /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {/* 2. Use the Link component for internal navigation */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">Sign Up</Link></li>
            <li><Link href="#">Login</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <ul className={styles.linkList}>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <address className={styles.address}>
            {contactInfo.address}<br />
            {contactInfo.phone}<br />
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </address>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© {currentYear} Poly-Trade. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;