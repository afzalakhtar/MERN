import brand from './logo.svg';
import './topNav.css';
import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from './Services';
import About from "./About";
import Contact from './Contact'

const TopNav = () => {
    return (


        <BrowserRouter>
            <nav>
            <Link to='/' className='branding'><div><img src={brand} alt='Logo' className='App-logo' /></div></Link>

                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Services'}>Services</Link></li>
                    <li><Link to={'/About'}>About</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Services" element={<Services />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default TopNav;