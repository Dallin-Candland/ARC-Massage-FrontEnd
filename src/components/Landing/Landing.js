import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Services from "../Services/Services";

import './landing.css'

export default function Landing(props) {
  return (
    <div className='landingPage'>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="location" element={<Location />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}
