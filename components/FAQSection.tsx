import React, { useState } from 'react';
import styles from './FAQSection.module.css';

// The data for our questions and answers
const faqs = [
  {
    question: 'How do I get started with Poly-Trade?',
    answer: 'Getting started is simple! Click on any "Get Started" or "Create Account" button, fill out the registration form, choose an investment plan, and fund your account using one of the provided wallet addresses. Our team will handle the rest.'
  },
  {
    question: 'Is my personal information and capital secure?',
    answer: 'Absolutely. We use state-of-the-art encryption and security protocols to protect your data and funds. Our platform is built on a secure infrastructure, and we adhere to strict privacy policies to ensure your information is never compromised.'
  },
  {
    question: 'What are the fees for your services?',
    answer: 'We believe in transparency. Our fee structure is based on the investment plan you choose and is clearly outlined before you commit. There are no hidden charges or surprise fees. Typically, we charge a small percentage of the profits we generate for you.'
  },
  {
    question: 'Can I withdraw my money at any time?',
    answer: 'Yes, you have full control over your capital. You can request a withdrawal at any time through your user dashboard. Processing times are typically within 24-48 hours, depending on the blockchain network.'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked question is already open, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <p className={styles.subtitle}>
        Have questions? We have answers. Here are some of the most common inquiries from our clients.
      </p>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.questionBox} onClick={() => handleToggle(index)}>
              <span className={styles.questionText}>{faq.question}</span>
              <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`${styles.answerBox} ${activeIndex === index ? styles.open : ''}`}>
              <p className={styles.answerText}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;