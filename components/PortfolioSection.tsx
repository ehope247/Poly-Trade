import styles from './PortfolioSection.module.css';

const portfolioItems = [
  { name: 'QuantumLeap AI', category: 'Technology Startup', roi: '450%', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
  { name: 'EcoSynth Materials', category: 'Renewable Energy', roi: '320%', imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
  { name: 'Helios Real Estate', category: 'Commercial Property', roi: '280%', imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80' }
];

const PortfolioSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Proven Portfolio</h2>
      {/* THE FIX IS HERE */}
      <p className={styles.subtitle}>
        We are proud of the value we&apos;ve generated. Here are a few highlights from our successful investment projects.
      </p>
      <div className={styles.gridContainer}>
        {portfolioItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.imageUrl} alt={item.name} className={styles.cardImage} />
            <div className={styles.cardOverlay}>
              <div>
                <span className={styles.cardCategory}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.name}</h3>
              </div>
              <div className={styles.cardROI}>
                <span>{item.roi} ROI</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;