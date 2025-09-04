import React, { useEffect, useRef } from 'react';
import styles from './VideoFeaturesSection.module.css';

// This is a small, reusable component to handle the auto-playing logic for each video
const AutoPlayVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // This "Intersection Observer" checks when the video is on the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [src]);

  return (
    <video ref={videoRef} src={src} className={styles.video} loop muted playsInline />
  );
};

const VideoFeaturesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.featureRow}>
        <div className={styles.textContainer}>
          <h3>Bespoke Portfolios, Built For You</h3>
          <p>Your financial goals are unique. We construct a personalized investment strategy that aligns with your vision, risk tolerance, and timeline for success.</p>
        </div>
        <div className={styles.videoContainer}>
          <AutoPlayVideo src="/feature-video-1.mp4" />
        </div>
      </div>

      <div className={`${styles.featureRow} ${styles.rowReverse}`}>
        <div className={styles.textContainer}>
          <h3>Real-Time Portfolio Intelligence</h3>
          <p>Stay in command with our intuitive dashboard. Monitor your assets, analyze performance, and witness your portfolio&apos;s growth in real-time, 24/7.</p>
        </div>
        <div className={styles.videoContainer}>
          <AutoPlayVideo src="/feature-video-2.mp4" />
        </div>
      </div>

      <div className={styles.featureRow}>
        <div className={styles.textContainer}>
          <h3>Dedicated Support, Around the Clock</h3>
          <p>Questions? Our team of financial experts is on standby. Receive prompt, professional support through live chat, email, or phone, anytime you need it.</p>
        </div>
        <div className={styles.videoContainer}>
          <AutoPlayVideo src="/feature-video-3.mp4" />
        </div>
      </div>
    </section>
  );
};

export default VideoFeaturesSection;