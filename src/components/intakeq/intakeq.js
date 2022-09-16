import "./intakeq.css";

export default function Intakeq(props) {
  return (
    <>
      <a
        href={process.env.REACT_APP_INTAKEQ}
        target="_blank"
        rel="noreferrer"
        alt="Make an Online Appointment"
        className='bookAppLink '
      >
        Book Now
      </a>
    </>
  );
}
