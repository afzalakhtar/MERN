import ProdItem from "./ProdItem";
import Footer from "./Footer";
import InnerpageHero from './InnerpageHero';
import img1 from '../images/img01.png';

function Products() {
  return (
    <>
      <InnerpageHero src={img1} alt="Hero" heading="Product Page" />
      
      <ProdItem />
      <Footer />
    </>
  )
}

export default Products