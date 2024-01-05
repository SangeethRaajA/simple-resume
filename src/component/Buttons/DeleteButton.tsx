import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import RemoveIcon from '@mui/icons-material/Remove';
const DeleteButton = () => {
  return (
    <>
      <Grid container justifyContent="flex-end">
        <Button variant="solid" color="danger" size="lg">
         <RemoveIcon/> Remove
        </Button>
      </Grid>
    </>
  );
};

export default DeleteButton;
