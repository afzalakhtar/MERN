import Hero from "../Components/hero/Hero";
import ProdItem from "./ProdItem";
import Footer from "../Components/footer/Footer";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <ProdItem />            
            <Footer />
        </div>
    )
}

export default Home;