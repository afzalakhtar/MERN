import Footer from './Footer'
import InnerpageHero from './InnerpageHero'
import heroImg from '../images/img03.jpg'

export default function Cart() {
  return (
    <div className="container mx-auto">
      <InnerpageHero src={heroImg} alt="Cart page Hero" heading="Cart Page" />

      <Footer />
    </div>
  )
}
