import styles from './InvestmentPlans.module.css';

// 1. Define the props our component will accept
interface InvestmentPlansProps {
  onChoosePlan: () => void; // It accepts a function that takes no arguments and returns nothing
}

const plansData = [
  { name: 'Starter Plan', roi: '15-25%', duration: '30 Days', minDeposit: 500, maxDeposit: 4999, popular: false },
  { name: 'Pro Plan', roi: '30-45%', duration: '60 Days', minDeposit: 5000, maxDeposit: 50000, popular: true },
];

const InvestmentPlans = ({ onChoosePlan }: InvestmentPlansProps) => { // 2. Receive the prop
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Available Investment Plans</h2>
      <div className={styles.cardsContainer}>
        {plansData.map((plan, index) => (
          <div key={index} className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}>
            {plan.popular && <div className={styles.popularTag}>Recommended</div>}
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planRoi}>{plan.roi}</p>
              <span className={styles.roiLabel}>Expected ROI</span>
            </div>
            <ul className={styles.featureList}>
              <li><span>Duration</span><span>{plan.duration}</span></li>
              <li><span>Min Deposit</span><span>${plan.minDeposit.toLocaleString()}</span></li>
              <li><span>Max Deposit</span><span>${plan.maxDeposit.toLocaleString()}</span></li>
            </ul>
            {/* 3. Call the passed-in function when the button is clicked */}
            <button className={styles.chooseButton} onClick={onChoosePlan}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPlans;