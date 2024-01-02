import Hero from "./Hero";
import ProdItem from "./ProdItem";
import Footer from "./Footer";

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