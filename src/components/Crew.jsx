import { useEffect, useState } from "react";

import axios from "axios";

import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

import { CardSkeleton } from "../skeletons/CardSkeleton";
import { ErrorPage } from "../ErrorPage";
import CardItem from "../CardItem";

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

  useEffect(() => {
    getSpaceXData();
  }, []);

  if (isLoading)
    return (
      <Grid container spacing={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
          <Grid key={el} item xs={4}>
            <CardSkeleton />
          </Grid>
        ))}
      </Grid>
    );

  if (isError) return <ErrorPage />;

  return (
    <Grid item>
      <Grid container spacing={3}>
        {crew.map((el) => (
          <Grid key={el.id} item xs={4}>
            <CardItem item={el} />
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </Grid>
  );
};
