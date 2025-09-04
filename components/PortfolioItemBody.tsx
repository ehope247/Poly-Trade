import styles from './PortfolioItemBody.module.css';

const PortfolioItemBody = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.preTitle}>Case Study</span>
        <h2 className={styles.title}>A Deeper Look: QuantumLeap AI</h2>
      </div>

      <div className={styles.caseStudyContainer}>
        <div className={styles.imageContainer}>
          <img 
            src="/case-study-image.jpg" 
            alt="Abstract AI and data visualization" 
            className={styles.image}
          />
        </div>

        <div className={styles.detailsContainer}>
          <h3 className={styles.narrativeTitle}>The Opportunity</h3>
          <p className={styles.description}>
            Poly-Trade identified QuantumLeap AI as a high-potential startup poised to disrupt the data analytics industry. Our strategic early-stage investment provided the necessary capital for them to scale their operations, refine their machine learning models, and capture significant market share.
          </p>
          <h3 className={styles.narrativeTitle}>The Outcome</h3>
          <p className={styles.description}>
            Our partnership culminated in a successful acquisition by a major tech conglomerate. This resulted in a substantial return for our initial investors and solidified our reputation for identifying and nurturing innovative tech ventures.
          </p>

          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>Project Type</span>
              <span className={styles.metricValue}>Venture Capital</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>Initial Investment</span>
              <span className={styles.metricValue}>$2.5M</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>Investment Period</span>
              <span className={styles.metricValue}>36 Months</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>Final Outcome</span>
              <span className={styles.metricValue} style={{color: '#00ff9d'}}>450% ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItemBody;