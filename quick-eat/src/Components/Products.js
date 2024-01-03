import ProdItem from "./ProdItem";
import Footer from "./Footer";
import InnerpageHero from './InnerpageHero';
import img1 from '../images/img01.png';

function Products() {
  return (
    <div className="container mx-auto">
      <InnerpageHero src={img1} alt="Hero" heading="Product Page" />
      
      <ProdItem />
      <Footer />
    </div>
  )
}

export default Products