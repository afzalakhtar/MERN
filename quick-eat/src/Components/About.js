import InnerpageHero from './InnerpageHero';
import img from '../images/img02.jpg'
import Footer from './Footer';

const About = () => {
    return (
        <div className="container mx-auto">
            <InnerpageHero src={img} alt="Hero" heading="About Page" />
            <Footer />
        </div>
    )
}

export default About;