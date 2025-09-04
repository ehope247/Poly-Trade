import styles from './NewsTicker.module.css';

// Local, reliable news headlines. This will be updatable from the admin panel later.
const newsHeadlines = [
  { source: 'Bloomberg', text: 'Global markets react to new inflation data.' },
  { source: 'Reuters', text: 'Tech sector sees significant gains on AI advancements.' },
  { source: 'CNBC', text: 'Federal Reserve holds interest rates steady.' },
  { source: 'MarketWatch', text: 'Energy commodities surge amid supply concerns.' },
  { source: 'Yahoo Finance', text: 'New IPO announced for leading biotech firm.' },
];

const NewsTicker = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Live Market Headlines</h2>
      <div className={styles.tickerWrapper}>
        <ul className={styles.tickerList}>
          {/* We render the list twice for a seamless loop */}
          {newsHeadlines.map((item, index) => (
            <li key={`first-${index}`} className={styles.tickerItem}>
              <span className={styles.source}>{item.source}</span>
              <span className={styles.text}>{item.text}</span>
            </li>
          ))}
          {newsHeadlines.map((item, index) => (
            <li key={`second-${index}`} className={styles.tickerItem} aria-hidden="true">
              <span className={styles.source}>{item.source}</span>
              <span className={styles.text}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsTicker;