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
          <br /> Tender Love
          <br /> and Care.
        </span>
        <span className="span titleTextRight">
          <div className='intro'>Get the rejuvenating feeling your body has been craving.</div>
          <a className="MTSessionButton">Massage Therapy Sessions</a>
        </span>
      </section>
    </div>
  );
}
