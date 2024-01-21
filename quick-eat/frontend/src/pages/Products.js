import ProdItem from "../Components/ProdItem";
import Footer from "../Components/footer/Footer";
import InnerpageHero from '../Components/hero/InnerpageHero';
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