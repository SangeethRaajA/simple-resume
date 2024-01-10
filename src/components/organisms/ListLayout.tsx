import { Grid, Stack } from "@mui/material";
import { IResume } from "../../interfaces/resume.interface";
import ViewList from "./ViewList";

interface IListLayoutInterface {
  data: IResume[];
}
const ListLayout = ({ data }: IListLayoutInterface) => {
  return (
    <Stack className="py-2">
      <Grid className="py-2">
        <Grid />
        <Grid xs="auto" className="ml-auto"></Grid>
      </Grid>
      <ViewList data={data} />
    </Stack>
  );
};

export default ListLayout;
