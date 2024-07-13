import Button from '../components/Button';
import Footer from '../components/Footer';
import OnchainTypography from '../components/OnchainTypography';

const FooterSection = () => {
  return (
    <section className="bg-white px-6 md:px-8 lg:px-52 bg-grid-white flex flex-col items-center w-full mt-16">
      <Button href={'https://opensea.io/collection/supabald-jesse'} variant="secondary">
        View on OpenSea
      </Button>
      <Footer />
      <OnchainTypography />
    </section>
  );
};

export default FooterSection;
