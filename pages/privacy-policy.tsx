import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '120px 20px', minHeight: '80vh' }}>
        <h1>Privacy Policy</h1>
        <p>Your privacy policy content will go here.</p>
        <p>This page will detail how you collect, use, and protect user data.</p>
      </main>
      <Footer />
    </div>
  );
};
export default PrivacyPolicyPage;