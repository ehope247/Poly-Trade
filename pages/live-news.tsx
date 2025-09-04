import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveNewsContent from '../components/LiveNewsContent';

// We need a new, simple CSS file for this page's background
import styles from '../styles/LiveNewsPage.module.css';

const LiveNewsPage = () => {
  return (
    <div>
      {/* Our reliable, local video as a background */}
      <video src="/cta-video.mp4" className={styles.backgroundVideo} autoPlay loop muted playsInline />

      <Header />
      <main>
        <LiveNewsContent />
      </main>
      <Footer />
    </div>
  );
};

export default LiveNewsPage;