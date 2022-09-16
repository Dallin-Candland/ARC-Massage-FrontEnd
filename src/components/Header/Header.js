import logo from "../../images/logo/Final_ARC_Logo_small_web.png";
import Nav from "../Nav/Nav";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />

      <nav className="navHeader">
        <Nav />
      </nav>
    </header>
  );
}
