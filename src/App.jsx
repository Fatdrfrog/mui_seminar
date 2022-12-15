import axios from "axios";
import { Grid, Typography } from "@mui/material";

import { Crew } from "./Crew";

function App() {
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
      <Crew />
    </Grid>
  );
}

export default App;
