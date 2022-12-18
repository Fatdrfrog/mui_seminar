import { Button, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const Contents = () => {
  return (
    <Grid item>
      <Button component={Link} to="/crew">
        Get Crew
      </Button>

      <Outlet />
    </Grid>
  );
};
