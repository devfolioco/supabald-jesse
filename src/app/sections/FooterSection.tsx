import Button from '../components/Button';
import Footer from '../components/Footer';
import OnchainTypography from '../components/OnchainTypography';

const FooterSection = ({ registrationUrl }: { registrationUrl: string }) => {
  return (
    <section className="bg-white px-6 md:px-8 lg:px-52 bg-grid-white flex flex-col items-center w-full">
      <Button href={registrationUrl} variant="secondary">
        Register & mint your NFT
      </Button>
      <Footer />
      <OnchainTypography />
    </section>
  );
};

export default FooterSection;
