import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <>
      <ul className={props.navContainer}>
        <span>
          <Link className={props.linkComponent} to="/">
            Home
          </Link>
        </span>
        <span>
          <Link className={props.linkComponent} to="location">
            Location
          </Link>
        </span>
        <span>
          <Link className={props.linkComponent} to="services">
            Services
          </Link>
        </span>
        <span>
          <Link className={props.linkComponent} to="about">
            Contact
          </Link>
        </span>
      </ul>

      <ul className='navMobileContainer'>
        <div className='navLinkComponentContainer'>
          <Link className='navLinkComponent' to="/">
            Home
          </Link>
        </div>
        <div className='navLinkComponentContainer'>
          <Link className='navLinkComponent' to="location">
            Location
          </Link>
        </div>
        <div className='navLinkComponentContainer'>
          <Link className='navLinkComponent' to="services">
            Services
          </Link>
        </div>
        <div className='navLinkComponentContainer'>
          <Link className='navLinkComponent' to="about">
            Contact
          </Link>
        </div>
      </ul>


    </>
  );
}
