import styles from './TeamSection.module.css';

const IconLinkedIn = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a12,12,0,0,0-24,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.75A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>;
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M245.66,77.66l-29.9,29.9C208.43,114.85,192,152.12,192,192a8,8,0,0,1-16,0c0-39.88-16.43-77.15-43.76-84.38l-29.9-29.9a8,8,0,0,0-11.32,0l-29.9,29.9C53.57,114.85,32,152.12,32,192a8,8,0,0,1-16,0c0-39.88,16.43-77.15,43.76-84.38l29.9-29.9a8,8,0,0,0,11.32,0l29.9,29.9C138.43,74.85,152,104.12,152,136a8,8,0,0,1-16,0c0-31.88-10.83-58.28-28.24-65.62l-8.08-3.37L128,40,156.28,68.28l-3.37-8.08C145.72,42.83,119.32,32,88,32a8,8,0,0,1,0-16c31.88,0,58.28,10.83,65.62,28.24l3.37,8.08L184,24l-28.28,28.28,8.08,3.37c7.34,3.15,13.2,7,18.4,11.66l29.9-29.9a8,8,0,0,1,11.32,0Z"></path></svg>;

const teamMembers = [
  { name: 'Johnathan Carter', role: 'Founder & CEO', bio: 'With 20+ years in finance, Johnathan provides the vision and strategic direction for Poly-Trade.', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' },
  { name: 'Eleanor Vance', role: 'Chief Investment Officer', bio: 'Eleanor is a certified CFA who architects our data-driven investment strategies and oversees portfolio management.', imageUrl: 'https://images.unsplash.com/photo-1580852300654-03ab8c58fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
  { name: 'Marcus Chen', role: 'Lead AI Engineer', bio: 'Marcus leads the development of our proprietary trading algorithms and the technology powering our platform.', imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80' },
  { name: 'Isabella Rossi', role: 'Head of Client Relations', bio: 'Isabella ensures every Poly-Trade client receives world-class support and guidance on their investment journey.', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' }
];

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Meet Our Experts</h2>
      <p className={styles.subtitle}>
        Our team combines financial acumen with technological innovation to drive your success.
      </p>
      <div className={styles.gridContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardBackground} style={{ backgroundImage: `url(${member.imageUrl})` }}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
                <a href="#" aria-label="Twitter"><IconTwitter /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;