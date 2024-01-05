import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import UpdateIcon from '@mui/icons-material/Update';

const UpdateButton = () => {
    return (
        <>
          <Grid container justifyContent="flex-end">
            <Button variant="solid" color="success" size="lg">
              <UpdateIcon/> Update
            </Button>
          </Grid>
        </>
      );
}

export default UpdateButton