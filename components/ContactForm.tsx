import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Send Us a Message</h2>
        <p className={styles.subtitle}>
          We&apos;ll get back to you as soon as possible.
        </p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input type="text" id="name" name="name" className={styles.input} placeholder="John Carter" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" name="email" className={styles.input} placeholder="you@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input type="text" id="subject" name="subject" className={styles.input} placeholder="Investment Inquiry" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="message" className={styles.textarea} placeholder="Your message here..." rows={6} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;