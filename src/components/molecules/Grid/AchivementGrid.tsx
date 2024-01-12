import { Typography, Grid } from "@mui/material";
import { FC } from "react";

interface AchivementGridProps {
  achivements: string[];
}
const AchivementGrid: FC<AchivementGridProps> = ({ achivements }) => {
  return (
    <>
      <div>
        <br />
        <Grid container style={{ backgroundColor: "grey", color: "white" }}>
          <Typography variant="h5" marginLeft={1}>
            <b> Achivements</b>
          </Typography>
        </Grid>

        <Grid >
          {achivements.map((achive, id) => (
            <Grid key={id} margin={1}>
              <Typography variant="subtitle1">
                - <b>{achive}</b>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default AchivementGrid;
