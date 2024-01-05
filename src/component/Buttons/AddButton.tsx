import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import AddIcon from '@mui/icons-material/Add';

const AddButton = () => {
  return (
    <>
      <Grid container justifyContent="flex-end">
        <Button variant="solid" color="success" size="lg">
          <AddIcon/> Add
        </Button>
      </Grid>
    </>
  );
};

export default AddButton;
