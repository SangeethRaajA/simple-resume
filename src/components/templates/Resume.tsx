import { useEffect, useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import { Draggable } from "react-drag-reorder";

export const Resume = () => {
  const [words, setWords] = useState<string[]>([
    "Hello",
    "Hi",
    "How are you",
    "Cool",
  ]);
  const getChangedPos = (currentPos: number, newPos: number) => {
    console.log(currentPos, newPos);
  };
  useEffect(() => {
    fetch(
      "http://resume-backend.eu-north-1.elasticbeanstalk.com/api/v1/resume/rid-d08f3ebb-ece4-486c-83d9-2f4330bb83d0"
    )
      .then((response) => response.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={2}></Grid>
        <Grid container xs={8}>
          <Grid container>
            <Grid item xs={3}>
              left top Photo
            </Grid>
            <Grid item xs={9}>
              right top Profile
            </Grid>
            <Grid xs={2}></Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3}>
              left Dragger
            </Grid>
            <Grid item xs={9}>
              right Dragger
            </Grid>
            <Grid container border={2}>
              <Grid xs={4}>
                <Draggable onPosChange={getChangedPos}>
                  {words.map((word, idx) => (
                    <div key={idx} className="flex-item">
                      {word}
                    </div>
                  ))}
                </Draggable>
              </Grid>
              <Grid xs={4}>
                <Draggable onPosChange={getChangedPos}>
                  {words.map((word, idx) => (
                    <div key={idx} className="flex-item">
                      {word}
                    </div>
                  ))}
                </Draggable>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};
