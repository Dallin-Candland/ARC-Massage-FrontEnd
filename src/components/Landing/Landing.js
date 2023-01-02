import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Medical from '../Medical/Medical';
import Services from "../Services/Services";
import "./landing.css";
import Banner from '../Banner/Banner';


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
              <Banner />
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
              <Banner />
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
              <Banner />
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
              <Banner />
              <About />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
