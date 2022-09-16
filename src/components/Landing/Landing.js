import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
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
              <Services />
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
              <About />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
