import { IResume } from "../../interfaces/resume.interface";
import ProfileInput2 from "../molecules/InputForm/ProfileInput2";
import { Box, Grid, Typography } from "@mui/material";

const FormDemo = () => {
  function handleSubmit(formData: IResume) {
    console.log(formData);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          display="flex"
          justifyContent="left"
          alignItems="center"
          margin={2}
        >
          <Typography variant="h4">Create Resume</Typography>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <ProfileInput2 onSubmit={handleSubmit} />
        </Grid>
      </Box>
    </>
  );
};

export default FormDemo;
