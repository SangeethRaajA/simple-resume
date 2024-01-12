import { Grid, Typography, Table, TableRow } from "@mui/material";
import { IWork } from "../../../interfaces/work.interface";
import { FC } from "react";

interface WorkExperienceProps {
  works: IWork[];
}

const WorkExperience: FC<WorkExperienceProps> = ({ works }) => {
  return (
    <>
    <br />
      <Grid container style={{ backgroundColor: "grey", color: "white" }}>
        <Typography variant="h5" marginLeft={1}>
          <b> Work Experience</b>
        </Typography>
      </Grid>

      <Table stickyHeader aria-label="sticky table">
        {works.map((job: IWork) => (
          <TableRow key={job.id}>
            <Grid item xs={7}>
              <Typography variant="h5">{job.wname}</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={"right"}>
              <Typography variant="h6">{job.role}</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={"right"}>
              <Typography variant="subtitle1">
                {job.sdate} - {job.edate}
              </Typography>
            </Grid>
            <Typography variant="h6">{job.wdesc}</Typography>
            <hr />
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default WorkExperience;
