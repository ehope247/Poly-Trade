import Header from '../components/Header';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm'; // This import will now work
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
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