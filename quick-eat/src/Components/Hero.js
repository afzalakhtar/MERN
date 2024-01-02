// import Slider from "react-slick";
import Slider from 'react-slick';
import './Hero.css';
import img01 from '../images/img01.png';
import img02 from '../images/img02.jpg';
import img03 from '../images/img03.jpg';

export default function Hero() {
    var settings = {
        className: "Slider",
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        adaptiveHeight: true
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src={img01} alt="food hero 1" />
                </div>
                <div>
                    <img src={img02} alt="food hero 2" />
                </div>
                <div>
                    <img src={img03} alt="food hero 3" />
                </div>
            </Slider>
        </>
    );
}
