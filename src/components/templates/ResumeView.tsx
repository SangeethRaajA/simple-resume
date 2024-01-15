import { useEffect, useState } from "react";
import { Grid, Box, Typography, Card, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { IResume } from "../../interfaces/resume.interface";
import WorkExperience from "../molecules/Grid/WorkExperience";
import EducationGrid from "../molecules/Grid/EducationGrid";
import SkillsGrid from "../molecules/Grid/SkillsGrid";
import AchivementGrid from "../molecules/Grid/AchivementGrid";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const ResumeView = () => {
  let { id } = useParams();

  const [details, setDetails] = useState<IResume>();
  const [isLoading, setIsLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  //download resume
  const downloadPDF = () => {
    const capture = document.querySelector(".simple-resume");
    if (capture) {
      setLoader(true);
      html2canvas(capture as HTMLElement).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new jsPDF();
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save(`resume-${details?.firstname}-${details?.title}.pdf`);
      });
    }
  };

  //fetch data in useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://simple-resume-backend.onrender.com/api/v1/resume/${id}`
      );
      const data = await response.json();
      setDetails(data.data);
      console.log(data);
  
      if (!response.ok) {
        const msg = `Error occured : ${response.status}`;
        throw new Error(msg);
      }
    };
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
            <Grid
              className="simple-resume"
              container
              xs={8}
              margin={1}
              spacing={1}
              border={1}
            >
              {/* PROFILE SECTION */}
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
                  margin={3}
                >
                  <Grid item>
                    <Typography variant="subtitle1">
                      {details?.phone} ✆
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {details?.website}🌐
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {details?.mail}📧
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <hr />

              <Grid container>
                {/* OBJECTIVE SECTION */}

                <Grid item xs={3}>
                  <SkillsGrid skills={details?.skills || []} />
                </Grid>
                <Grid item xs={9}>
                  <Grid
                    container
                    style={{ backgroundColor: "grey", color: "white" }}
                  >
                    <Typography variant="h5" marginLeft={1}>
                      <b> Objective</b>
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1">
                    {details?.objective}
                  </Typography>
                  <br />

                  {/* WORK EXPERIENCE SECTION */}
                  <WorkExperience works={details?.work || []} />

                  {/* WORK SECTION */}

                  <EducationGrid educations={details?.edu || []} />

                  {/* ACHIVEMENT SECTION */}

                  <AchivementGrid achivements={details?.achievements || []} />
                </Grid>
              </Grid>
            </Grid>

            
          </Grid>
          
        )}
        <Grid container justifyContent="center">
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              onClick={downloadPDF}
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </Button>
          </Grid>
          
      </Box>
    </>
  );
};
