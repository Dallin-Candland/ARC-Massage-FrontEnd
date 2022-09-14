import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(props) {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <nav className="navContainerFooter">
            <ul className="navContainer2">
              <span>
                <Link className="linkComponent2" to="/">
                  Home
                </Link>
              </span>
              <span>
                <Link className="linkComponent2" to="/location">
                  Location
                </Link>
              </span>
              <span>
                <Link className="linkComponent2" to="/services">
                  Services
                </Link>
              </span>
              <span>
                <Link className="linkComponent2" to="/about">
                  Contact
                </Link>
              </span>
            </ul>
          </nav>

          <span className="footerBusName">ARC Massage and Family Wellness</span>
          <br />

          <hr style={{ height: "2px" }}></hr>

          <section className="busInfo">
            <div>Address</div>
            <div>
              200 S Tobin St A <br />
              Renton, WA, 98057, US
            </div>
            <div>(206) 475-3574</div>
            <span>
              <i className="bi bi-envelope"></i>{" "}
            </span>
            <a
              className="emailLink"
              href="mailto:nicollecandland.lmt@gmail.com?subject=To ARC Massage"
            >
              nicollecandland.lmt@gmail.com
            </a>
          </section>
        </div>
      </footer>
    </>
  );
}
