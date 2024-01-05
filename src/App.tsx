import { Grid } from "@mui/material";
import SelectionTab from "./component/Sections/SelectionTab";
import DisplayTab from "./component/Sections/DisplayTab";

function App() {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "1%", flexGrow: 1 }}>
        <Grid xs={4}>
          <SelectionTab />
        </Grid>
        <Grid xs={8}>
          <DisplayTab />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
