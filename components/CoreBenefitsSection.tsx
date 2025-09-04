import styles from './CoreBenefitsSection.module.css';

const CoreBenefitsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Engineered for Your Success</h2>
        <p className={styles.subtitle}>
          We combine powerful technology with personalized human expertise to deliver exceptional results.
        </p>
      </div>

      <div className={styles.benefitRow}>
        <div className={styles.imageContainer}>
          <img src="/benefit-1.jpg" alt="Data-Driven Insights" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h3>Data-Driven Insights</h3>
          <p>Our platform leverages real-time data and proprietary algorithms to identify market opportunities with precision, ensuring every decision is backed by intelligence.</p>
        </div>
      </div>

      <div className={`${styles.benefitRow} ${styles.rowReverse}`}>
        <div className={styles.imageContainer}>
          <img src="/benefit-2.jpg" alt="Expert Human Guidance" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h3>Expert Human Guidance</h3>
          <p>Technology is powerful, but a personal touch is essential. Our team of seasoned financial advisors is dedicated to understanding your goals and crafting a strategy that&apos;s perfect for you.</p>
        </div>
      </div>

      <div className={styles.benefitRow}>
        <div className={styles.imageContainer}>
          <img src="/benefit-3.jpg" alt="Collaborative Strategy" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h3>A Partnership in Growth</h3>
          <p>We believe in a collaborative approach. By working closely with you, we ensure your portfolio is not only growing, but also continuously adapting to your evolving financial journey.</p>
        </div>
      </div>
    </section>
  );
};

export default CoreBenefitsSection;