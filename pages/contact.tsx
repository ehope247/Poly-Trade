import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import ContactDetails from '../components/ContactDetails'; // 1. Import the new component
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
        <PageHeader 
          title="Get In Touch"
          subtitle="We're here to help. Whether you have a question about our services, need assistance with your account, or want to discuss investment opportunities, our team is ready to answer all your questions."
        />

        <ContactDetails /> {/* 2. Add the component here */}

      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;