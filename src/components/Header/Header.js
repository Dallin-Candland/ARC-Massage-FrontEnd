import logo from "../../images/logo/Final_ARC_Logo_small_web.png";
import Intakeq from "../intakeq/intakeq";
import Nav from "../Nav/Nav";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />

      <nav className="navHeader">
        <Nav navContainer={"navContainer"} linkComponent={"linkComponent"} />
        <span className="bookAppLink">
          <Intakeq />
        </span>
      </nav>
    </header>
  );
}
