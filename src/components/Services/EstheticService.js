import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { db } from './db/estheticDB';
import './services.css';
import { Tab, Tabs } from 'react-bootstrap';

export default function EstheticServices(props) {
  const basicMassage = (service) => {
    let result = db.filter((filter) => filter.type === service);

    let finalResult = result.map((el, idx) => {
      return (
        <Grid item key={idx} className="sessionWidthGrid"  >
          {el.img ? (
            <img className="cardImage" src={el.image} alt="data" />
          ) : (
            ''
          )}
          {/* CSS Below removes space for an image */}
          <Card className="cardEsthetics" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography>{el.addOn && el.addOn}</Typography>
              <Typography variant="body2" color="text.secondary">

                {Array.isArray(el.bio) ? el.bio.map((el) => el) : el.bio}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="priceButton">
                {el.addOn && '+'}${el.cost}
              </div>
            </CardActions>
          </Card>
        </Grid>
      );
    });
    return finalResult;
  };

  return (
    <div className="serviceContainer">
      <div>
        <Tabs
          defaultActiveKey="basic"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        > 
          <Tab eventKey="basic" title="Facial" tabClassName="tab">
            <Grid
              container
              spacing={2}
              className="gridContainer"
            >
              {basicMassage('facial')}
            </Grid>
          </Tab>
          <Tab eventKey="wax" title="Wax" tabClassName="tab">
            <Grid
              // justifyContent="center"
              // alignItems="center"
              container
              spacing={2}
              className="gridContainer"
            >
              {basicMassage('wax')}
            </Grid>
          </Tab>
          <Tab eventKey="lamination" title="Lamination" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage('lamination')}
            </Grid>
          </Tab>
          <Tab eventKey="peel" title="Peel" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage('peel')}
            </Grid>
          </Tab>
          <Tab eventKey="enhancement" title="Enhancements" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage('enhancement')}
            </Grid>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
