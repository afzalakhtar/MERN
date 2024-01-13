import InnerpageHero from '../Components/hero/InnerpageHero';
import img from '../images/img02.jpg'
import Footer from '../Components/footer/Footer';

const About = () => {
    return (
        <div className="container mx-auto">
            <InnerpageHero src={img} alt="Hero" heading="About Page" />
            <div className='max-w-6xl mx-auto mt-8'>
                <h2 className='text-4xl font-bold mb-6'>About QuickEat - Delivering Delicious Food to Your Doorstep</h2>
                <p className='mb-4'>Welcome to QuickEat, your go-to food delivery app for fast and reliable service! We are a team of passionate foodies and tech enthusiasts dedicated to providing you with the best food delivery experience possible.</p>
                <p className='mb-4'>Our goal is to connect you with your favorite restaurants and dishes in just a few clicks, no matter where you are. Whether you're craving Indian, Chinese, Italian, or anything in between, we've got you covered.</p>
                <p className='mb-4'>We partner with local restaurants and food vendors to bring you a wide range of delicious options that you can enjoy from the comfort of your own home or office. Our delivery team is committed to providing prompt and friendly service, so you can always count on us to deliver your food hot and fresh.</p>
                <p className='mb-4'>At QuickEat, we believe in making food delivery convenient, affordable, and hassle-free. Download our app today and start enjoying your favorite foods delivered right to your doorstep!</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;