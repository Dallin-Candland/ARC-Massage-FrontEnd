import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Medical from '../Medical/Medical';
import PackageSale from "../Services/sale/PackageSale";
import Services from "../Services/Services";
import "./landing.css";

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
              <PackageSale />
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
              <PackageSale />
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
              <PackageSale />
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
              <PackageSale />
              <About />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
