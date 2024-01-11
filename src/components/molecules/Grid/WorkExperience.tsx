import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { IWork } from "../../../interfaces/work.interface";

interface WorkExperienceProps {
  work: IWork[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
  return (
    <div>
      <Typography variant="h5"><b>Work Experience</b></Typography>
      <TableBody>
          {work.map((job: IWork) => (
            <TableRow key={job.id}>
              <TableCell>
                <Typography variant="h5">{job.wname}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">{job.role}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">{job.wdesc}</Typography>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </div>
  );
};

export default WorkExperience;
