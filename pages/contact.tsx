import Header from '../components/Header';
// The broken 'PageHeader' import is now gone.
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* We add padding here to create space at the top of the page */}
        <div style={{ paddingTop: '120px' }}>
          <ContactDetails />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;