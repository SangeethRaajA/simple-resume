import { Grid } from "@mui/material";
import DisplayTab from "./component/Sections/DisplayTab";
import DisplayForm from "./component/Sections/DisplayForm";

function App() {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "1%", flexGrow: 1 }}>
        <Grid xs={4} >
          <DisplayForm/>
        </Grid>
        <Grid xs={8}>
          <DisplayTab />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
