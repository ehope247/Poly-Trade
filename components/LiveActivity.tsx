import styles from './LiveActivity.module.css';

const fakeActivities = [
  { name: 'Michael L.', country: 'USA', amount: 500, plan: 'Starter Plan' },
  { name: 'Sophie B.', country: 'France', amount: 1200, plan: 'Pro Plan' },
  { name: 'Kenji T.', country: 'Japan', amount: 850, plan: 'Starter Plan' },
  { name: 'Maria G.', country: 'Spain', amount: 2500, plan: 'Premium Plan' },
  { name: 'David C.', country: 'Canada', amount: 750, plan: 'Pro Plan' },
  { name: 'Fatima A.', country: 'UAE', amount: 1500, plan: 'Pro Plan' },
  { name: 'Liam S.', country: 'Australia', amount: 650, plan: 'Starter Plan' },
];

const LiveActivity = () => {
  return (
    <div className={styles.activityWrapper}>
      <h2 className={styles.activityTitle}>Live Activity Feed</h2>
      <div className={styles.activityContainer}>
        <ul className={styles.activityList}>
          {/* === We render the list of items the FIRST time === */}
          {fakeActivities.map((activity, index) => (
            <li key={`first-${index}`} className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00ff9d" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
              </div>
              <div className={styles.activityText}>
                <strong>{activity.name}</strong> from {activity.country} just invested <strong>${activity.amount}</strong>.
              </div>
            </li>
          ))}
          {/* === We render the list of items a SECOND time for a seamless loop === */}
          {fakeActivities.map((activity, index) => (
            <li key={`second-${index}`} className={styles.activityItem} aria-hidden="true">
              <div className={styles.activityIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00ff9d" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
              </div>
              <div className={styles.activityText}>
                <strong>{activity.name}</strong> from {activity.country} just invested <strong>${activity.amount}</strong>.
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveActivity;