import { Grid } from "@mui/material";
import { intro, hours, policy } from "./db/db";
import "./location.css";

export default function Location(props) {
  const introSection = intro.map((el) => {
    return <div className="infoParagraph">{el}</div>;
  });

  const hoursSection = hours.map((el) => {
    return (
      <Grid item xs={5} className="gridItem">
        <div className="hourDay">{el.day}</div>
        <div>{el.hours}</div>
      </Grid>
    );
  });

  const policySection = policy.map((el) => {
    return (
      <div>
        <div className="policyTitle">{el.title}</div>
        <div>
          {el.info.map((info) => (
            <div className="policyInfo">{info}</div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="width1024 introSection">
        {introSection}
        <div className="introButton">Email</div>
        <div className="introButton">Call / Text</div>
        <div className="introButton">Policies and Info</div>
      </section>

      <section className="hours">
        <section className="width1024">
          <div className="busHours">
            <i className="bi bi-clock"></i> <span>Business Hours</span>
          </div>
          <Grid container>{hoursSection}</Grid>
        </section>
      </section>

      <section className="width1024 contactSection">
        <div>Let us know how we can best serve you.</div>
        <div className='appContact'>Phone: Appoinment / Contact</div>
        <div className='line'>{" "}</div>
        <div className='phoneNumber'>(206) 475-3574</div>
      </section>

      <section className="width1024 poicySection">
        <h2 className="policyIntro">Policies and Information.</h2>
        {policySection}
      </section>
    </>
  );
}
