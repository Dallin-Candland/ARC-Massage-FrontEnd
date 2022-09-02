import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Services from "../Services/Services";

export default function Landing(props) {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="location" element={<Location />} />
      </Routes>
      <Routes>
        <Route path="services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
