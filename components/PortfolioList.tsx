import styles from './PortfolioList.module.css';

// More detailed fake data for our portfolio list
const portfolioListData = [
  {
    name: 'QuantumLeap AI',
    category: 'Technology',
    description: 'Early-stage investment in a disruptive artificial intelligence startup specializing in predictive analytics.',
    status: 'Completed',
  },
  {
    name: 'EcoSynth Materials',
    category: 'Green Energy',
    description: 'Funding for a company developing biodegradable plastics from renewable sources.',
    status: 'Completed',
  },
  {
    name: 'Helios Real Estate Fund',
    category: 'Real Estate',
    description: 'A diversified portfolio of commercial properties in high-growth urban centers.',
    status: 'Ongoing',
  },
  {
    name: 'BioGen Therapeutics',
    category: 'Biotechnology',
    description: 'Venture capital for a clinical-stage company focused on gene-editing therapies.',
    status: 'Ongoing',
  },
  {
    name: 'Nexus Robotics',
    category: 'Automation',
    description: 'Investment in a firm creating advanced robotics for logistics and warehouse automation.',
    status: 'Completed',
  },
];

const PortfolioList = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Comprehensive Portfolio Overview</h2>
      <p className={styles.subtitle}>
        A detailed look at the diverse range of projects we manage, driving innovation across multiple sectors.
      </p>
      <div className={styles.tableContainer}>
        <table className={styles.portfolioTable}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {portfolioListData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>
                  <span className={`${styles.status} ${item.status === 'Completed' ? styles.statusCompleted : styles.statusOngoing}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PortfolioList;