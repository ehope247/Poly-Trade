import styles from './PortfolioCTA.module.css';

const PortfolioCTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Interested in Our Next Venture?</h3>
          <p className={styles.subtitle}>
            Opportunities like these are carefully selected. Contact our advisors to learn about upcoming projects.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton}>
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;