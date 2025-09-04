import styles from './FeatureSection.module.css';

// SVG Icons (unchanged, but included for completeness)
const IconAI = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#8e2de2" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM104,96a24,24,0,1,1-24,24A24,24,0,0,1,104,96Zm72,48a24,24,0,1,1,24-24A24,24,0,0,1,176,144Zm-16-8a16,16,0,1,0-16-16A16,16,0,0,0,160,136Zm-72,8a16,16,0,1,0,16-16A16,16,0,0,0,88,144Z"></path></svg>;
const IconPlans = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#8e2de2" viewBox="0 0 256 256"><path d="M224,88a8,8,0,0,1-8,8H128V32a8,8,0,0,1,16,0V72h72A8,8,0,0,1,224,88Zm-12,88a80,80,0,0,0-48.42-73.15,8,8,0,0,0-11.45,6.32A64.12,64.12,0,0,1,160,128a63.3,63.3,0,0,1-11.19-36.42,8,8,0,0,0-15.62,0A80,80,0,1,0,212,176Z"></path></svg>;
const IconSuccess = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#8e2de2" viewBox="0 0 256 256"><path d="M240,96a8,8,0,0,1-8,8H144V224a8,8,0,0,1-16,0V104H40a8,8,0,0,1-7.37-11.6l48-88a8,8,0,0,1,14.74,0l48,88A8,8,0,0,1,136,104h80A8,8,0,0,1,240,96Z"></path></svg>;

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>The Future of Intelligent Investing</h2>
        <p className={styles.subtitle}>
          We merge state-of-the-art technology with financial expertise to unlock your portfolio's true potential.
        </p>
      </div>
      <div className={styles.cardsContainer}>

        <div className={styles.card}>
          <div className={styles.iconWrapper}><IconAI /></div>
          <h3 className={styles.cardTitle}>AI-Powered Precision</h3>
          <p className={styles.cardText}>
            Go beyond human analysis. Our proprietary AI scans thousands of data points to execute trades with unparalleled speed and accuracy.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}><IconPlans /></div>
          <h3 className={styles.cardTitle}>Strategies for Growth</h3>
          <p className={styles.cardText}>
            From conservative to aggressive, our diverse investment plans are engineered to align perfectly with your financial ambitions and risk profile.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}><IconSuccess /></div>
          <h3 className={styles.cardTitle}>Proven Performance</h3>
          <p className={styles.cardText}>
            Trust in a track record of success. We provide transparent reporting and a history of delivering consistent, market-beating returns for our clients.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;