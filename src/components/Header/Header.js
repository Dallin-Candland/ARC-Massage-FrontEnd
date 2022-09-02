import { Link } from 'react-router-dom';
import logo from "../../images/logo/Arc-logo.jpg";
import Nav from '../Nav/Nav';
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />

      <section className="h1">
        <div className="titleTop">ARC MASSAGE</div>
        <div className="titleBot">& FAMILY WELLNESS CENTER</div>
      </section>

      <nav className="navHeader">

        <Nav
         navContainer={"navContainer"}
         linkComponent={'linkComponent'}
        />
        <span>
          <Link className='bookAppLink' to="about">Book an Appoinment</Link>
        </span>
      </nav>
    </header>
  );
}
