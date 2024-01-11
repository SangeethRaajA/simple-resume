import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { IEducation } from "../../../interfaces/education.interface";

interface EducationGridProps {
  work: IEducation[];
}

const EducationGrid: React.FC<EducationGridProps> = ({ work }) => {
  return (
    <div>
      <Typography variant="h5"><b>Education</b></Typography>
      <TableBody>
        {work.map((job: IEducation) => (
          <TableRow key={job.id}>
            <TableCell>
              <Typography variant="h5">{job.ename}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">{job.estudy}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">{job.edesc}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </div>
  );
};

export default EducationGrid;
