import { useEffect, useState } from "react";

import axios from "axios";

export const useLaunchAPI = (launchID) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const [launch, setLaunch] = useState(null);

  const getSpecificLaunch = () => {
    setLoading(true);
    axios
      .get(`https://api.spacexdata.com/v4/launches/${launchID}`)
      .then((res) => {
        setLoading(false);
        setError(false);
        setLaunch(res.data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (launchID) getSpecificLaunch();
  }, [launchID]);

  return { isLoading, isError, launch };
};
