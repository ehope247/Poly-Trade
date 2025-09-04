import styles from './CTASection.module.css';

// Define the props the component will accept
interface CTASectionProps {
  onCTAClick: () => void;
}

const CTASection = ({ onCTAClick }: CTASectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* === THE VIDEO IS BACK === */}
        {/* This video element was missing in the previous version */}
        <video 
          src="/cta-video.mp4" 
          className={styles.backgroundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
        />

        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Secure Your Financial Future?</h2>
          <p className={styles.subtitle}>
            Take the first step towards automated wealth generation. Our platform is ready for you.
          </p>
          <button className={styles.ctaButton} onClick={onCTAClick}>
            Create Your Account Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;