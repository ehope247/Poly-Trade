import styles from './ContactDetails.module.css';

const contactInfo = {
  address: "123 Financial Avenue, New York, NY 10005, USA",
  phone: "+1 (800) 555-0199",
  email: "support@poly-trade.com"
};

const IconLocation = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z"></path></svg>;
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M222.34,158.87A50.15,50.15,0,0,1,189.8,172.4a84.4,84.4,0,0,1-33.53-10.34,136.12,136.12,0,0,1-57-57A84.4,84.4,0,0,1,88.92,71.52a50.15,50.15,0,0,1,13.53-32.54,16,16,0,0,0-1.1-20.34L79.22,0.51a16,16,0,0,0-21.33-2.85A56.68,56.68,0,0,0,32,24,104.11,104.11,0,0,0,128,128,104.11,104.11,0,0,0,232,32a56.68,56.68,0,0,0-26.34-25.83,16,16,0,0,0-21.33,2.85l-18.13,22.13A16,16,0,0,0,165.13,38,50.23,50.23,0,0,1,172.4,66.2a136.12,136.12,0,0,1,57,57,50.23,50.23,0,0,1-28.2,7.27A16,16,0,0,0,222.34,158.87Z"></path></svg>;
const IconEmail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.94a16,16,0,0,0,22.82,0L216,74.19V192Z"></path></svg>;


const ContactDetails = () => {
  return (
    <section className={styles.section}>
      <div className={styles.detailsGrid}>
        <div className={styles.infoColumn}>
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}><IconLocation /></div>
            <div>
              <h3 className={styles.itemTitle}>Our Address</h3>
              <p className={styles.itemText}>{contactInfo.address}</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}><IconPhone /></div>
            <div>
              <h3 className={styles.itemTitle}>Phone</h3>
              <p className={styles.itemText}>{contactInfo.phone}</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}><IconEmail /></div>
            <div>
              <h3 className={styles.itemTitle}>Email</h3>
              <p className={styles.itemText}>{contactInfo.email}</p>
            </div>
          </div>
        </div>

        <div className={styles.mapColumn}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.551151282279!2d-74.015848624197!3d40.70588557139551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1127c36663%3A0x24490dede823b56!2sWall%20Street%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1693829471591!5m2!1sen!2s" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            // === THE FIX IS HERE ===
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapFrame}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;