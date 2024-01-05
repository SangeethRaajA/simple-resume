import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import AddButton from "../Buttons/AddButton";

const WorkInuput = () => {
  return (
    <>
      <Box
        sx={{
          margin: "1%",
          border: "2px solid #ccc",
        }}
      >
        <Stack direction={"column"} spacing={2} margin={2}>
          <Typography>Work Place Name</Typography>
          <TextField placeholder="Name" type="text" />
          <Typography>Job Role</Typography>
          <TextField placeholder="Role" type="text" />
          <Grid container spacing={2} sx={{ margin: "5%", flexGrow: 1 }}>
            <Grid xs={6}>
              <Typography>Start date</Typography>
              <TextField type="date" />
            </Grid>
            <Grid xs={6}>
              <Typography>End date</Typography>
              <TextField type="date" />
            </Grid>
          </Grid>
          <Typography>Description</Typography>
          <TextField
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            rows={2}
            maxRows={4}
          />
          <AddButton />
        </Stack>
      </Box>
    </>
  );
};

export default WorkInuput;
