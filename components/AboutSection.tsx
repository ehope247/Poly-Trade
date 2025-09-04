import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" 
            alt="Professional team collaborating in a modern office" 
            className={styles.image} 
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Our Commitment to Your Success</h2>

          <div className={styles.missionItem}>
            <h3 className={styles.subtitle}>Our Mission</h3>
            <p>To empower individuals with intelligent, accessible, and automated investment tools, turning complex market data into tangible financial growth.</p>
          </div>

          <div className={styles.missionItem}>
            <h3 className={styles.subtitle}>Our Vision</h3>
            <p>To be the leading platform in AI-driven personal finance, creating a future where wealth generation is transparent, secure, and available to everyone.</p>
          </div>

          <div className={styles.missionItem}>
            <h3 className={styles.subtitle}>Our Values</h3>
            <p>We operate with unwavering integrity, prioritize client success through innovation, and maintain complete transparency in all our operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;