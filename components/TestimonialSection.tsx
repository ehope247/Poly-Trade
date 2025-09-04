import styles from './TestimonialSection.module.css';

// SVG for the quote icon
const IconQuote = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#8e2de2" viewBox="0 0 256 256"><path d="M108,80a32,32,0,1,0,32,32v8a8,8,0,0,1-16,0v-8a16,16,0,1,1,16-16,8,8,0,0,1,8,8v8a40,40,0,0,1-40,40H88a8,8,0,0,1,0-16h20a24,24,0,0,0,24-24V88A8,8,0,0,1,140,80Zm88,0a32,32,0,1,0,32,32v8a8,8,0,0,1-16,0v-8a16,16,0,1,1,16-16,8,8,0,0,1,8,8v8a40,40,0,0,1-40,40H176a8,8,0,0,1,0-16h20a24,24,0,0,0,24-24V88A8,8,0,0,1,228,80Z"></path></svg>;

// Data for our testimonials (unchanged)
const fakeTestimonials = [
  {
    name: 'Sarah J.',
    location: 'Entrepreneur, USA',
    quote: '"Poly-Trade made investing accessible. I started with a small amount, and their AI-driven approach has delivered consistent growth. The platform is incredibly intuitive!"',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'
  },
  {
    name: 'Carlos R.',
    location: 'Software Engineer, Spain',
    quote: '"The level of transparency and support is unmatched. I can track everything in real-time, and the customer service team is always responsive. My capital is in safe hands."',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Aisha K.',
    location: 'Financial Analyst, UK',
    quote: '"As someone from the finance industry, I\'m impressed by their technology. The portfolio monitoring tools are robust, and the returns have exceeded my expectations."',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  }
];

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Trusted by Investors Worldwide</h2>
      <p className={styles.subtitle}>
        Don't just take our word for it. Here's what our clients have to say about their success with Poly-Trade.
      </p>
      <div className={styles.cardsContainer}>
        {fakeTestimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.quoteIcon}><IconQuote /></div>
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.authorInfo}>
              <img src={testimonial.imageUrl} alt={testimonial.name} className={styles.profileImage} />
              <div>
                <h4 className={styles.name}>{testimonial.name}</h4>
                <span className={styles.location}>{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;