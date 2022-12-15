import { useEffect, useState } from "react";

import axios from "axios";
import { Button, Grid } from "@mui/material";
import CardItem from "./CardItem";
import { CardSkeleton } from "./skeletons/CardSkeleton";
import { ErrorPage } from "./ErrorPage";

export const Crew = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [crew, setCrew] = useState([]);

  const getSpaceXData = () => {
    setLoading(true);
    axios
      .get("https://api.spacexdata.com/v4/crew")
      .then((res) => {
        setCrew(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  if (isLoading)
    return (
      <Grid container spacing={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(() => (
          <Grid item xs={4}>
            <CardSkeleton />
          </Grid>
        ))}
      </Grid>
    );

  if (isError) return <ErrorPage />;

  return (
    <>
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
    </>
  );
};
