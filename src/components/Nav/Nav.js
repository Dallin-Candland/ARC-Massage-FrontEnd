import { Room, Security } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Intakeq from '../intakeq/intakeq';

export default function Nav(props) {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <ul className="navContainer">
        <span>
          <Link className="linkComponent" to="/">
            Home
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/location">
            Location
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/services">
            Services
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/medical">
            Insurance
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/about">
            Contact
          </Link>
        </span>
      </ul>
        <span className='bookNow'>
          <Intakeq />
        </span>

      {/* <div className="hamburger" onClick={toggleMobileMenu}> */}
      <div className={open ? 'hamburger openHamburger' : 'hamburger closedHamburger'} onClick={() =>setOpen(open ? false : true)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={open ? 'navMobileContainer' : 'closed'}>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/">
            Home
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/location">
            Location
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/services">
            Services
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/medical">
            Insurance
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/about">
            Contact
          </Link>
        </div>
        <span className='navLinkComponentContainer'>
          <Intakeq  className="navLinkComponent"/>
        </span>
      </ul>
    </>
  );
}


/*
firest day on tuesday
pass Security
mail Room
badge Room
laptop other stuff
admin team i9 paperwork
specific identification for i9 paperwork
wednesday at federal way
  instructions
Chris cherrat as mentor
  new hire mentor

customs and accounting
  dev and suppport

  cat support
  3 EDI support teams total
distrubution -other team
accounting  -other team

close to order management group
desk

coat on is ok
externally facing must wear a tie

support team is rarely on external calls

first walk in the door
lobby is open to public
mike wren is execting me
two difficult building
  will recieve address to the building to meet Mike Wren
Most of the team works in federal way

notes:
  bring paperwork for notes
  suppply closet
    has paperwork
  
*/
