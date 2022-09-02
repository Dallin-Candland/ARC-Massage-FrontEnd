import Nav from "../Nav/Nav";
import "./footer.css";

export default function Footer(props) {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <nav className="navContainerFooter">
            <Nav
              navContainer={"navContainer2"}
              linkComponent={"linkComponent2"}
            />
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
            <span>
              <i class="bi bi-envelope"></i>{" "}
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
