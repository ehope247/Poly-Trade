import styles from './FeaturesList.module.css';

const IconStrategy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="url(#gradient)" viewBox="0 0 256 256">
    <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8e2de2" /><stop offset="100%" stopColor="#4a00e0" /></linearGradient></defs>
    <path d="M229.66,114.34l-48-48a8,8,0,0,0-11.32,11.32L184.69,92H128a92.12,92.12,0,0,0-92,92,8,8,0,0,0,16,0,76.08,76.08,0,0,1,76-76h56.69l-14.35,14.34a8,8,0,0,0,11.32,11.32l48-48A8,8,0,0,0,229.66,114.34ZM128,40a84.09,84.09,0,0,0-84,84,8,8,0,0,0,16,0,68.08,68.08,0,0,1,68-68,8,8,0,0,0,0-16Z"></path>
  </svg>
);
const IconMonitoring = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="url(#gradient)" viewBox="0 0 256 256">
    <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8e2de2" /><stop offset="100%" stopColor="#4a00e0" /></linearGradient></defs>
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,1,1-53.15-47.82,8,8,0,0,1,14.3,6.29A32,32,0,1,0,160,128,8,8,0,0,1,176,128Z"></path>
  </svg>
);
const IconSupport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="url(#gradient)" viewBox="0 0 256 256">
    <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8e2de2" /><stop offset="100%" stopColor="#4a00e0" /></linearGradient></defs>
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80h16a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16Zm28-24a20,20,0,1,1-28.28-14.14,8,8,0,1,1,14.14-5.66A4,4,0,1,0,132,100a8,8,0,0,1,16,0,20,20,0,0,1,0,32,8,8,0,0,1,0-16,4,4,0,0,0,0-8Z"></path>
  </svg>
);

const FeaturesList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.featureRow}>
        <div className={styles.textContainer}>
          <span className={styles.preTitle}>Customized Strategies</span>
          <h3 className={styles.featureTitle}>Bespoke Portfolios, Built For You</h3>
          <p className={styles.featureText}>Your financial goals are unique. We construct a personalized investment strategy that aligns with your vision, risk tolerance, and timeline for success.</p>
        </div>
        <div className={styles.imageContainer}>
          <IconStrategy />
        </div>
      </div>
      <div className={`${styles.featureRow} ${styles.rowReverse}`}>
        <div className={styles.textContainer}>
          <span className={styles.preTitle}>Live Analytics</span>
          <h3 className={styles.featureTitle}>Real-Time Portfolio Intelligence</h3>
          {/* THE FIX IS HERE */}
          <p className={styles.featureText}>Stay in command with our intuitive dashboard. Monitor your assets, analyze performance, and witness your portfolio&apos;s growth in real-time, 24/7.</p>
        </div>
        <div className={styles.imageContainer}>
          <IconMonitoring />
        </div>
      </div>
      <div className={styles.featureRow}>
        <div className={styles.textContainer}>
          <span className={styles.preTitle}>Expert Support</span>
          <h3 className={styles.featureTitle}>Dedicated Support, Around the Clock</h3>
          <p className={styles.featureText}>Questions? Our team of financial experts is on standby. Receive prompt, professional support through live chat, email, or phone, anytime you need it.</p>
        </div>
        <div className={styles.imageContainer}>
          <IconSupport />
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;