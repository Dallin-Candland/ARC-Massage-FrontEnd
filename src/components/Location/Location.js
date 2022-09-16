import { Link } from "react-router-dom";
import image from "../../images/stockImages/cc-stock-1.png";
import "./location.css";
import googleMaps from "../../images/googleMaps/googleMapsStaticPic1.PNG";
import Intakeq from "../intakeq/intakeq";

export default function Location(props) {
  return (
    <div className="locationContainer">
      <a href="https://www.google.com/maps/place/Arc+Massage+and+Family+Wellness+Center/@47.4835882,-122.2143937,18z/data=!4m5!3m4!1s0x0:0xf03a3ef3c009d17d!8m2!3d47.4841524!4d-122.2144035" target="_blank"
        rel="noreferrer"
        alt="Google Maps Link">
      <img className="googleMaps" src={googleMaps} alt="Google Maps" />
      </a>
      <img className="welcomeImage" src={image} alt="Welcoming Flower" />
      <h1 className="locationTitle">Visits to ARC Massage</h1>
      <div>
        We currently do not offer walk in visits. However we do offer same day
        appointments if they are made far enough in advance.
      </div>
      <div>
        We recommend scheduling at least 2 hours prior to give your therapist
        enough time.
      </div>
      <div>
        However, we may have a spot that becomes available if another client
        cancels their appointment.
      </div>
      <div className="lastDiv">Business hours listed in the link below.</div>
      <Link className="locationButton" to="/about">
        Hours & Additonal Information
      </Link>

      <div className="locationIntakeQ">
        <Intakeq />
      </div>
    </div>
  );
}
