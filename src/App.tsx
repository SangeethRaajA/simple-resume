import { Outlet } from "react-router";
import { Grid } from "@mui/material";
import NavBar from "./components/atmos/Nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Grid marginY={10}>
        <Outlet />
      </Grid>
    </>
  );
}

export default App;
