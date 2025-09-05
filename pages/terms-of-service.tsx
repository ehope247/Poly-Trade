import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '120px 20px', minHeight: '80vh' }}>
        <h1>Terms of Service</h1>
        <p>Your terms of service content will go here.</p>
        <p>This page will outline the rules and regulations for using your website and services.</p>
      </main>
      <Footer />
    </div>
  );
};
export default TermsOfServicePage;