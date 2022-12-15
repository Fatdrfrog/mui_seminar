import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import CardItem from "./CardItem";

function App() {
  const [crew, setCrew] = useState([]);

  const getSpaceXData = () => {
    axios
      .get("https://api.spacexta.com/v4/crew")
      .then((res) => {
        setCrew(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSpecificLaunch = () => {
    axios
      .get("https://api.spacexdata.com/v4/launches/5eb87d46ffd86e000604b388")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid container spacing={2} direction="column" p={3}>
      <Grid item>
        <Typography>SpaceX launches</Typography>
      </Grid>
      <Grid item>
        <Button onClick={getSpaceXData}>Get Crew</Button>
      </Grid>

      <Grid item>
        <Grid container spacing={3}>
          {crew.map((el) => (
            <Grid item xs={4}>
              <CardItem item={el} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
