import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Medical from '../Medical/Medical';
import Services from "../Services/Services";
import "./landing.css";
import GiftCards from '../Services/giftCard/giftCard';

export default function Landing(props) {
  return (
    <div className="landingPage">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Routes>
        <Route
          exact
          path="/location"
          element={
            <>
              <Header />
              <GiftCards />
              <Location />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/services"
          element={
            <>
              <Header />
              <GiftCards />
              <Services />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/medical"
          element={
            <>
              <Header />
              <GiftCards />
              <Medical />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/about"
          element={
            <>
              <Header />
              <GiftCards />
              <About />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
