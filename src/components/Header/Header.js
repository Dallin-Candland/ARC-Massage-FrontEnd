import { Link } from 'react-router-dom';
import logo from "../../images/logo/Arc-logo.jpg";
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
          <ul className='navContainer'>
            <span>
              <Link className='linkComponent' to="/">Home</Link>
            </span>
            <span>
              <Link className='linkComponent' to="location">Location</Link>
            </span>
            <span>
              <Link className='linkComponent' to="services">Services</Link>
            </span>
            <span>
              <Link className='linkComponent' to="about">Contact</Link>
            </span>
          </ul>
        <span>
          <Link className='bookAppLink' to="about">Book an Appoinment</Link>
        </span>
      </nav>
    </header>
  );
}
