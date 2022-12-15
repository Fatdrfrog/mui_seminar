import { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Typography } from "@mui/material";

function App() {
  const [crew, setCrew] = useState([]);

  const getSpaceXData = () => {
    axios
      .get("https://api.spacexdata.com/v4/crew")
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
        <button onClick={getSpaceXData}>Get Crew</button>
      </Grid>

      <Grid item>
        {crew.map((el) => (
          <div
            key={el.id}
            style={{ border: "solid 1px black", padding: ".5rem" }}
          >
            <a href={el.wikipedia} target="_blank">
              <p>{el.name}</p>
            </a>
            <p>Agency: {el.agency}</p>
            <img src={el.image} alt={el.name} style={{ width: "200px" }} />
            <p>status : {el.status}</p>
            <button>Show more</button>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
