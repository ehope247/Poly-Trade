import styles from '../styles/Home.module.css';

// Define the props our component will accept
interface HeroSectionProps {
  onGetStartedClick: () => void;
}

const HeroSection = ({ onGetStartedClick }: HeroSectionProps) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Intelligent Investing, <br />
        Simplified for You
      </h1>
      <p className={styles.subtitle}>
        Join Poly-Trade and leverage our advanced AI to trade and grow your portfolio automatically.
      </p>
      {/* This button now uses the function passed in from the parent page */}
      <button className={styles.ctaButton} onClick={onGetStartedClick}>
        Get Started Now
      </button>
    </section>
  );
};

export default HeroSection;