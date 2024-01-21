import Hero from "../Components/hero/Hero";
import ProdItem from "../Components/ProdItem";
import Footer from "../Components/footer/Footer";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <ProdItem displayCount={6} />            
            <Footer />
        </div>
    )
}

export default Home;