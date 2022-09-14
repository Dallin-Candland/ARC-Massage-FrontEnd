import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { db } from "./db/db";
import "./services.css";
import Intakeq from '../intakeq/intakeq';

export default function Services(props) {
  const sessionInfo = db.map((el) => {
    return (
      <Grid item className="sessionWidthGrid">
        <img className="cardImage" src={el.image} alt="data" />
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography>
              {el.addOn && el.addOn}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.bio}
            </Typography>
          </CardContent>
          <CardActions>
            <div className='priceButton'>{el.addOn && '+'}${el.cost}</div>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <div>

    <div className='serviceContainer'>
      <h2 className='servicesTitle'>Services</h2>
      <div className='servicesInfo'>Here's what to consider when you book with us.</div>
      <Grid container spacing={2} className="gridContainer">
        {sessionInfo}
      </Grid>
    </div>
      <section className='bookAppContainer'>
        <Intakeq />
      </section>
    </div>
  );
}
