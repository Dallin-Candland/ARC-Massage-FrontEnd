import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import "./main.css";

export default function Main(props) {
  return (
    <div className='mainBackground'>
      <div className='spaceAboveHeader'> </div>
      <Header />
      <section className="main">
        <div className="opening"></div>
        <span className="span titleText intro">
          Professional
          {/* TAKE OUT br */}
          <br /> Tender Love
          <br /> and Care.
          {process.env.REACT_APP_TEST}
          oooo
        </span>
        <span className="span titleTextRight">
          <div className='intro'>Get the rejuvenating feeling your body has been craving.</div>
          <Link to="services" className="MTSessionButton">Massage Therapy Sessions</Link>
        </span>
      </section>
    </div>
  );
}
