import { Button, Grid } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
const DeleteButton = () => {
  return (
    <>
      <Grid container marginBottom={2} marginLeft={2} display="flex">
        <Button
          type="button"
          variant="contained"
          startIcon={<RemoveIcon />}
          size="large"
          color="error"
        >
          Remove
        </Button>
      </Grid>
    </>
  );
};

export default DeleteButton;
