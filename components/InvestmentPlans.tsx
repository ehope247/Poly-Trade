import { useState, useEffect } from 'react';
import styles from './InvestmentPlans.module.css';
import { supabase } from '../lib/supabaseClient'; // Import supabase

interface InvestmentPlansProps {
  onChoosePlan: () => void;
}

const InvestmentPlans = ({ onChoosePlan }: InvestmentPlansProps) => {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      // Fetch plans from the new 'plans' table
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('min_deposit', { ascending: true });

      if (error) console.error('Error fetching plans', error);
      else setPlans(data);
    };
    fetchPlans();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Available Investment Plans</h2>
      <div className={styles.cardsContainer}>
        {plans.map((plan) => (
          <div key={plan.id} className={`${styles.card} ${plan.is_popular ? styles.popularCard : ''}`}>
            {plan.is_popular && <div className={styles.popularTag}>Recommended</div>}
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planRoi}>{plan.roi}</p>
              <span className={styles.roiLabel}>Expected ROI</span>
            </div>
            <ul className={styles.featureList}>
              <li><span>Duration</span><span>{plan.duration}</span></li>
              <li><span>Min Deposit</span><span>${plan.min_deposit.toLocaleString()}</span></li>
              <li><span>Max Deposit</span><span>${plan.max_deposit.toLocaleString()}</span></li>
            </ul>
            <button className={styles.chooseButton} onClick={onChoosePlan}>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPlans;