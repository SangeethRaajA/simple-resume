import { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Card,
  Avatar,
} from "@mui/material";
import { Draggable } from "react-drag-reorder";
import { useParams } from "react-router-dom";
import { IResume } from "../../interfaces/resume.interface";
import WorkExperience from "../molecules/Grid/WorkExperience";
import EducationGrid from "../molecules/Grid/EducationGrid";

export const ResumeView = () => {
  let { id } = useParams();

  const [details, setDetails] = useState<IResume>();
  const [isLoading, setIsLoading] = useState(true);

  const [skills, setSkills] = useState<string[]>([]);

  const [words, setWords] = useState<string[]>([
    "Hello",
    "Hi",
    "How are you",
    "Cool",
  ]);

  const getChangedPos = (currentPos: number, newPos: number) => {
    console.log(currentPos, newPos);
  };

  const fetchData = async () => {
    const response = await fetch(
      `http://resume-backend.eu-north-1.elasticbeanstalk.com/api/v1/resume/${id}`
    );
    const data = await response.json();
    setDetails(data.data);
    console.log(data);

    if (!response.ok) {
      const msg = `Error occured : ${response.status}`;
      throw new Error(msg);
    }
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          display="flex"
          justifyContent="left"
          alignItems="center"
          margin={2}
        >
          <Typography variant="h4">View Resume</Typography>
        </Grid>

        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin={2}
          >
            <Grid container xs={8} margin={1} spacing={1}>
              <Grid
                container
                style={{ backgroundColor: "blueviolet", color: "white" }}
              >
                <Grid item xs={3}>
                  <Card>{/* <Avatar /> */}</Card>
                </Grid>
                <Grid item xs={5} margin={1}>
                  <Typography variant="h5">
                    <b>
                      {details?.firstname} {details?.lastname}
                    </b>
                  </Typography>
                  <Typography variant="h6">{details?.title}</Typography>
                  <br />
                  <Typography variant="subtitle2">
                    {details?.street},
                  </Typography>
                  <Typography variant="subtitle2">{details?.state},</Typography>
                  <Typography variant="subtitle2">{details?.city}</Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={3}
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  margin={1}
                >
                  <Typography variant="subtitle1">{details?.phone}</Typography>
                  <Typography variant="subtitle1">
                    {details?.website}
                  </Typography>
                  <Typography variant="subtitle1">{details?.mail}</Typography>
                </Grid>
              </Grid>
              <br />
              <hr />
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="h5">
                    <b>Skills</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h5">
                    <b>Objective</b>
                  </Typography>
                  <Typography variant="subtitle1">
                    {details?.objective}
                  </Typography>
                  <br />
                </Grid>

                <Grid item xs={3}></Grid>

                <Grid item xs={9}>
                  <WorkExperience work={details?.work ? [details.work] : []} />
                </Grid>

                <Grid item xs={3}>
                  <Typography variant="h5">
                    <b>Achivements</b>
                  </Typography>
                  <Typography variant="subtitle1">
                    <b>{details?.achievement}</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <EducationGrid work={details?.edu ? [details.edu] : []} />
                </Grid>

                <Grid container>
                  {/* Left Dragger */}
                  {/* <Grid xs={4} border={2}>
                    <Draggable onPosChange={getChangedPos}>
                      {words.map((word, idx) => (
                        <div key={idx} className="flex-item">
                          {word}
                        </div>
                      ))}
                    </Draggable>
                  </Grid> */}

                  {/* Right Dragger */}
                  {/* <Grid xs={4} border={2}>
                    <Draggable onPosChange={getChangedPos}>
                      {words.map((word, idx) => (
                        <div key={idx} className="flex-item">
                          {word}
                        </div>
                      ))}
                    </Draggable>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};
