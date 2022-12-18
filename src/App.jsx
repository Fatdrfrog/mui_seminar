import axios from "axios";
import { Grid, Typography } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Contents } from "./Contents";
import { Crew } from "./components/Crew";
import { DialogComponent } from "./UI/DialogComponent";

function App() {
  return (
    <Router>
      <Grid container spacing={2} direction="column" p={3}>
        <Grid item>
          <Typography>SpaceX launches</Typography>
        </Grid>

        <Routes>
          <Route path="/" element={<Contents />}>
            <Route path="/crew" element={<Crew />}>
              <Route path="/crew/:launchID" element={<DialogComponent />} />
            </Route>
          </Route>
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;
