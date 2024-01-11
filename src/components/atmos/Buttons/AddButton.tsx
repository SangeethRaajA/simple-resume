import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const AddButton = () => {
  return (
    <>
      <Grid container marginBottom={2} marginLeft={2} display="flex">
        <Button
          type="button"
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          color="success"
        >
          Add
        </Button>
      </Grid>
    </>
  );
};

export default AddButton;
