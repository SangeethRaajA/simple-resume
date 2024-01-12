import { Typography, Grid, Button } from "@mui/material";
import { FC } from "react";

interface SkillGridProps {
  skills: string[];
}

const SkillsGrid: FC<SkillGridProps> = ({ skills }) => {
  return (
    <div>
      <Grid
        direction={"column"}
        display="flex"
        justifyContent="left"
        alignItems="left"
      >
        <Grid marginLeft={1}>
          <Typography variant="h5">
            <b>Skill</b>
          </Typography>
        </Grid>

        {skills.map((skill, id) => (
          <Grid key={id} margin={1}>
            <Button
              type="button"
              variant="contained"
              size="medium"
              color="inherit"
            >
              {skill}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsGrid;
