import { Grid, Table, TableRow, Typography } from "@mui/material";
import { IEducation } from "../../../interfaces/education.interface";
import { FC } from "react";

interface EducationGridProps {
  educations: IEducation[];
}

const EducationGrid: FC<EducationGridProps> = ({ educations }) => {
  return (
    <div>
      <br />
      <Grid container style={{ backgroundColor: "grey", color: "white" }} >
        <Typography variant="h5" marginLeft={1}>
          <b>Education</b>
        </Typography>
      </Grid>

      <Table stickyHeader aria-label="sticky table">
        {educations.map((place: IEducation) => (
          <TableRow key={place.id}>
            <Grid item xs={7}>
              <Typography variant="h5">{place.ename}</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={"right"}>
              <Typography variant="h6">{place.estudy}</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={"right"}>
              <Typography variant="subtitle1">
                {place.sdate} - {place.edate}
              </Typography>
            </Grid>
            <Typography variant="h6">{place.edesc}</Typography>
            <hr />
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default EducationGrid;
