import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(props) {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <nav className="navContainerFooter">
            <ul className="navContainer2">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/">
                      Home
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2 " to="/location">
                      Location
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/services">
                      Services
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/insurance">
                      Insurance
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/about">
                      Contact
                    </Link>
                  </span>
                </Grid>
              </Grid>
            </ul>
          </nav>

          <span className="footerBusName">ARC Massage and Family Wellness</span>
          <br />

          <hr style={{ height: "2px" }}></hr>

          <section className="busInfo">
            <div>Contact Us:</div>
            <div className="addressLink">
              <a
                href="https://www.google.com/maps/place/Arc+Massage+and+Family+Wellness+Center/@47.4835882,-122.2143937,18z/data=!4m5!3m4!1s0x0:0xf03a3ef3c009d17d!8m2!3d47.4841524!4d-122.2144035"
                target="_blank"
                rel="noreferrer"
                alt="Google Maps Link"
              >
                <div>
                  200 South Tobin St, Suite A <br />
                  Renton, WA, 98057, US
                </div>
              </a>
            </div>
            <div>
              <a href="tel:2064753574">(206) 475-3574</a>
            </div>
            <span>
              <i className="bi bi-envelope envelope"></i>{" "}
            </span>
            <a
              className="emailLink"
              href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness"
            >
              support@arcmassageandwellness.com
            </a>
          </section>
          <div className="copyright">
            &#169; 2022 ARC Massage and Family Wellness Center, LLC
          </div>
          <div className="copyright">All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
}
